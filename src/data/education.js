import { L } from '../i18n'

export const education = [
  {
    id: 'master',
    degree: L('Master 1 — Data Science (TIC)', "Master 1 — Data Science (ICT)"),
    school: L(
      'Institut des Mathématiques et des Sciences Physiques (IMSP) — Dangbo',
      'Institute of Mathematics and Physical Sciences (IMSP) — Dangbo'
    ),
    period: '2025 — 2026',
    status: L('En cours', 'Ongoing'),
    tone: 'amber',
    featured: true,
    icon: 'fa-solid fa-brain',
    description: L(
      "Spécialisation en science des données, machine learning et deep learning, avec des projets appliqués à des problématiques concrètes.",
      'Specializing in data science, machine learning and deep learning, with projects applied to concrete problems.'
    ),
    subjects: [
      'Machine Learning',
      'Deep Learning',
      L('Statistiques avancées', 'Advanced statistics'),
      L('Traitement & visualisation de données', 'Data processing & visualization'),
      L('Intelligence Artificielle', 'Artificial Intelligence'),
    ],
    achievements: [
      L("Secrétaire Général du Club d'Intelligence Artificielle", 'Secretary General of the AI Club'),
      L('Responsable de la promotion de Master 1', 'Class representative of the Master 1 cohort'),
      L("Système de recommandation d'exercices (Club IA)", 'Exercise recommendation system (AI Club)'),
      L('Détection de maladies des plantes par CNN', 'Plant disease detection with CNN'),
    ],
  },
  {
    id: 'licence-tic',
    degree: L("Licence en TIC (Techniques d'Information et de Communication)", 'Bachelor in ICT (Information & Communication Technologies)'),
    school: L(
      'Institut des Mathématiques et des Sciences Physiques (IMSP)',
      'Institute of Mathematics and Physical Sciences (IMSP)'
    ),
    period: '2024 — 2025',
    status: L('Diplômé', 'Graduated'),
    tone: 'green',
    featured: true,
    icon: 'fa-solid fa-laptop-code',
    description: L(
      "Formation en informatique couvrant le développement web, les réseaux et les systèmes d'information.",
      'Computer science training covering web development, networks and information systems.'
    ),
    subjects: [
      L('Développement Web', 'Web development'),
      L('Réseaux', 'Networks'),
      L("Systèmes d'information", 'Information systems'),
      L('Administration système', 'System administration'),
      L('Sécurité informatique', 'Cybersecurity'),
    ],
    achievements: [
      L('Stage à Inov Services Bénin — plateforme Data for Earth', 'Internship at Inov Services Benin — Data for Earth platform'),
      L('Application de gestion de séminaires (Laravel)', 'Seminar management app (Laravel)'),
      L('Application de gestion de stocks (Django)', 'Inventory management app (Django)'),
    ],
  },
  {
    id: 'licence-pro',
    degree: L('Licence Professionnelle — Mathématiques-Informatique', 'Professional Bachelor — Mathematics & Computer Science'),
    school: L('École Normale Supérieure (ENS) de Natitingou', 'École Normale Supérieure (ENS), Natitingou'),
    period: '2021 — 2024',
    status: L('Diplômé', 'Graduated'),
    tone: 'green',
    featured: true,
    icon: 'fa-solid fa-square-root-variable',
    description: L(
      "Formation combinant mathématiques appliquées et informatique, centrée sur les algorithmes et la programmation.",
      'Training combining applied mathematics and computer science, focused on algorithms and programming.'
    ),
    subjects: [
      L('Algorithmique', 'Algorithms'),
      L('Programmation orientée objet', 'Object-oriented programming'),
      L('Méthodes numériques', 'Numerical methods'),
      L('Mathématiques', 'Mathematics'),
    ],
    achievements: [],
  },
  {
    id: 'bac',
    degree: L('Baccalauréat — Série C (scientifique)', 'High School Diploma — Science (Series C)'),
    school: L('CEG Danto, Akpro-Missérété', 'CEG Danto, Akpro-Missérété'),
    period: '2020',
    status: L('Obtenu', 'Obtained'),
    tone: 'blue',
    featured: false,
    icon: 'fa-solid fa-certificate',
    description: L(
      "Baccalauréat scientifique à dominante mathématiques et sciences physiques.",
      'Science high-school diploma focused on mathematics and physics.'
    ),
    subjects: [L('Mathématiques', 'Mathematics'), L('Physique-Chimie', 'Physics & Chemistry')],
    achievements: [],
  },
]

export const skillGroups = [
  {
    title: L('Data Science & IA', 'Data Science & AI'),
    icon: 'fa-solid fa-brain',
    skills: ['Python', 'Machine Learning', 'Deep Learning (CNN)', 'TensorFlow / Keras', 'Scikit-learn', 'Pandas / NumPy'],
  },
  {
    title: L('Développement Web & Back-end', 'Web & Back-end Development'),
    icon: 'fa-solid fa-server',
    skills: ['Django / DRF', 'Laravel / PHP', 'API REST', 'JavaScript', 'React', 'HTML5 / CSS3'],
  },
  {
    title: L('Données & Outils', 'Data & Tools'),
    icon: 'fa-solid fa-database',
    skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Neo4j', 'Docker', 'Git / GitHub Actions'],
  },
  {
    title: L('Fondations & Systèmes', 'Foundations & Systems'),
    icon: 'fa-solid fa-network-wired',
    skills: [
      L('Algorithmique', 'Algorithms'),
      L('Mathématiques appliquées', 'Applied mathematics'),
      L('Statistiques', 'Statistics'),
      'Linux',
      L('Réseaux', 'Networks'),
      L('Sécurité', 'Security'),
    ],
  },
]

export const softSkills = [
  { icon: 'fa-solid fa-users', label: L("Leadership & gestion d'équipe", 'Leadership & team management') },
  { icon: 'fa-solid fa-comments', label: L('Communication', 'Communication') },
  { icon: 'fa-solid fa-lightbulb', label: L('Résolution de problèmes', 'Problem solving') },
  { icon: 'fa-solid fa-language', label: L('Français, Anglais technique', 'French, technical English') },
]

export const values = [
  {
    icon: 'fa-solid fa-gem',
    title: L('Excellence', 'Excellence'),
    text: L("Fournir un travail de qualité, soigné et fiable.", 'Delivering quality, polished and reliable work.'),
  },
  {
    icon: 'fa-solid fa-handshake',
    title: L('Intégrité', 'Integrity'),
    text: L("L'honnêteté et la transparence guident mes actions.", 'Honesty and transparency guide my actions.'),
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: L('Innovation', 'Innovation'),
    text: L('Chercher des solutions nouvelles à des problèmes concrets.', 'Seeking new solutions to concrete problems.'),
  },
  {
    icon: 'fa-solid fa-earth-africa',
    title: L('Impact local', 'Local impact'),
    text: L("Mettre la technologie au service du Bénin et de l'Afrique.", 'Putting technology at the service of Benin and Africa.'),
  },
]
