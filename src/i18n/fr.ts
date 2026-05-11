/**
 * Traductions françaises (langue par défaut)
 * Tous les textes du site Novacare
 */

export const fr = {
  // Métadonnées SEO
  meta: {
    title: 'Novacare — Un lieu pour les femmes en transition',
    description:
      "Centre de médecine fonctionnelle pour les femmes 35-60 à Lausanne. Fatigue, hormones, digestion : on les regarde ensemble.",
    keywords:
      'médecine fonctionnelle, santé femme, ménopause, périménopause, fatigue chronique, burn-out, troubles hormonaux, Lausanne, Malley, care manager, médecine intégrative',
    ogTitle: 'Novacare — Un lieu pour les femmes en transition',
    ogDescription:
      'Centre de médecine fonctionnelle dédié aux femmes 35–60. Une équipe coordonnée, des consultations longues, un accompagnement continu.',
  },

  // Navigation
  nav: {
    logo: 'NOVACARE',
    pourquoi: 'Pourquoi',
    approche: 'Approche',
    parcours: 'Parcours',
    centre: 'Le Centre',
    programmes: 'Programmes',
    cta: "Liste d'attente",
    menuLabel: 'Menu',
    langSwitch: 'EN',
    langSwitchLabel: 'Switch to English',
  },

  // Hero
  hero: {
    eyebrow: 'Santé féminine · 35 — 60 ans · Lausanne',
    titleLine1: 'Fatigue, hormones, digestion.',
    titleLine2Part1: 'On les regarde ',
    titleLine2Em: 'ensemble,',
    titleLine3: "parce qu'elles fonctionnent ensemble.",
    text: {
      part1: 'Novacare est un centre de médecine fonctionnelle dédié aux femmes qui traversent la décennie des transitions. Une équipe de soins coordonnée, des consultations longues, et un accompagnement continu — pour enfin ',
      em: 'relier',
      part2: " ce que d'autres regardent en silos.",
    },
    ctaPrimary: "Rejoindre la liste d'attente",
    ctaSecondary: 'Lire la lettre du fondateur →',
    note: {
      from: 'Lettre ouverte',
      message: {
        part1: 'À toutes les femmes qui ont vu cinq spécialistes sans recevoir de réponse claire. À celles qu\'on a renvoyées chez elles avec ',
        em1: '"c\'est l\'âge"',
        part2: ' ou ',
        em2: '"c\'est dans la tête"',
        part3: '. Ce lieu est pour vous.',
      },
      signature: 'Adner',
      role: 'Dr Adner Neyret · Médecin · Fondateur',
    },
  },

  // Le Constat
  constat: {
    eyebrow: 'Le constat',
    paragraphs: [
      {
        text: "Pendant douze ans en cabinet, j'ai vu défiler des femmes entre 35 et 60 ans avec les mêmes symptômes : ",
        em: 'une fatigue qui ne passe pas',
        suffix: ", des troubles digestifs qui s'installent, des hormones qui se dérèglent.",
      },
      {
        text: "On les renvoyait chez elles avec quinze minutes de consultation et trois ordonnances. Un gastro-entérologue regardait l'intestin. Un gynécologue regardait les hormones. Un psychiatre regardait le moral. ",
        em: "Personne ne regardait l'ensemble.",
        suffix: '',
      },
      {
        text: 'Pourtant, les axes hormonal, digestif et nerveux ',
        strong: 'fonctionnent ensemble',
        suffix: ". C'est documenté depuis vingt ans dans la littérature médicale. Et c'est ce qu'une méta-analyse à laquelle j'ai contribué, à l'INSERM Bordeaux, est venue confirmer.",
      },
      {
        text: 'Mais en cabinet de ville, le temps manque. La coordination manque. Les outils manquent. Et les femmes, elles, continuent de souffrir en silence.',
      },
    ],
    cta: 'Découvrir comment nous prenons le temps →',
  },

  // Le Déclic
  declic: {
    eyebrow: 'Le déclic',
    paragraphs: [
      {
        text: "Il y a quelques mois, une patiente m'a remerciée. Elle avait 48 ans. Elle sortait de plusieurs années de burn-out. Je l'avais orientée vers un programme combinant physiothérapie, médecine chinoise et naturopathie. Elle reprenait pied, elle se sentait ",
        em: 'plus apaisée',
        suffix: ', elle dormait mieux.',
      },
      {
        text: "Elle pensait que je l'avais sauvée. Je n'ai fait que mon travail.",
      },
      {
        text: "Mais ce qu'elle m'a dit ce jour-là m'a poursuivi pendant des mois. Elle ne pensait pas à sa carrière. Elle ne pensait pas à elle. Elle pensait à sa fille de six ans. Dans sa famille, plusieurs personnes étaient parties très tôt. Et sa peur, ce n'était pas la maladie. C'était de ",
        em: 'ne pas être là pour la voir grandir',
        suffix: '.',
      },
    ],
    pull: "Ce jour-là, j'ai compris. Ce travail que j'avais fait pour elle, beaucoup d'autres femmes, autour de moi, ne l'avaient pas reçu.",
    finalParagraph: "Et j'ai décidé d'ouvrir un lieu pour elles.",
  },

  // Pourquoi Novacare
  pourquoi: {
    eyebrow: 'Pourquoi Novacare',
    paragraphs: [
      "J'ai <strong>deux filles</strong>, et une <strong>femme</strong>.",
      "Je voulais bâtir un endroit où je sois certain qu'elles trouvent les meilleurs soins possibles, le jour où elles en auraient besoin. Un lieu où on prend le temps. Où on coordonne. Où on écoute vraiment.",
      "Ce lieu, c'est Novacare. Maintenant, il vous est ouvert.",
    ],
    final: 'Il m\'a fallu plus de six ans pour le construire.',
    signature: {
      name: 'Adner',
      role: 'Dr Adner Neyret · Fondateur de Novacare',
    },
    cta: 'Voir notre approche clinique →',
  },

  // Trois Piliers
  pillars: {
    eyebrow: 'Notre approche',
    titleLine1: 'Trois piliers cliniques.',
    titleLine2Em: 'Un seul parcours.',
    subtitle:
      'Parce que vos symptômes ne se rangent pas dans des boîtes, votre suivi ne devrait pas non plus.',
    items: [
      {
        number: '01',
        title: 'Hormonal',
        text: 'Périménopause, ménopause, dérégulation thyroïdienne, troubles du cycle. Une lecture endocrinienne complète, au-delà des seuils standards.',
        questions: [
          'Mon corps change, est-ce normal ?',
          'Pourquoi je ne dors plus comme avant ?',
          'Hormones et fatigue, est-ce lié ?',
        ],
      },
      {
        number: '02',
        title: 'Épuisement',
        text: "Burn-out, fatigue chronique, troubles du sommeil, dérégulation de l'axe HPA. Quand le corps n'arrive plus à récupérer, on cherche la cause systémique.",
        questions: [
          'Pourquoi je me réveille fatiguée ?',
          'Le brouillard mental, c\'est dans ma tête ?',
          "Comment retrouver de l'énergie ?",
        ],
      },
      {
        number: '03',
        title: 'Digestif',
        text: "SII, dysbiose, hypersensibilité viscérale, axe intestin-cerveau. Le système digestif comme porte d'entrée d'une approche fonctionnelle.",
        questions: [
          'Pourquoi je gonfle après chaque repas ?',
          'Mon intestin influence-t-il mon humeur ?',
          'Que peut-on faire vraiment pour le SII ?',
        ],
      },
    ],
    cta: 'Voir toutes les conditions traitées →',
  },

  // Conditions
  conditions: {
    eyebrow: 'Conditions & symptômes',
    titleLine1: 'Ce que nous ',
    titleEm: 'accompagnons.',
    subtitle:
      'Vos symptômes vous parlent. Encore faut-il les écouter ensemble. Voici les conditions principales que nous prenons en charge à Novacare.',
    items: [
      { title: 'Périménopause', symptoms: "Bouffées de chaleur · troubles du sommeil · variations d'humeur · cycle irrégulier · prise de poids" },
      { title: 'Ménopause', symptoms: 'Symptômes vasomoteurs · sécheresse · ostéoporose · brouillard mental · libido' },
      { title: 'Burn-out', symptoms: 'Épuisement physique et mental · perte de sens · troubles du sommeil · irritabilité' },
      { title: 'Fatigue chronique', symptoms: 'Fatigue persistante · douleurs diffuses · troubles cognitifs · sommeil non récupérateur' },
      { title: 'Troubles thyroïdiens', symptoms: 'Hashimoto · hypo et hyperthyroïdie · variations de poids · fatigue inexpliquée' },
      { title: 'SII et troubles digestifs', symptoms: 'Ballonnements · alternance constipation-diarrhée · douleurs abdominales · sensibilité alimentaire' },
      { title: 'Dysbiose intestinale', symptoms: 'Microbiote déséquilibré · candidose · perméabilité intestinale · inflammation chronique' },
      { title: 'Troubles du sommeil', symptoms: 'Insomnies · sommeil non réparateur · réveils nocturnes · décalages hormonaux' },
    ],
    cardLink: 'En savoir plus →',
    bottomNote: 'Vos symptômes ne sont pas dans la liste ? Nos parcours sont personnalisés à chaque patiente.',
    bottomCta: 'Échanger avec notre équipe →',
  },

  // Parcours
  parcours: {
    eyebrow: 'Votre parcours',
    titleLine1: 'Cinq étapes. ',
    titleEm: 'Sans surprise.',
    subtitle:
      'Chez Novacare, vous savez à chaque moment où vous en êtes. Voici comment se déroule votre accompagnement, de votre première question à votre suivi continu.',
    steps: [
      { num: '1', title: 'Premier contact', text: 'Vous remplissez un bilan en ligne. Nous comprenons votre histoire, vos symptômes, vos attentes.', duration: '5 minutes' },
      { num: '2', title: 'Rencontre découverte', text: 'Première consultation avec un membre de notre équipe de soins. Sans engagement.', duration: '1 heure · 250 CHF' },
      { num: '3', title: 'Bilan complet', text: 'Examens approfondis, questionnaires validés, biomarqueurs. La cartographie complète de votre santé.', duration: '90 minutes' },
      { num: '4', title: 'Plan personnalisé', text: "Votre care manager Aurélie coordonne l'équipe. Vous recevez un plan adapté à vos objectifs.", duration: 'Sur mesure' },
      { num: '5', title: 'Suivi continu', text: 'Consultations régulières, ajustements, accès à votre équipe. Tant qu\'il faut, autant qu\'il faut.', duration: '3, 6 ou 12 mois' },
    ],
    cta: 'Commencer mon parcours',
  },

  // Comparatif
  comparatif: {
    eyebrow: 'La différence',
    titleLine1: 'Pourquoi ',
    titleEm: 'Novacare',
    titleLine2: ", plutôt qu'un cabinet classique ?",
    subtitle:
      "Pas pour remplacer votre médecin traitant. Pour vous offrir ce que la médecine de ville ne peut pas, faute de temps et d'outils.",
    headers: {
      criteria: '',
      classic: 'Cabinet médical classique',
      novacare: 'Novacare',
    },
    rows: [
      { label: 'Durée de consultation', classic: '15 minutes', novacare: '90 minutes initiale · 45 minutes en suivi' },
      { label: 'Coordination entre spécialistes', classic: 'À votre charge', novacare: 'Care manager dédiée' },
      { label: 'Vision systémique', classic: 'Spécialiste par spécialiste', novacare: 'Hormones · épuisement · digestion ensemble' },
      { label: 'Suivi entre les consultations', classic: 'Aucun', novacare: 'Continu, via plateforme et care manager' },
      { label: 'Approche fonctionnelle', classic: 'Rare', novacare: 'Au cœur du modèle' },
      { label: 'Équipe pluridisciplinaire', classic: 'Vous trouvez chacun', novacare: 'Médecins · physio · naturopathie · nutrition' },
      { label: 'Bilan biologique approfondi', classic: 'Standard', novacare: 'Avancé · biomarqueurs spécifiques' },
      { label: 'Investissement', classic: 'Remboursé LAMal', novacare: 'Premium · forfait mensuel transparent' },
    ],
    bottomNote:
      'Novacare ne remplace pas votre médecin traitant. Nous travaillons en coordination avec lui ou elle, dans votre intérêt.',
    bottomCta: 'Découvrir le centre →',
    swipeHint: 'Faites défiler horizontalement →',
  },

  // Le Lieu
  lieu: {
    label: 'Ouverture · Septembre 2026',
    centerName: ['Centre', 'Novacare', 'Malley'],
    address1: 'Lausanne — 550m² au 7ème étage du complexe Malley.',
    address2: 'Co-localisé avec un écosystème santé premium.',
    titleLine1: 'Un lieu pensé pour ',
    titleEm1: 'elle.',
    titleLine2: 'Pour son temps. Son corps. Sa vie.',
    text: "Le Centre Novacare Malley n'est pas un cabinet médical de plus. C'est un espace clinique où le soin prend le temps de comprendre avant de prescrire. Co-localisé avec un écosystème complet de soins (esthétique, pilates, physiothérapie), pour une approche véritablement systémique.",
    experiences: [
      { num: '01', text: "Consultations longues — <em>90 minutes</em> à l'initiale, 45 minutes en suivi" },
      { num: '02', text: 'Une équipe pluridisciplinaire <em>coordonnée</em> autour de chaque patiente' },
      { num: '03', text: 'Une <em>care manager</em> dédiée qui orchestre votre parcours de manière unique' },
      { num: '04', text: 'Un suivi numérique <em>continu</em> entre les consultations' },
      { num: '05', text: "Un accueil personnalisé, un lounge partagé — <em>un lieu où l'on revient</em>" },
    ],
    careManager: {
      initial: 'A',
      eyebrow: 'Votre care manager',
      name: 'Aurélie Briane',
      text: "Aurélie est <em>celle que vous appellerez</em> quand vous aurez un doute, une question, une inquiétude. Infirmière de formation, elle connaît votre histoire et fait le lien entre tous les professionnels de soins qui vous accompagnent — médecins, physiothérapeutes, naturopathes, psychologues, nutritionnistes. <em>Votre parcours est unique.</em> Elle le rend possible.",
    },
  },

  // Programmes
  programmes: {
    eyebrow: 'Nos programmes',
    titleLine1: 'Trois formules.',
    titleEm: 'Une seule exigence.',
    subtitle:
      'Tous nos programmes incluent un bilan initial complet, un accompagnement par notre équipe de soins, et un accès continu à votre care manager.',
    discovery: {
      ribbon: 'Avant tout engagement',
      titleLine1: "Faisons d'abord ",
      titleEm: 'connaissance.',
      text: "Avant de souscrire un programme, nous proposons deux portes d'entrée à plus bas engagement, pour que vous puissiez nous découvrir en toute sérénité.",
      options: [
        {
          label: 'Bilan en ligne',
          title: 'Évaluation gratuite',
          priceLinePart1: '5 minutes · ',
          priceLineStrong: 'sans engagement',
          priceLinePart2: '',
          text: 'Quelques questions sur vos symptômes pour identifier le programme le plus adapté.',
          cta: 'Commencer le bilan →',
        },
        {
          label: 'Première rencontre',
          title: 'Consultation découverte',
          priceLinePart1: '',
          priceLineStrong: '250 CHF',
          priceLinePart2: ' · 1 heure · sans engagement',
          text: 'Une première rencontre avec un membre de notre équipe de soins, pour échanger sur votre situation.',
          cta: 'Réserver →',
        },
      ],
    },
    intro: "Si vous souhaitez aller plus loin, voici nos trois formules d'accompagnement.",
    cards: [
      {
        tier: 'Discover',
        name: 'Découvrir',
        price: '199',
        month: 'CHF / mois',
        engagement: 'Engagement 3 mois',
        featured: false,
        features: [
          'Pour qui souhaite explorer',
          'Bilan initial complet (90 min)',
          '3 PROMs trimestriels',
          'Suivi numérique mensuel',
          'Accès au lounge Centre Malley',
        ],
        cta: 'Choisir Découvrir',
      },
      {
        tier: 'Care · Le plus choisi',
        name: 'Accompagner',
        price: '349',
        month: 'CHF / mois',
        engagement: 'Engagement 6 mois',
        featured: true,
        features: [
          'Pour un suivi en profondeur',
          'Tout de Découvrir, plus :',
          'Consultation trimestrielle (45 min)',
          'PROMs mensuels personnalisés',
          'Coordination avec spécialistes externes',
          'Bilan biologique semestriel',
          'Plan nutrition et lifestyle',
        ],
        cta: 'Choisir Accompagner',
      },
      {
        tier: 'Concierge',
        name: 'Concierge',
        price: '499',
        month: 'CHF / mois',
        engagement: 'Engagement 12 mois',
        featured: false,
        features: [
          'Pour un accompagnement total',
          "Tout d'Accompagner, plus :",
          'Consultations bi-mensuelles',
          'Réponse priorisée sous 1h',
          'Coordination avec votre médecin traitant',
          'Accès praticiens partenaires sans attente',
          'Bilan biologique trimestriel',
        ],
        cta: 'Choisir Concierge',
      },
    ],
  },

  // Founding Members
  founding: {
    badge: 'Founding Members · 50 places',
    titleLine1: 'Les 50 premières patientes auront ',
    titleEm: 'une place particulière.',
    text: "Le Centre Novacare Malley ouvre ses portes en septembre 2026. Pour celles qui nous rejoindront avant, nous avons réservé un statut <em>Founding Member</em> : un programme d'accompagnement privilégié, des conditions tarifaires fixées à vie, et une voix dans la construction de ce lieu.",
    perks: [
      {
        num: '01',
        title: 'Accès anticipé',
        text: "Vos premières consultations dès juillet 2026, avant l'ouverture officielle.",
      },
      {
        num: '02',
        title: 'Tarif fixé à vie',
        text: "Vos conditions tarifaires Founding Members sont figées. Pas d'augmentation à venir.",
      },
      {
        num: '03',
        title: 'Une voix qui compte',
        text: 'Vos retours façonnent les protocoles. Vous co-construisez le lieu avec nous.',
      },
    ],
    cta: 'Rejoindre les Founding Members',
  },

  // Final CTA / Contact form
  contact: {
    titleLine1: 'Un soin qui prend ',
    titleEm: 'le temps',
    titleLine2: 'de vous écouter.',
    text: 'Le Centre Novacare Malley ouvre en septembre 2026. Les Founding Members seront contactées dès juillet. Laissez-nous votre adresse, nous reviendrons vers vous.',
    emailLabel: 'Votre adresse email',
    emailPlaceholder: 'votre.adresse@email.ch',
    submit: "Rejoindre la liste d'attente",
    submitting: 'Envoi en cours…',
    note: 'Vos coordonnées restent confidentielles. Nous ne partageons rien.',
    error: "Une erreur est survenue. Veuillez réessayer dans quelques instants.",
    errorEmail: 'Veuillez saisir une adresse email valide.',
    success: {
      eyebrow: 'Inscription confirmée',
      title: 'Votre place est ',
      titleEm: 'réservée.',
      intro: 'Nous venons de vous envoyer un email de confirmation à',
      stepsTitle: 'Et maintenant ?',
      steps: [
        {
          label: 'Email de confirmation',
          text: "Vérifiez votre boîte de réception dans les prochaines minutes. Pensez aux spams si vous ne le voyez pas.",
        },
        {
          label: 'Prise de contact',
          text: "L'équipe Novacare reviendra vers vous prochainement, avec les prochaines étapes pour rejoindre les Founding Members.",
        },
        {
          label: 'Ouverture du centre',
          text: 'Le Centre Malley ouvre ses portes en septembre 2026. Vous serez parmi les premières informées.',
        },
      ],
      backLink: 'Continuer à explorer le site',
    },
  },

  // Footer
  footer: {
    logo: 'NOVACARE',
    taglineLine1: 'Un lieu pour les femmes',
    taglineLine2: 'en Suisse.',
    centerTitle: 'Le centre',
    centerLinks: [
      { label: 'Pourquoi Novacare', href: '#pourquoi' },
      { label: 'Notre approche', href: '#piliers' },
      { label: 'Conditions traitées', href: '#conditions' },
      { label: 'Votre parcours', href: '#parcours' },
      { label: 'Centre Malley', href: '#lieu' },
      { label: 'Programmes', href: '#programmes' },
    ],
    contactTitle: 'Contact',
    contactLinks: [
      { label: 'adner.neyret@gmail.com', href: 'mailto:adner.neyret@gmail.com' },
      { label: "Liste d'attente", href: '#contact' },
      { label: '+33 7 84 68 34 17', href: 'tel:+41000000000' },
    ],
    copyright: '© 2026 NovaCare Technology SA · Prilly, Suisse',
    legal: 'Mentions légales · Confidentialité · Conformité nLPD',
  },

  // A11y
  a11y: {
    skipToContent: 'Aller au contenu principal',
    closeMenu: 'Fermer le menu',
    openMenu: 'Ouvrir le menu',
  },
} as const;

export type Translation = typeof fr;