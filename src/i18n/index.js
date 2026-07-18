// Petit helper i18n : L('français', 'english') -> { fr, en }
export const L = (fr, en) => ({ fr, en })

// Sélectionne la bonne langue, avec repli sur le français.
export const pick = (value, lang) => {
  if (value && typeof value === 'object' && ('fr' in value || 'en' in value)) {
    return value[lang] ?? value.fr
  }
  return value
}

export const LANGS = [
  { code: 'fr', label: 'Français', short: 'FR', country: 'FR' },
  { code: 'en', label: 'English', short: 'EN', country: 'GB' },
]

// Chaînes d'interface (navigation, boutons, titres de sections)
export const ui = {
  nav: {
    home: L('Accueil', 'Home'),
    about: L('À propos', 'About'),
    education: L('Parcours', 'Education'),
    skills: L('Compétences', 'Skills'),
    projects: L('Projets', 'Projects'),
    experience: L('Expérience', 'Experience'),
    contact: L('Contact', 'Contact'),
  },
  actions: {
    projects: L('Voir mes projets', 'View my projects'),
    contact: L('Me contacter', 'Contact me'),
    cv: L('Télécharger le CV', 'Download CV'),
    demo: L('Démo en ligne', 'Live demo'),
    code: L('Code', 'Code'),
    viewGithub: L('Voir mon GitHub', 'View my GitHub'),
    readMore: L('En savoir plus', 'Learn more'),
    menu: L('Menu', 'Menu'),
    switchTheme: L('Changer de thème', 'Toggle theme'),
    switchLang: L('Changer de langue', 'Switch language'),
  },
  home: {
    eyebrow: L('Développeur & Data Scientist', 'Developer & Data Scientist'),
    greeting: L('Bonjour, je suis', "Hi, I'm"),
    scroll: L('Découvrez mon travail', 'Discover my work'),
    featuredTitle: L('Projets à impact', 'Projects with impact'),
    featuredEyebrow: L('Sélection', 'Selected work'),
    featuredSubtitle: L(
      "Des solutions concrètes en IA, environnement, éducation et recherche.",
      'Concrete solutions in AI, environment, education and research.'
    ),
    allProjects: L('Tous les projets', 'All projects'),
    strengthsEyebrow: L('Ce que j\'apporte', 'What I bring'),
    strengthsTitle: L('Leadership et impact, pas seulement du code', 'Leadership and impact, not just code'),
    ctaTitle: L('Envie de collaborer ?', 'Want to collaborate?'),
    ctaText: L(
      "Freelance en développement web/mobile et data science, je suis ouvert aux projets à fort impact.",
      "Freelancing in web/mobile development and data science, I'm open to high-impact projects."
    ),
  },
  projects: {
    title: L('Mes projets', 'My projects'),
    subtitle: L(
      "Des réalisations orientées impact réel : problème résolu, bénéfice concret, puis technologie.",
      'Impact-driven work: the problem solved and concrete benefit first, technology second.'
    ),
    impactLabel: L('Impact', 'Impact'),
  },
  experience: {
    title: L('Mon expérience', 'My experience'),
    subtitle: L(
      'Stage professionnel, engagement associatif et rôles de leadership.',
      'Professional internship, community involvement and leadership roles.'
    ),
    strengthsTitle: L('Ce que j\'apporte', 'What I bring'),
  },
  education: {
    title: L('Mon parcours', 'My education'),
    subtitle: L(
      'Une formation solide en mathématiques, informatique et data science.',
      'A strong foundation in mathematics, computer science and data science.'
    ),
    achievements: L('Réalisations clés', 'Key achievements'),
    skillsTitle: L('Compétences techniques', 'Technical skills'),
  },
  skills: {
    title: L('Mes compétences', 'My skills'),
    subtitle: L(
      'Un profil à cheval entre développement logiciel et science des données.',
      'A profile bridging software development and data science.'
    ),
    soft: L('Savoir-être', 'Soft skills'),
  },
  about: {
    title: L('À propos de moi', 'About me'),
    subtitle: L('Mon parcours, ma vision et mes valeurs.', 'My background, vision and values.'),
    who: L('Qui suis-je ?', 'Who am I?'),
    mission: L('Ma vision', 'My vision'),
    values: L('Mes valeurs', 'My values'),
    available: L('Disponible', 'Available'),
  },
  contact: {
    title: L('Me contacter', 'Get in touch'),
    subtitle: L(
      "Discutons de votre projet ou d'une collaboration.",
      "Let's talk about your project or a collaboration."
    ),
    email: L('E-mail', 'Email'),
    emailPro: L('E-mail institutionnel', 'Institutional email'),
    phone: L('Téléphone', 'Phone'),
    location: L('Localisation', 'Location'),
  },
  footer: {
    tagline: L(
      'Développeur web/mobile et data scientist, orienté impact.',
      'Web/mobile developer and data scientist, impact-driven.'
    ),
    nav: L('Navigation', 'Navigation'),
    contact: L('Contact', 'Contact'),
    follow: L('Me suivre', 'Follow me'),
    rights: L('Tous droits réservés.', 'All rights reserved.'),
  },
}
