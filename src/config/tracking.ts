/**
 * Configuration du tracking analytics et publicitaire
 * ────────────────────────────────────────────────────
 *
 * UN SEUL ENDROIT pour modifier les IDs de tracking.
 *
 * Pour activer/désactiver un canal :
 *   - Mettre l'ID en chaîne vide ("") → le script de ce canal n'est pas chargé
 *   - Mettre l'ID réel → le script se charge et envoie les événements
 *
 * Documentation des événements personnalisés envoyés :
 *
 *   ▸ liste_attente_inscrite        — déclenché sur succès du formulaire d'inscription
 *                                      (le widget de succès apparaît)
 *                                      Paramètres : { canton, symptoms_count, lang }
 *
 *   ▸ consultation_decouverte_clic  — déclenché au clic sur le CTA
 *                                      "Réserver une consultation découverte à 250 CHF"
 *                                      Paramètres : { source_section, lang }
 *
 *   ▸ cta_waitlist_clic             — déclenché au clic sur tout CTA principal
 *                                      menant vers le formulaire d'inscription
 *                                      Paramètres : { source_section, lang }
 */

export const tracking = {
  /**
   * Google Analytics 4 — ID de mesure (format "G-XXXXXXXXXX")
   * Récupéré depuis https://analytics.google.com → Admin → Flux de données
   */
  ga4Id: 'G-RKWRLN87S0',

  /**
   * Meta Pixel (Facebook + Instagram) — ID numérique (format "123456789012345")
   * Récupéré depuis https://business.facebook.com → Gestionnaire d'événements
   * Mettre "" pour désactiver tant que pas configuré.
   */
  metaPixelId: '',
} as const;
