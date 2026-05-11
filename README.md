# Novacare — Site vitrine

Site vitrine bilingue (FR/EN) de **Novacare**, centre de médecine fonctionnelle pour les femmes 35–60 à Lausanne, développé avec **Astro 6.3**.

---

## ✨ Caractéristiques

- 🎨 **Design fidèle au pixel** au template HTML original (palette berry/cream/gold, typo Cormorant Infant + Cardo + Caveat)
- 🌍 **Bilingue FR/EN** — i18n via la structure des dossiers (`/` pour FR, `/en/` pour EN)
- 🚀 **100% statique** — pages pré-générées, déployables sur n'importe quel CDN ou hébergeur statique
- 🔍 **SEO professionnel** : meta tags, Open Graph, Twitter Cards, JSON-LD `MedicalBusiness`, sitemap auto avec hreflang, robots.txt
- ♿ **Accessibilité WCAG 2.2 niveau AA** — 0 violation détectée par axe-core sur 196 tests, focus trap dans le drawer mobile, contrastes validés, navigation clavier complète
- 📱 **Totalement responsive** : desktop, tablette (1100px), mobile (390px)
- ⚡ **Micro-animations** : reveal au scroll, hover effets, animations entrantes
- 📧 **Formulaire fonctionnel** : POST vers backend externe configurable, widget de succès éditorial, gestion loading/succès/erreur
- 🛡️ **Robuste sans JS** : contenu visible par défaut, animations seulement avec JS

---

## 🛠 Corrections appliquées vs HTML original

| Problème | Solution |
|---|---|
| Menu mobile = simple `display:none` sur les liens | **Vrai menu hamburger** avec drawer, backdrop, croix, Escape, focus trap |
| Hero note tournée déborde sur écrans intermédiaires | Rotation réduite (0.5°) sur tablette, supprimée sur mobile |
| Tableau comparatif scroll horizontal sans signal | Hint *"Faites défiler →"* + zone scrollable au clavier (tabindex 0) |
| Timeline parcours écrasée sur tablette | Passage progressif 5 → 2 → 1 colonnes |
| Featured card programme (`scale(1.05)`) déborde sur tablette | Scale désactivé sous 1100px |
| Care manager bloc serré sur tablette | Layout assoupli, image centrée en mobile |
| Conditions grid 4 → 1 cols brutal | Transition 4 → 3 → 2 → 1 cols |
| Formulaire `alert()` non fonctionnel | Vraie soumission `fetch` POST avec widget de succès, loading, erreurs |
| Pas de fallback sans-JS | Contenu visible par défaut, animations seulement avec JS |
| Pas de skip-link, pas de `prefers-reduced-motion` | Ajoutés et validés |
| Contrastes en-dessous de WCAG AA | Gold et gray-mid ajustés pour atteindre 5.5:1 minimum |
| Hiérarchie titres cassée (h2 → h4) | Structure h1 → h2 → h3 → h4 cohérente partout |

---

## ♿ Accessibilité — Niveau WCAG 2.2 AA

Le site a été audité avec **axe-core** sur les 4 combinaisons FR+EN × desktop+mobile et **ne présente aucune violation** des critères WCAG 2.0/2.1/2.2 niveau A et AA.

### Tests automatisés (axe-core)

```
DESKTOP  /       Tests passés:  48  Violations: 0
DESKTOP  /en/    Tests passés:  48  Violations: 0
MOBILE   /       Tests passés:  50  Violations: 0
MOBILE   /en/    Tests passés:  50  Violations: 0
─────────────────────────────────────────────────
TOTAL : 196 tests passés · 0 violation
```

### Critères WCAG 2.2 AA respectés

