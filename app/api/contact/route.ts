import { NextResponse, type NextRequest } from 'next/server';
import { getContent } from '@/content';
import { isLocale, defaultLocale } from '@/lib/i18n';
import { site } from '@/lib/site';
import { hasErrors, LIMITS, validateContact, type ContactPayload } from '@/lib/validate';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * Very small in-memory throttle: five submissions per IP per hour.
 * Enough to stop casual abuse on a single instance; swap for Upstash or
 * similar if the site is ever deployed across multiple regions.
 */
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

const clean = (value: unknown, max: number) =>
  typeof value === 'string' ? value.trim().slice(0, max) : '';

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!
  );

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown';

  if (rateLimited(ip)) {
    return NextResponse.json({ ok: false, error: 'rate_limited' }, { status: 429 });
  }

  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'bad_request' }, { status: 400 });
  }

  // Honeypot: pretend everything went fine so bots do not learn anything.
  if (clean(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const payload = {
    name: clean(body.name, LIMITS.name),
    email: clean(body.email, LIMITS.email),
    phone: clean(body.phone, LIMITS.phone),
    subject: clean(body.subject, LIMITS.subject),
    message: clean(body.message, LIMITS.message),
    locale: isLocale(String(body.locale)) ? String(body.locale) : defaultLocale
  };

  const errors = validateContact(payload);
  if (hasErrors(errors)) {
    return NextResponse.json({ ok: false, error: 'invalid', fields: errors }, { status: 422 });
  }

  const content = getContent(payload.locale as Parameters<typeof getContent>[0]);
  const subjectLabel =
    content.services.items.find((item) => item.key === payload.subject)?.title ??
    content.contact.form.subject.other;

  const delivered = await deliver({ ...payload, subjectLabel });
  if (!delivered) {
    return NextResponse.json({ ok: false, error: 'delivery_failed' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

type Delivery = {
  name: string;
  email: string;
  phone: string;
  subjectLabel: string;
  message: string;
  locale: string;
};

/**
 * Sends the enquiry through Resend when RESEND_API_KEY is configured.
 * Without a key — local development, or before the client sets up a mailbox —
 * the enquiry is written to the server log instead of being lost.
 */
async function deliver(enquiry: Delivery): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? 'Private Office Consulting <onboarding@resend.dev>';

  if (!apiKey) {
    console.info('[contact] no RESEND_API_KEY set — enquiry logged instead of emailed:', {
      ...enquiry,
      receivedAt: new Date().toISOString()
    });
    return true;
  }

  const rows: [string, string][] = [
    ['Name', enquiry.name],
    ['Email', enquiry.email],
    ['Phone', enquiry.phone || '—'],
    ['Subject', enquiry.subjectLabel],
    ['Language', enquiry.locale.toUpperCase()]
  ];

  const html = `
    <div style="font-family:ui-sans-serif,system-ui,sans-serif;color:#14140f;line-height:1.6">
      <h2 style="font-weight:500;margin:0 0 18px">New enquiry — ${escapeHtml(site.name)}</h2>
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-bottom:22px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr><td style="padding:5px 22px 5px 0;color:#77736a">${label}</td><td style="padding:5px 0">${escapeHtml(value)}</td></tr>`
          )
          .join('')}
      </table>
      <div style="padding:18px;background:#f6f4ef;border-radius:8px;white-space:pre-wrap">${escapeHtml(enquiry.message)}</div>
    </div>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: enquiry.email,
        subject: `${enquiry.subjectLabel} — ${enquiry.name}`,
        html
      })
    });

    if (!response.ok) {
      console.error('[contact] Resend rejected the message:', response.status, await response.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error('[contact] could not reach Resend:', error);
    return false;
  }
}
