import { Cormorant, DM_Sans, Italiana, Manrope } from 'next/font/google';

/**
 * Italiana and DM Sans carry the brand, but neither ships Cyrillic glyphs.
 * Cormorant and Manrope cover the Russian version at a matching weight and
 * contrast. They are declared with `preload: false` and a Cyrillic-only
 * subset, so the browser fetches them purely on the /ru pages — the French
 * and English pages never touch those files.
 */

export const italiana = Italiana({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-display-latin'
});

export const cormorant = Cormorant({
  subsets: ['cyrillic'],
  weight: ['300', '400'],
  display: 'swap',
  preload: false,
  variable: '--font-display-cyrillic'
});

export const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-sans-latin'
});

export const manrope = Manrope({
  subsets: ['cyrillic'],
  weight: ['300', '400', '500'],
  display: 'swap',
  preload: false,
  variable: '--font-sans-cyrillic'
});

export const fontVariables = [
  italiana.variable,
  cormorant.variable,
  dmSans.variable,
  manrope.variable
].join(' ');
