import Script from 'next/script';

/**
 * Privacy-friendly, cookie-less analytics via Plausible.
 *
 * Nothing is loaded until NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set in the
 * environment, so local development and preview builds stay clean.
 */
export function Analytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
  if (!domain) return null;

  const host = process.env.NEXT_PUBLIC_PLAUSIBLE_HOST ?? 'https://plausible.io';

  return (
    <Script
      defer
      data-domain={domain}
      src={`${host}/js/script.js`}
      strategy="afterInteractive"
    />
  );
}
