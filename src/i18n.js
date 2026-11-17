// L('français', 'english') -> { fr, en }
export const L = (fr, en) => ({ fr, en })

// Renvoie le texte dans la langue demandée (repli sur le français).
export const pick = (value, lang) => {
  if (value && typeof value === 'object' && ('fr' in value || 'en' in value)) {
    return value[lang] || value.fr || ''
  }
  return value ?? ''
}

// Vrai si la valeur contient du texte (sert à masquer les éléments vides).
export const filled = (value) => {
  if (value == null) return false
  if (Array.isArray(value)) return value.some(filled)
  if (typeof value === 'object') return filled(value.fr) || filled(value.en)
  return String(value).trim() !== ''
}

// Libellés d'interface
export const ui = {
  skip: L('Aller au contenu', 'Skip to content'),
  nav: {
    projects: L('Projets', 'Work'),
    services: L('Services', 'Services'),
    skills: L('Compétences', 'Skills'),
    journey: L('Parcours', 'Background'),
    contact: L('Contact', 'Contact'),
    menu: L('Menu', 'Menu'),
    close: L('Fermer le menu', 'Close menu'),
    main: L('Navigation principale', 'Main navigation'),
  },
  theme: {
    toDark: L('Activer le thème sombre', 'Switch to dark theme'),
    toLight: L('Activer le thème clair', 'Switch to light theme'),
  },
  lang: {
    other: L('EN', 'FR'),
    label: L('EN – English version', 'FR – Version française'),
  },
  hero: {
    available: L('Disponible pour', 'Available for'),
    cv: L('Télécharger mon CV', 'Download my CV'),
    contact: L('Me contacter', 'Get in touch'),
    otherCv: L('CV in English', 'CV en français'),
    photoAlt: L(
      'Rachidi Adébissi IDONIYI en costume, devant un écran affichant la plateforme Data for Earth',
      'Rachidi Adébissi IDONIYI in a suit, in front of a screen showing the Data for Earth platform'
    ),
  },
  proofs: L('En bref', 'At a glance'),
  projects: {
    title: L('Projets', 'Selected work'),
    intro: L(
      "Quelques projets que j'ai réalisés. Les liens mènent aux sites en ligne ou au code.",
      "Some of the projects I have built. The links go to the live sites or to the code."
    ),
    problem: L('Le problème', 'The problem'),
    solution: L("Ce que j'ai construit", 'What I built'),
    role: L('Mon rôle', 'My role'),
    result: L('Résultat', 'Outcome'),
    stack: L('Technologies', 'Stack'),
    live: L('Voir en ligne', 'View live'),
    code: L('Voir le code', 'View code'),
    others: L('Autres projets', 'Other projects'),
    screenshot: L("Capture d'écran de", 'Screenshot of'),
  },
  services: {
    title: L('Services', 'Services'),
    intro: L(
      "Je travaille aussi en freelance, pour des entreprises, des institutions et des porteurs de projets.",
      'I also work as a freelancer, for companies, institutions and people with a project.'
    ),
    deliver: L('Ce que je livre', 'What you get'),
    how: L('Comment je travaille', 'How I work'),
    tech: L('Technologies', 'Stack'),
    ctaTitle: L('Un projet en tête ?', 'Got a project in mind?'),
    ctaText: L(
      'Expliquez-moi votre besoin en quelques lignes, je vous réponds rapidement.',
      "Tell me what you need in a few lines and I'll get back to you quickly."
    ),
    cta: L('Parlons de votre projet', "Let's talk about your project"),
  },
  skills: {
    title: L('Compétences', 'Skills'),
    intro: L(
      "Pour chaque groupe, les projets où je m'en suis servi.",
      'For each group, the projects where I used it.'
    ),
    usedIn: L('Utilisé dans', 'Used in'),
    otherLangs: L('Autres langages', 'Other languages'),
    languages: L('Langues', 'Languages'),
  },
  journey: {
    title: L('Parcours', 'Background'),
    intro: L(
      "Mes études, mon stage et mes responsabilités à l'IMSP.",
      'My studies, my internship and my roles at IMSP.'
    ),
    experience: L('Expérience et engagement', 'Experience and leadership'),
    education: L('Formation', 'Education'),
    ongoing: L('en cours', 'ongoing'),
  },
  contact: {
    title: L('Contact', 'Contact'),
    intro: L(
      'Le plus rapide est WhatsApp. Je réponds aussi par e-mail et sur LinkedIn.',
      'WhatsApp is the fastest way to reach me. I also answer by email and on LinkedIn.'
    ),
    whatsapp: L('WhatsApp', 'WhatsApp'),
    email: L('E-mail', 'Email'),
    cvTitle: L('Mon CV en PDF', 'My CV (PDF)'),
    cvFr: L('CV en français', 'CV in French'),
    cvEn: L('CV en anglais', 'CV in English'),
    waMessage: L(
      "Bonjour Rachidi, je vous écris depuis votre portfolio.",
      'Hello Rachidi, I am contacting you from your portfolio.'
    ),
    waProject: L(
      "Bonjour Rachidi, je vous écris depuis votre portfolio au sujet d'un projet.",
      'Hello Rachidi, I am contacting you from your portfolio about a project.'
    ),
  },
  footer: {
    made: L('Conçu et codé par moi, en React.', 'Designed and built by me, in React.'),
    source: L('Code source', 'Source code'),
    updated: L('Mis à jour en novembre 2026', 'Updated November 2026'),
    top: L('Haut de page', 'Back to top'),
  },
  newTab: L('(nouvel onglet)', '(opens in a new tab)'),
}
