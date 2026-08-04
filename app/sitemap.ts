import type { MetadataRoute } from 'next';
import { htmlLang, locales } from '@/lib/i18n';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return locales.map((locale) => ({
    url: `${site.url}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1,
    alternates: {
      languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `${site.url}/${l}`]))
    }
  }));
}