**Perceptible**
- ✅ **1.3.1 Info and Relationships** : structure sémantique HTML5 (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<figure>`, `<ol>`)
- ✅ **1.3.2 Meaningful Sequence** : ordre de lecture logique conservé
- ✅ **1.4.3 Contrast (Minimum)** : tous les textes ≥ 4.5:1 (gold #E2C079 sur berry = 5.66:1, gray-mid #6F5E66 sur cream = 5.66:1, etc.)
- ✅ **1.4.4 Resize Text** : zoom 200% sans perte de fonctionnalité
- ✅ **1.4.10 Reflow** : pas de scroll horizontal jusqu'à 320px de large
- ✅ **1.4.11 Non-text Contrast** : bordures et focus rings à 3:1 minimum
- ✅ **1.4.12 Text Spacing** : line-height, espacements respectent les minima
- ✅ **1.4.13 Content on Hover or Focus** : pas de contenu critique sur hover

**Utilisable**
- ✅ **2.1.1 Keyboard** : toutes les fonctions accessibles au clavier (menu, formulaire, table scrollable)
- ✅ **2.1.2 No Keyboard Trap** : le focus trap du drawer mobile peut toujours être fermé via Escape
- ✅ **2.4.1 Bypass Blocks** : skip-link "Aller au contenu principal" en premier focusable
- ✅ **2.4.3 Focus Order** : focus management dans le drawer (à l'ouverture sur le X, à la fermeture retour au hamburger)
- ✅ **2.4.4 Link Purpose** : tous les liens ont un contexte clair
- ✅ **2.4.6 Headings and Labels** : hiérarchie h1→h2→h3→h4 stricte
- ✅ **2.4.7 Focus Visible** : outline berry 2px (3px d'offset) sur tous les éléments interactifs
- ✅ **2.5.3 Label in Name** : libellés visibles = libellés accessibles
- ✅ **2.5.4 Motion Actuation** : aucune action ne dépend d'un mouvement
- ✅ **2.5.7 Dragging Movements** (WCAG 2.2) : aucun drag obligatoire
- ✅ **2.5.8 Target Size (Minimum)** (WCAG 2.2) : zones cliquables ≥ 24×24px

**Compréhensible**
- ✅ **3.1.1 Language of Page** : `<html lang="fr">` / `<html lang="en">`
- ✅ **3.1.2 Language of Parts** : pas de changement de langue dans le contenu
- ✅ **3.2.1 On Focus** : pas de changement de contexte au focus
- ✅ **3.2.2 On Input** : pas de changement de contexte à la saisie
- ✅ **3.3.1 Error Identification** : erreurs de formulaire annoncées via `aria-invalid` + `aria-live`
- ✅ **3.3.2 Labels or Instructions** : tous les inputs ont un label associé
- ✅ **3.3.3 Error Suggestion** : message explicite pour email invalide
- ✅ **3.3.4 Error Prevention** : validation avant soumission

**Robuste**
- ✅ **4.1.2 Name, Role, Value** : tous les composants interactifs ont un nom et rôle ARIA appropriés
- ✅ **4.1.3 Status Messages** : `aria-live="polite"` + `aria-atomic="true"` sur les messages d'état du formulaire

### Fonctionnalités d'accessibilité spécifiques

| Fonctionnalité | Détail |
|---|---|
| **Skip-link** | Premier élément focusable, mène à `<main id="main-content" tabindex="-1">` |
| **Focus trap** | Le drawer mobile capture le focus (Tab cycle en interne) jusqu'à fermeture |
| **Focus restoration** | Fermer le drawer rend le focus au bouton hamburger qui l'a ouvert |
| **Escape closes** | Touche Escape ferme le menu mobile |
| **Reduced motion** | `prefers-reduced-motion: reduce` désactive toutes les animations |
| **JS-optional** | Contenu visible par défaut, animations en bonus si JS actif |
| **Lecteurs d'écran** | Tableau comparatif avec `<caption>`, `scope="col"/scope="row"`, ARIA labels |
| **Formulaire** | `aria-describedby`, `aria-invalid`, `aria-live`, validation explicite |

### Comment tester

```bash
# Audit automatique axe-core (via Lighthouse en console)
npx playwright codegen http://localhost:4321/

# Outils manuels recommandés
# - WAVE Browser Extension : https://wave.webaim.org/extension/
# - axe DevTools : https://www.deque.com/axe/devtools/
# - Lighthouse (intégré à Chrome) : DevTools → Lighthouse → Accessibility
# - Test au clavier : Tab, Shift+Tab, Enter, Escape, Espace
# - Lecteur d'écran : NVDA (Windows), VoiceOver (macOS), TalkBack (Android)
```

---

## 📋 Prérequis

- **Node.js** 20.10.0 ou supérieur

---

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev          # → http://localhost:4321

# 3. Construire pour la production
npm run build        # → fichiers statiques dans dist/

# 4. Prévisualiser le build
npm run preview

# 5. Vérifier les types TypeScript
npm run check
```

- Version FR : http://localhost:4321/
- Version EN : http://localhost:4321/en/

---

## 📁 Structure du projet

```
novacare-site/
├── public/                       # Fichiers statiques servis tels quels
│   ├── favicon.svg               # Favicon vectoriel (N berry)
│   ├── favicon.ico
│   ├── apple-touch-icon.png      # Icône iOS 180×180
│   ├── og-image.png              # Image Open Graph 1200×630
│   ├── robots.txt
│   └── site.webmanifest          # Manifeste PWA
│
├── src/
│   ├── components/               # 14 composants Astro
│   │   ├── Nav.astro             # Navigation + menu mobile hamburger
│   │   ├── Hero.astro            # Section d'accueil + lettre tournée
│   │   ├── Constat.astro         # Texte narratif avec lettrine
│   │   ├── Declic.astro          # Texte avec pullquote + guillemet géant
│   │   ├── Pourquoi.astro        # Manifeste berry foncé
│   │   ├── Pillars.astro         # 3 piliers cliniques
│   │   ├── Conditions.astro      # Grille 8 conditions traitées
│   │   ├── Parcours.astro        # Timeline 5 étapes
│   │   ├── Comparatif.astro      # Tableau classique vs Novacare
│   │   ├── Lieu.astro            # Centre Malley + care manager
│   │   ├── Programmes.astro      # Discovery card + 3 tarifs
│   │   ├── Founding.astro        # Founding members
│   │   ├── Contact.astro         # Formulaire fonctionnel
│   │   └── Footer.astro
│   │
│   ├── i18n/
│   │   ├── config.ts             # Helpers (getLangFromUrl, etc.)
│   │   ├── fr.ts                 # Traductions françaises
│   │   ├── en.ts                 # Traductions anglaises
│   │   └── ui.ts                 # Fonction t()
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro      # SEO complet + JSON-LD
│   │
│   ├── pages/
│   │   ├── index.astro           # Page FR (/)
│   │   └── en/index.astro        # Page EN (/en/)
│   │
│   ├── styles/
│   │   └── global.css            # Variables CSS, reset, animations
│   │
│   └── env.d.ts                  # Types Astro
│
├── astro.config.mjs              # Config Astro 6.3 (static, sitemap, prefetch)
├── tsconfig.json
├── package.json
├── .gitignore
└── README.md
```

---

## 📧 Formulaire de contact

Le formulaire envoie une simple requête `fetch` POST vers un backend externe :

```
POST https://api.novacare.ch/waitlist
Content-Type: application/json

{ "email": "user@example.com" }
```

Le backend :
- doit retourner un statut **2xx** en cas de succès
- est responsable d'envoyer l'email de confirmation à l'utilisateur

### Changer l'URL du backend

Une seule constante à modifier dans `src/components/Contact.astro` :

```ts
const ENDPOINT = 'https://api.novacare.ch/waitlist';
```

### États gérés côté client

- **idle** — champ vide, bouton actif
- **loading** — spinner + texte "Envoi en cours…", bouton désactivé
- **success** — formulaire masqué, message *"Merci ! Vous allez recevoir un email de confirmation dans les prochaines minutes…"*
- **error** — message rouge sous le formulaire, possibilité de réessayer
- **email invalide** — bordure rouge, `aria-invalid="true"`, message d'erreur

---

## 🌍 Internationalisation (i18n)

Routing par dossier (sans la config `i18n` d'Astro qui est incompatible avec `@astrojs/sitemap`).

| Route | Langue | Fichier source |
|-------|--------|----------------|
| `/` | FR (défaut) | `src/pages/index.astro` |
| `/en/` | EN | `src/pages/en/index.astro` |

### Ajouter une traduction

```astro
---
import { getLangFromUrl } from '../i18n/config';
import { t } from '../i18n/ui';
const lang = getLangFromUrl(Astro.url);
const i18n = t(lang);
---
<p>{i18n.maSection.maClef}</p>
```

Ajoutez la clé dans `src/i18n/fr.ts` ET `src/i18n/en.ts` (TypeScript vérifie automatiquement la cohérence).

---

## 🚢 Déploiement

Le projet génère 100% de fichiers statiques. Déployable partout :

### Vercel
```bash
npm install -g vercel
vercel --prod
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### Cloudflare Pages
1. Connectez votre repo Git
2. Build command : `npm run build`
3. Output directory : `dist`

### GitHub Pages
Ajoutez `site` et `base` dans `astro.config.mjs`, puis utilisez l'action officielle `withastro/action`.

### Hébergement FTP/SFTP classique
```bash
npm run build
# Puis uploadez le contenu de dist/
```

---

## 📋 Avant le déploiement en production

| Donnée | Fichier |
|---|---|
| `https://www.novaclinic.ch` | `astro.config.mjs`, `public/robots.txt` |
| `+33 7 84 68 34 17` | `src/i18n/fr.ts`, `src/i18n/en.ts` (footer) |
| URL du backend `ENDPOINT` | `src/components/Contact.astro` |
| Coordonnées GPS du centre | `src/layouts/BaseLayout.astro` (JSON-LD) |

---

## 📈 Recommandations SEO post-déploiement

1. **Soumettre le sitemap** à Google Search Console : `https://www.novaclinic.ch/sitemap-index.xml`
2. **Valider les Rich Snippets** sur [Google Rich Results Test](https://search.google.com/test/rich-results)
3. **Valider OpenGraph** avec [opengraph.xyz](https://www.opengraph.xyz/)
4. **Inscrire Novacare** sur Google Business Profile et annuaires médicaux suisses
5. **Configurer l'analytique** RGPD/nLPD friendly : Plausible ou Fathom
6. **Test Lighthouse** : visez 100/100 sur les 4 catégories

---

## 📊 Optimisations SEO en place

- ✅ Title + description unique par langue
- ✅ Canonical URL + hreflang FR/EN/x-default
- ✅ Open Graph complet (image 1200×630 générée)
- ✅ Twitter Cards summary_large_image
- ✅ JSON-LD `MedicalBusiness` (adresse Lausanne, offres, spécialités)
- ✅ Sitemap XML automatique avec hreflang
- ✅ robots.txt
- ✅ Theme color, favicon multi-format, manifest PWA
- ✅ Structure HTML sémantique (`<main>`, `<section>`, `<article>`, `<ol>`, `<aside>`)
- ✅ Un seul `<h1>` par page, hiérarchie correcte des headings
- ✅ Lang attribute selon la langue
- ✅ Fonts Google préchargées (preconnect + preload)
- ✅ HTML compressé en production
- ✅ CSS critique inliné automatiquement
- ✅ Prefetch viewport
- ✅ Lazy loading natif des images
- ✅ `prefers-reduced-motion` respecté
- ✅ Focus-visible, skip-link, ARIA

---

## 📦 Dépendances et justifications

| Dépendance | Version | Pourquoi |
|---|---|---|
| `astro` | `^6.3.1` | Framework demandé par le brief. SSG performant, CSS scopés natifs |
| `@astrojs/sitemap` | `^3.7.2` | Génère automatiquement le sitemap avec hreflang FR/EN |
| `sharp` | `^0.34.5` | Optimisation d'images via le service par défaut d'Astro |
| `@astrojs/check` (dev) | `^0.9.4` | Vérification TypeScript dans les fichiers `.astro` |
| `typescript` (dev) | `^5.7.2` | Compilateur TypeScript |

**Stack minimaliste** : pas de framework UI (Tailwind, etc.) — le design est CSS pur dans des composants Astro scopés. Moins de deps = bundle plus léger, moins de vulnérabilités, maintenance plus simple.

---

## 📜 Licence

© 2026 NovaCare Technology SA · Prilly, Suisse · Tous droits réservés.
