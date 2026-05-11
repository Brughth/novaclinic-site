/**
 * Configuration centrale de l'internationalisation
 */

export const LANGUAGES = {
  fr: 'Français',
  en: 'English',
} as const;

export const DEFAULT_LANG = 'fr';

export type Lang = keyof typeof LANGUAGES;

/**
 * Extrait la langue depuis l'URL
 * Ex: /en/quelquechose -> 'en', /quelquechose -> 'fr'
 */
export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in LANGUAGES) return lang as Lang;
  return DEFAULT_LANG;
}

/**
 * Construit l'URL localisée
 */
export function getLocalizedUrl(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === DEFAULT_LANG) return cleanPath === '/' ? '/' : cleanPath;
  return cleanPath === '/' ? `/${lang}/` : `/${lang}${cleanPath}`;
}

/**
 * Retourne la langue opposée
 */
export function getAlternateLang(currentLang: Lang): Lang {
  return currentLang === 'fr' ? 'en' : 'fr';
}
