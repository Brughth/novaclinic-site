/**
 * Point d'entrée du système de traductions
 */

import { fr } from './fr';
import { en } from './en';
import type { Lang } from './config';
import { DEFAULT_LANG } from './config';

const translations = { fr, en } as const;

export function t(lang: Lang) {
  return translations[lang] ?? translations[DEFAULT_LANG];
}

export { fr, en };
