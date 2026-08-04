'use client';

import { usePathname, useRouter } from 'next/navigation';
import { LOCALE_COOKIE, localeName, localeShort, locales, type Locale } from '@/lib/i18n';

type Props = {
  current: Locale;
  label: string;
  /** `inline` is the desktop header row, `stacked` is the mobile menu. */
  variant?: 'inline' | 'stacked';
  onSwitch?: () => void;
};

export function LanguageSwitcher({ current, label, variant = 'inline', onSwitch }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (locale: Locale) => {
    if (locale === current) return;
    // Remember the choice for one year so the middleware honours it next time.
    document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=31536000; samesite=lax`;

    const rest = pathname.replace(new RegExp(`^/${current}`), '');
    onSwitch?.();
    router.push(`/${locale}${rest}` || `/${locale}`);
  };

  return (
    <div className={`lang lang-${variant}`} role="group" aria-label={label}>
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => switchTo(locale)}
          className={locale === current ? 'is-active' : undefined}
          aria-current={locale === current ? 'true' : undefined}
          lang={locale}
        >
          {variant === 'stacked' ? localeName[locale] : localeShort[locale]}
        </button>
      ))}
    </div>
  );
}
