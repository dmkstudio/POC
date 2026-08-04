import type { Locale } from '@/lib/i18n';
import type { SiteContent } from './types';
import { fr } from './fr';
import { en } from './en';
import { ru } from './ru';

const dictionaries: Record<Locale, SiteContent> = { fr, en, ru };

export function getContent(locale: Locale): SiteContent {
  return dictionaries[locale];
}

export type { SiteContent } from './types';
export { sceneImages } from './types';
