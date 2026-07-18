import { L } from '../i18n'

// Projets classés par ordre d'impact / de pertinence.
// category: 'data' | 'backend' | 'web' | 'fullstack'
export const projects = [
  {
    id: 'data-for-earth',
    title: 'Data for Earth',
    category: 'backend',
    featured: true,
    status: 'production',
    context: L('Stage — Inov Services Bénin', 'Internship — Inov Services Benin'),
    icon: 'fa-solid fa-earth-africa',
    impact: L(
      "Fiabiliser la collecte de données environnementales pour appuyer la décision et le suivi écologique, avec une plateforme sécurisée et déployée en production.",
      'Making environmental data collection reliable to support decision-making and ecological monitoring, through a secure platform deployed in production.'
    ),
    description: L(
      "Conception du back-end d'une plateforme de collecte et de sécurisation de données environnementales : API REST documentée, authentification robuste et déploiement conteneurisé automatisé.",
      'Back-end design of a platform to collect and secure environmental data: documented REST API, robust authentication and automated containerized deployment.'
    ),
    tags: ['Django REST Framework', 'JWT', 'PostgreSQL', 'Docker', 'CI/CD', 'Swagger'],
    highlights: [
      L('Plateforme déployée et exploitée en production', 'Platform deployed and running in production'),
      L('Authentification JWT et gestion fine des permissions', 'JWT authentication and fine-grained permissions'),
      L('Conteneurisation Docker et pipeline CI/CD (GitHub Actions)', 'Docker containerization and CI/CD pipeline (GitHub Actions)'),
      L("Documentation API complète (Swagger) pour l'équipe", 'Complete API documentation (Swagger) for the team'),
    ],
    links: { demo: 'https://dataforearth.inovservices.com', github: 'https://github.com/rachidiID' },
  },
  {
    id: 'detection-plantes',
    title: L('Détection de maladies des plantes (IA)', 'Plant disease detection (AI)'),
    category: 'data',
    featured: true,
    status: 'live',
    context: L('Projet Data Science — déployé sur HuggingFace', 'Data Science project — deployed on HuggingFace'),
    icon: 'fa-solid fa-leaf',
    impact: L(
      "Aider les producteurs de l'agriculture africaine à diagnostiquer tôt les maladies des cultures, à partir d'une simple photo de feuille, via un outil accessible en ligne.",
      'Helping African farmers diagnose crop diseases early from a single leaf photo, through a freely accessible online tool.'
    ),
    description: L(
      "Modèle de deep learning (CNN) entraîné à reconnaître les maladies de plantes sur photos de feuilles, packagé en application web publique et interactive sur HuggingFace Spaces.",
      'Deep learning model (CNN) trained to recognize plant diseases from leaf photos, packaged as a public interactive web app on HuggingFace Spaces.'
    ),
    tags: ['Python', 'TensorFlow / Keras', 'CNN', 'Computer Vision', 'HuggingFace'],
    highlights: [
      L('Application en ligne utilisable par tout technicien ou agriculteur', 'Online app usable by any technician or farmer'),
      L("Classification d'images de feuilles par réseau de neurones convolutif", 'Leaf image classification via convolutional neural network'),
      L('Prétraitement et augmentation de données pour la robustesse', 'Data preprocessing and augmentation for robustness'),
      L("Cas d'usage concret pour la sécurité alimentaire", 'Concrete use case for food security'),
    ],
    links: { demo: 'https://huggingface.co/spaces/Adebissi/Detection_maladie_plante', github: 'https://github.com/rachidiID' },
  },
  {
    id: 'imsp-site',
    title: L("Site officiel de l'IMSP", 'Official IMSP website'),
    category: 'web',
    featured: true,
    status: 'live',
    context: L('Développé pour mon institut', 'Built for my own institute'),
    icon: 'fa-solid fa-university',
    impact: L(
      "Doter l'Institut des Mathématiques et des Sciences Physiques d'une vitrine numérique professionnelle, utilisée par ses étudiants, enseignants et partenaires.",
      'Giving the Institute of Mathematics and Physical Sciences a professional digital presence, used by its students, teachers and partners.'
    ),
    description: L(
      "Contribution au site institutionnel de l'IMSP-UAC : présentation de l'institut, de ses formations et de ses actualités, avec un rendu clair et responsive.",
      'Contribution to the IMSP-UAC institutional website: presenting the institute, its programs and news, with a clean responsive layout.'
    ),
    tags: ['Web', 'Front-end', 'Responsive', 'CMS'],
    highlights: [
      L('Vitrine officielle en ligne : www.imsp-uac.org', 'Official site online: www.imsp-uac.org'),
      L("Présentation des formations et actualités de l'institut", 'Showcasing the institute programs and news'),
      L('Interface responsive et accessible', 'Responsive and accessible interface'),
    ],
    links: { demo: 'https://www.imsp-uac.org' },
  },
  {
    id: 'researchhub',
    title: 'ResearchHub IMSP',
    category: 'fullstack',
    featured: true,
    status: 'live',
    context: L('Plateforme de valorisation de la recherche', 'Research dissemination platform'),
    icon: 'fa-solid fa-flask',
    impact: L(
      "Valoriser et rendre visible la production scientifique de l'IMSP (séminaires, travaux de recherche) auprès de la communauté académique.",
      'Showcasing and increasing the visibility of IMSP research output (seminars, research work) for the academic community.'
    ),
    description: L(
      "Développement de ResearchHub, plateforme de diffusion des séminaires et de valorisation de la recherche de l'IMSP-UAC.",
      'Development of ResearchHub, a platform to broadcast seminars and promote the research of IMSP-UAC.'
    ),
    tags: ['Web', 'Full-Stack', L('Base de données', 'Database'), L('Gestion de contenu', 'Content management')],
    highlights: [
      L('Plateforme en ligne : researchhub.imsp-uac.org', 'Platform online: researchhub.imsp-uac.org'),
      L('Diffusion des séminaires et travaux de recherche', 'Broadcasting seminars and research work'),
      L('Espace centralisé pour la communauté scientifique', 'A central hub for the scientific community'),
    ],
    links: { demo: 'https://researchhub.imsp-uac.org' },
  },
  {
    id: 'reco-exercices',
    title: L("Système de recommandation d'exercices", 'Exercise recommendation system'),
    category: 'data',
    featured: true,
    status: 'done',
    context: L("Projet du Club IA de l'IMSP", 'Project of the IMSP AI Club'),
    icon: 'fa-solid fa-diagram-project',
    impact: L(
      "Personnaliser la révision des étudiants en leur suggérant, dans une banque d'épreuves, les exercices les plus adaptés à leur niveau et à leurs lacunes.",
      "Personalizing students' revision by recommending, from an exam bank, the exercises best suited to their level and weaknesses."
    ),
    description: L(
      "Système de recommandation appliqué à une banque d'épreuves : suggestion d'exercices ciblés selon le profil et la progression de l'apprenant. Projet piloté au sein du Club IA de l'IMSP.",
      "Recommendation system applied to an exam bank: suggesting targeted exercises based on the learner's profile and progress. Project led within the IMSP AI Club."
    ),
    tags: ['Python', 'Scikit-learn', 'Pandas', L('Filtrage collaboratif', 'Collaborative filtering')],
    highlights: [
      L("Recommandation d'exercices adaptés au niveau de l'étudiant", 'Recommending exercises matched to the student level'),
      L('Classification des épreuves par matière et difficulté', 'Classifying exams by subject and difficulty'),
      L('Projet mené en équipe au sein du Club IA', 'Team project led within the AI Club'),
    ],
    links: { github: 'https://github.com/rachidiID/Banque_epreuve' },
  },
  {
    id: 'seminaire',
    title: L('Gestion de séminaire scientifique', 'Scientific seminar management'),
    category: 'fullstack',
    featured: false,
    status: 'done',
    context: L('Projet académique — IMSP', 'Academic project — IMSP'),
    icon: 'fa-solid fa-calendar-check',
    impact: L(
      "Digitaliser l'organisation d'un séminaire scientifique : inscriptions, sessions, soumissions et attestations, sans gestion papier.",
      'Digitalizing the organization of a scientific seminar: registrations, sessions, submissions and certificates, paper-free.'
    ),
    description: L(
      "Application web de gestion complète d'un séminaire : participants, sessions, soumission d'articles et génération automatique d'attestations.",
      'Full web application to manage a seminar: participants, sessions, paper submissions and automatic certificate generation.'
    ),
    tags: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    highlights: [
      L('Inscription et authentification des participants', 'Participant registration and authentication'),
      L("Soumission et validation d'articles", 'Paper submission and validation'),
      L("Génération automatique d'attestations", 'Automatic certificate generation'),
      L('Tableau de bord administrateur', 'Administrator dashboard'),
    ],
    links: { github: 'https://github.com/rachidiID/projet_gestion_seminaire_imsp' },
  },
  {
    id: 'stocks',
    title: L('Gestion de stocks', 'Inventory management'),
    category: 'backend',
    featured: false,
    status: 'done',
    context: L('Projet académique', 'Academic project'),
    icon: 'fa-solid fa-boxes-stacked',
    impact: L(
      "Donner à une petite structure une visibilité en temps réel sur ses stocks et prévenir les ruptures grâce aux alertes de seuil.",
      'Giving a small business real-time visibility on its inventory and preventing shortages through threshold alerts.'
    ),
    description: L(
      "Application de gestion des stocks avec suivi des entrées/sorties, alertes de seuil et rapports analytiques.",
      'Inventory management app with in/out tracking, threshold alerts and analytics reports.'
    ),
    tags: ['Django', 'Python', 'SQLite', 'Chart.js'],
    highlights: [
      L('Suivi en temps réel des mouvements de stock', 'Real-time tracking of stock movements'),
      L('Alertes de stock minimum', 'Minimum stock alerts'),
      L('Rapports et statistiques', 'Reports and statistics'),
    ],
    links: { github: 'https://github.com/rachidiID/gestion_de_stock' },
  },
]

export const projectFilters = [
  { key: 'all', label: L('Tous', 'All'), icon: 'fa-solid fa-border-all' },
  { key: 'data', label: L('Data Science / IA', 'Data Science / AI'), icon: 'fa-solid fa-brain' },
  { key: 'backend', label: 'Backend', icon: 'fa-solid fa-server' },
  { key: 'fullstack', label: 'Full-Stack', icon: 'fa-solid fa-layer-group' },
  { key: 'web', label: 'Web', icon: 'fa-solid fa-globe' },
]

export const statusLabels = {
  production: { label: L('En production', 'In production'), tone: 'green' },
  live: { label: L('En ligne', 'Live'), tone: 'green' },
  done: { label: L('Terminé', 'Completed'), tone: 'blue' },
  progress: { label: L('En cours', 'In progress'), tone: 'amber' },
}
