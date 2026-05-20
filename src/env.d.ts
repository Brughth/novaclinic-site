/// <reference path="../.astro/types.d.ts" />

// Types globaux pour le tracking analytics
declare global {
  interface Window {
    /**
     * Envoie un événement custom sur GA4 + Meta Pixel d'un coup.
     * Exemple :
     *   window.trackEvent('liste_attente_inscrite', { canton: 'VD', lang: 'fr' });
     */
    trackEvent?: (name: string, params?: Record<string, unknown>) => void;

    /** Récupère les UTM params stockés en sessionStorage. */
    getStoredUTM?: () => Record<string, string>;

    /** Google Tag Manager dataLayer. */
    dataLayer?: unknown[];

    /** Google gtag function. */
    gtag?: (...args: unknown[]) => void;

    /** Meta Pixel fbq function. */
    fbq?: (...args: unknown[]) => void;
  }
}

export {};
