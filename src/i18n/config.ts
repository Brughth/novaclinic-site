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

/**
 * Table de correspondance des pages FR ↔ EN.
 * Les slugs ne sont pas toujours symétriques (ex : /medecine-fonctionnelle
 * ↔ /en/functional-medicine), d'où cette table explicite.
 * Format des chemins = forme « lien » utilisée dans le site (home FR = '/',
 * home EN = '/en/', sous-pages sans slash final).
 */
const ROUTE_PAIRS: ReadonlyArray<{ fr: string; en: string }> = [
  { fr: '/', en: '/en/' },
  { fr: '/fatigue-burnout', en: '/en/fatigue-burnout' },
  { fr: '/menopause', en: '/en/menopause' },
  { fr: '/medecine-fonctionnelle', en: '/en/functional-medicine' },
  { fr: '/digestion-sii', en: '/en/ibs' },
  { fr: '/programme', en: '/en/programme' },
  { fr: '/mentions-legales', en: '/en/legal-notice' },
  { fr: '/confidentialite', en: '/en/privacy' },
  { fr: '/lp/serenite', en: '/en/lp/serenite' },
];

/** Retire le slash final (sauf racine) pour comparer des chemins. */
function stripTrailingSlash(path: string): string {
  return path.length > 1 ? path.replace(/\/+$/, '') : path;
}

/**
 * URL de la page équivalente dans l'autre langue.
 * Si la page courante a un équivalent connu, on renvoie son chemin localisé ;
 * sinon, on retombe sur la home de la langue cible (comportement historique).
 */
export function getAlternatePageUrl(pathname: string, targetLang: Lang): string {
  const current = stripTrailingSlash(pathname);
  for (const pair of ROUTE_PAIRS) {
    if (
      current === stripTrailingSlash(pair.fr) ||
      current === stripTrailingSlash(pair.en)
    ) {
      return targetLang === DEFAULT_LANG ? pair.fr : pair.en;
    }
  }
  return getLocalizedUrl('/', targetLang);
}
