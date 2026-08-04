export const locales = ['fr', 'en', 'ru'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'fr';

/** Remembers the visitor's choice so the switcher sticks across visits. */
export const LOCALE_COOKIE = 'poc_locale';

/** Label shown in the language switcher. */
export const localeShort: Record<Locale, string> = {
  fr: 'FR',
  en: 'EN',
  ru: 'RU'
};

/** Full name, used for aria-labels and the mobile menu. */
export const localeName: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ru: 'Русский'
};

/** Value for <html lang>. */
export const htmlLang: Record<Locale, string> = {
  fr: 'fr-FR',
  en: 'en',
  ru: 'ru-RU'
};

/** Value for Open Graph og:locale. */
export const ogLocale: Record<Locale, string> = {
  fr: 'fr_FR',
  en: 'en_GB',
  ru: 'ru_RU'
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/**
 * Picks the best locale from an Accept-Language header,
 * falling back to the default when nothing matches.
 */
export function matchLocale(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;

  const ranked = acceptLanguage
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { tag: tag.trim().toLowerCase(), q: q ? parseFloat(q.split('=')[1]) || 0 : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split('-')[0];
    if (isLocale(base)) return base;
  }
  return defaultLocale;
}
