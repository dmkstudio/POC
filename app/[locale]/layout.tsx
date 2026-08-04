import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import '../globals.css';
import { getContent } from '@/content';
import { fontVariables } from '@/lib/fonts';
import { defaultLocale, htmlLang, isLocale, locales, ogLocale, type Locale } from '@/lib/i18n';
import { ogImage, site } from '@/lib/site';
import { Analytics } from '@/components/Analytics';
import { JsonLd } from '@/components/JsonLd';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isLocale(params.locale)) return {};
  const locale = params.locale;
  const { meta } = getContent(locale);

  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [htmlLang[l], `/${l}`])),
        'x-default': `/${defaultLocale}`
      }
    },
    openGraph: {
      type: 'website',
      siteName: site.name,
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `${site.url}/${locale}`,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [{ url: ogImage, width: 1536, height: 1024, alt: site.name }]
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.ogTitle,
      description: meta.ogDescription,
      images: [ogImage]
    },
    robots: { index: true, follow: true },
    icons: {
      icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
      apple: '/apple-icon.png'
    }
  };
}

export const viewport = {
  themeColor: '#080806',
  colorScheme: 'dark' as const
};

export default function LocaleLayout({ children, params }: Props) {
  if (!isLocale(params.locale)) notFound();
  const locale: Locale = params.locale;

  return (
    <html lang={htmlLang[locale]} className={fontVariables}>
      <body>
        <JsonLd locale={locale} />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
