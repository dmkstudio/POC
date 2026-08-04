'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { SiteContent } from '@/content';
import { SELECT_SERVICE_EVENT } from '@/lib/events';
import type { Locale } from '@/lib/i18n';
import { site } from '@/lib/site';
import { hasErrors, validateContact, type FieldErrors } from '@/lib/validate';

type Status = 'idle' | 'sending' | 'sent' | 'failed';

export function Contact({ content, locale }: { content: SiteContent; locale: Locale }) {
  const { contact, services } = content;
  const form = contact.form;

  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<FieldErrors>({});
  const [subject, setSubject] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  // A click on a service row lands here with that subject already chosen.
  useEffect(() => {
    const onSelect = (event: Event) => {
      const key = (event as CustomEvent<string>).detail;
      setSubject(key);
      setStatus('idle');
    };
    window.addEventListener(SELECT_SERVICE_EVENT, onSelect);
    return () => window.removeEventListener(SELECT_SERVICE_EVENT, onSelect);
  }, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payload = {
      name: String(data.get('name') ?? ''),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      subject: String(data.get('subject') ?? ''),
      message: String(data.get('message') ?? ''),
      company: String(data.get('company') ?? ''),
      locale
    };

    const found = validateContact(payload);
    setErrors(found);
    if (hasErrors(found)) {
      const firstInvalid = formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstInvalid?.focus();
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error(String(response.status));
      setStatus('sent');
    } catch {
      setStatus('failed');
    }
  };

  const fieldError = (field: keyof FieldErrors) => (errors[field] ? true : undefined);

  return (
    <section id="contact" className="contact section-pad">
      <div className="contact-intro">
        <p className="eyebrow" data-reveal>
          {contact.eyebrow}
        </p>
        <h2 data-reveal>
          {contact.title.lead}
          <br />
          <em>{contact.title.accent}</em>
        </h2>
        <p className="contact-lede" data-reveal>
          {contact.intro}
        </p>
      </div>

      <div className="contact-panel" data-reveal>
        <AnimatePresence mode="wait">
          {status === 'sent' ? (
            <motion.div
              key="success"
              className="form-success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              role="status"
            >
              <span className="form-success-mark" aria-hidden>
                ✓
              </span>
              <h3>{form.success.title}</h3>
              <p>{form.success.copy}</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              ref={formRef}
              className="contact-form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="field-row">
                <label className="field">
                  <span>{form.name.label}</span>
                  <input
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder={form.name.placeholder}
                    aria-invalid={fieldError('name')}
                    aria-describedby={errors.name ? 'err-name' : undefined}
                    required
                  />
                  {errors.name && (
                    <small id="err-name" className="field-error">
                      {form.errors.name}
                    </small>
                  )}
                </label>

                <label className="field">
                  <span>{form.email.label}</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={form.email.placeholder}
                    aria-invalid={fieldError('email')}
                    aria-describedby={errors.email ? 'err-email' : undefined}
                    required
                  />
                  {errors.email && (
                    <small id="err-email" className="field-error">
                      {form.errors.email}
                    </small>
                  )}
                </label>
              </div>

              <div className="field-row">
                <label className="field">
                  <span>
                    {form.phone.label} <i>({form.phone.optional})</i>
                  </span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder={form.phone.placeholder}
                  />
                </label>

                <label className="field">
                  <span>{form.subject.label}</span>
                  <select
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  >
                    <option value="">{form.subject.other}</option>
                    {services.items.map((item) => (
                      <option key={item.key} value={item.key}>
                        {item.title}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="field">
                <span>{form.message.label}</span>
                <textarea
                  name="message"
                  rows={5}
                  placeholder={form.message.placeholder}
                  aria-invalid={fieldError('message')}
                  aria-describedby={errors.message ? 'err-message' : undefined}
                  required
                />
                {errors.message && (
                  <small id="err-message" className="field-error">
                    {form.errors.message}
                  </small>
                )}
              </label>

              {/* Hidden from people, tempting for bots. */}
              <input
                className="honeypot"
                name="company"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
              />

              <div className="form-footer">
                <p className="form-consent">{form.consent}</p>
                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? form.submitting : form.submit}
                </button>
              </div>

              {status === 'failed' && (
                <p className="form-error" role="alert">
                  {form.errors.generic}
                </p>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>

      <div className="contact-actions" data-reveal>
        <span className="contact-actions-label">{contact.direct.label}</span>
        <div>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            {contact.direct.whatsapp} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
