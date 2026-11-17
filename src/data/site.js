// =====================================================================
//  CONTENU DU PORTFOLIO — fichier unique à modifier.
//
//  Règle : toute valeur vide ('' ou L('', '')) est MASQUÉE sur le site.
//  Rien n'est inventé : les champs « TODO » attendent vos données.
//  La liste complète est dans TODO_A_COMPLETER.md (racine du dépôt).
//
//  L('texte français', 'English text')
// =====================================================================
import { L } from '../i18n.js'

import imsp720 from '../assets/projects/imsp-720.webp'
import imsp1280 from '../assets/projects/imsp-1280.webp'
import rh720 from '../assets/projects/researchhub-720.webp'
import rh1280 from '../assets/projects/researchhub-1280.webp'

// ---------------------------------------------------------------------
//  Identité et contact
// ---------------------------------------------------------------------
export const config = {
  name: 'Rachidi Adébissi IDONIYI',
  firstName: 'Rachidi',
  title: L('Développeur Full-Stack & Data Scientist', 'Full-Stack Developer & Data Scientist'),
  // Accroche (reprise du profil écrit par Rachidi)
  tagline: L(
    'Je construis des applications web avec Django et React, et je travaille aussi sur le machine learning, pour créer des outils que les gens utilisent vraiment.',
    'I build web applications with Django and React, and I also work on machine learning, to create tools that people actually use.'
  ),
  location: L('Porto-Novo, Bénin', 'Porto-Novo, Benin'),
  school: L('Master 2 TIC, option Data Science, IMSP-UAC', "Master's in ICT (Data Science), IMSP-UAC"),

  // TODO (à confirmer) : e-mail public. Laissé vide dans le brief ; repris du CV d'origine.
  email: 'rachidon2002@gmail.com',

  // TODO (à confirmer) : numéro WhatsApp. Format international, chiffres uniquement
  // (ex. '2290153394777'). Mettre '' pour ne pas l'afficher.
  whatsapp: '2290153394777',
  whatsappDisplay: '+229 01 53 39 47 77',

  // TODO : ce que vous cherchez. Vide = la mention « Disponible pour » est masquée.
  // ex. L('stage de fin d’études · emploi · missions freelance', 'final-year internship · full-time role · freelance work')
  availability: L('', ''),

  github: 'https://github.com/rachidiID',
  linkedin: 'https://www.linkedin.com/in/rachid-idoniyi',
  repo: 'https://github.com/rachidiID/Portfolio',

  // CV proposés sur le site (fichiers dans public/assets/, générés par cv/build.sh)
  cv: {
    fr: 'CV_Rachidi_IDONIYI_FullStack.pdf',
    en: 'CV_Rachidi_IDONIYI_FullStack_EN.pdf',
  },

  // TODO : techno mobile réellement maîtrisée (ex. 'Flutter'). Vide = pas de service mobile affiché.
  mobileTech: '',
}

// ---------------------------------------------------------------------
//  Projets — 4 études de cas
//  image: null -> visuel neutre (aucune capture disponible)
//  Champs vides (role, results…) -> masqués
// ---------------------------------------------------------------------
export const caseStudies = [
  {
    id: 'data-for-earth',
    name: 'Data for Earth',
    kicker: L('Stage · Inov Services Bénin · 2025', 'Internship · Inov Services Benin · 2025'),
    summary: L(
      'Plateforme de collecte et de sécurisation de données environnementales.',
      'A platform to collect and secure environmental data.'
    ),
    problem: L(
      'Collecter des données environnementales fiables et les protéger, pour appuyer la décision et le suivi écologique.',
      'Collect reliable environmental data and keep it secure, to support decision-making and ecological monitoring.'
    ),
    solution: L(
      "Le back-end de la plateforme : une API REST en Django REST Framework, documentée avec Swagger, protégée par une authentification JWT et des permissions, conteneurisée avec Docker et déployée par un pipeline CI/CD (GitHub Actions).",
      'The platform back end: a Django REST Framework API documented with Swagger, secured with JWT authentication and permissions, containerised with Docker and shipped through a CI/CD pipeline (GitHub Actions).'
    ),
    role: L('Développeur backend (stage).', 'Backend developer (internship).'),
    stack: ['Django REST Framework', 'JWT', 'Docker', 'GitHub Actions', 'Swagger'],
    results: [
      L('Plateforme mise en ligne : dataforearth.inovservices.com', 'Platform online at dataforearth.inovservices.com'),
      // TODO : nombre d'endpoints, d'utilisateurs, résultat mesurable. ex. L('25 endpoints documentés', '25 documented endpoints')
    ],
    image: null,
    cover: L('API REST · données environnementales', 'REST API · environmental data'),
    // TODO : le serveur ne répondait pas le 17/11/2026. S'il reste hors ligne, mettre live: ''.
    links: { live: 'https://dataforearth.inovservices.com', code: '' },
  },
  {
    id: 'plantes',
    name: L('Détection de maladies des plantes', 'Plant disease detection'),
    kicker: L('Data science · deep learning', 'Data science · deep learning'),
    summary: L(
      "Un modèle qui reconnaît la maladie d'une plante à partir d'une photo de feuille.",
      "A model that recognises a plant's disease from a photo of a leaf."
    ),
    problem: L(
      'Aider les producteurs à diagnostiquer tôt les maladies des cultures, à partir d’une simple photo de feuille.',
      'Help farmers diagnose crop diseases early, from a single photo of a leaf.'
    ),
    solution: L(
      'Un réseau de neurones convolutif (CNN) entraîné avec TensorFlow/Keras pour classer les photos de feuilles, publié comme application web sur Hugging Face Spaces.',
      'A convolutional neural network (CNN) trained with TensorFlow/Keras to classify leaf photos, published as a web app on Hugging Face Spaces.'
    ),
    role: L('', ''), // TODO : votre rôle (ex. L('Conception, entraînement et déploiement du modèle.', 'Designed, trained and deployed the model.'))
    stack: ['Python', 'TensorFlow / Keras', 'CNN', 'Hugging Face Spaces'],
    results: [
      L('Démo publique, utilisable depuis un navigateur', 'Public demo, usable from any browser'),
      // TODO : nombre d'images, de classes, précision. ex. L('94 % de précision sur 15 classes', '94% accuracy across 15 classes')
    ],
    image: null,
    cover: L('CNN · vision par ordinateur', 'CNN · computer vision'),
    links: { live: 'https://huggingface.co/spaces/Adebissi/Detection_maladie_plante', code: '' },
  },
  {
    id: 'researchhub',
    name: 'ResearchHub',
    kicker: L("Plateforme de l'IMSP", 'IMSP platform'),
    summary: L(
      "La plateforme qui valorise les travaux de recherche de l'IMSP.",
      "The platform that showcases IMSP's research."
    ),
    problem: L(
      "Rendre les travaux de recherche de l'IMSP visibles et faciles à consulter.",
      "Make IMSP's research visible and easy to browse."
    ),
    solution: L(
      "Une plateforme web (React, Django REST Framework, PostgreSQL) qui centralise et diffuse les travaux de recherche et les publications de l'institut.",
      "A web platform (React, Django REST Framework, PostgreSQL) that brings together and publishes the institute's research and publications."
    ),
    role: L('', ''), // TODO : votre rôle exact (ex. L('Développeur full-stack principal.', 'Lead full-stack developer.'))
    stack: ['React', 'Django REST Framework', 'PostgreSQL'],
    results: [
      L('En ligne : researchhub.imsp-uac.org', 'Live at researchhub.imsp-uac.org'),
      // TODO : nombre de publications / visiteurs
    ],
    image: { src: rh720, srcSet: `${rh720} 720w, ${rh1280} 1280w`, width: 1280, height: 800 },
    links: { live: 'https://researchhub.imsp-uac.org', code: '' },
  },
  {
    id: 'stockmairie',
    name: 'StockMairie',
    // TODO : si la mention est autorisée, remplacer par
    // L('Client · Mairie de Porto-Novo', 'Client · Porto-Novo City Hall')
    kicker: L('Client · administration communale', 'Client · local government'),
    summary: L(
      'Logiciel de comptabilité matières pour une mairie.',
      'Inventory accounting software for a city hall.'
    ),
    problem: L(
      "Suivre le matériel d'une mairie (consommables et équipements) avec une traçabilité conforme à la comptabilité publique.",
      "Track a city hall's supplies and equipment with traceability that meets public-sector accounting rules."
    ),
    solution: L(
      "Entrées et sorties avec circuit de validation (soumettre, approuver, servir), suivi des équipements (numéro d'inventaire, affectation, réforme), alertes de seuil, import CSV/Excel, rôles et permissions. Le logiciel tourne en réseau (Docker) ou comme application Windows autonome.",
      'Stock in and out with an approval workflow (submit, approve, issue), equipment tracking (inventory number, assignment, disposal), low-stock alerts, CSV/Excel import, roles and permissions. It runs on a network (Docker) or as a standalone Windows application.'
    ),
    role: L('', ''), // TODO : votre rôle
    stack: ['Django REST Framework', 'React', 'PostgreSQL', 'Docker'],
    results: [
      // TODO : nombre d'utilisateurs, mise en service. ex. L('Utilisé par 12 agents', 'Used by 12 staff members')
    ],
    image: null,
    cover: L('Comptabilité matières', 'Inventory accounting'),
    links: { live: '', code: '' },
  },
]

// ---------------------------------------------------------------------
//  Autres projets
// ---------------------------------------------------------------------
export const otherProjects = [
  {
    name: L("Site officiel de l'IMSP", 'IMSP official website'),
    text: L(
      'Site institutionnel : formations, actualités et gestion de contenu.',
      'Institutional website: degree programmes, news and content management.'
    ),
    stack: ['React', 'Django', 'PostgreSQL'],
    image: { src: imsp720, srcSet: `${imsp720} 720w, ${imsp1280} 1280w`, width: 1280, height: 800 },
    links: { live: 'https://www.imsp-uac.org', code: '' },
  },
  {
    name: L("Banque d'épreuves intelligente", 'Smart exam bank'),
    text: L(
      "Recommande à chaque étudiant des exercices adaptés à son niveau. Projet du Club IA de l'IMSP.",
      "Recommends exercises matched to each student's level. An IMSP AI Club project."
    ),
    stack: ['Python', 'scikit-learn', 'Pandas'],
    links: { live: '', code: 'https://github.com/rachidiID/Banque_epreuve' },
  },
  {
    name: L('Détection de fraude bancaire', 'Credit card fraud detection'),
    text: L(
      '284 807 transactions, dont 492 fraudes (0,17 %) : modèles supervisés et détection d’anomalies, exposés via une API et un tableau de bord.',
      '284,807 transactions, 492 of them fraudulent (0.17%): supervised models and anomaly detection, served through an API and a dashboard.'
    ),
    stack: ['Python', 'XGBoost', 'Keras', 'SHAP', 'FastAPI', 'React'],
    links: { live: '', code: 'https://github.com/rachidiID/fraude' },
  },
  {
    name: L('Gestion de séminaire scientifique', 'Scientific seminar management'),
    text: L(
      "Inscriptions, soumission d'articles et génération d'attestations.",
      'Registration, paper submission and certificate generation.'
    ),
    stack: ['Laravel', 'PHP', 'MySQL'],
    links: { live: '', code: 'https://github.com/rachidiID/projet_gestion_seminaire_imsp' },
  },
  {
    name: L('Gestion de stocks en temps réel', 'Real-time inventory management'),
    text: L(
      'Mouvements de stock, alertes de seuil et rapports.',
      'Stock movements, low-stock alerts and reports.'
    ),
    stack: ['Django', 'Python'],
    links: { live: '', code: 'https://github.com/rachidiID/gestion_de_stock' },
  },
]

// ---------------------------------------------------------------------
//  Preuves rapides (bande sous l'accueil). Tableau vide = bande masquée.
//  Uniquement des faits vérifiables. Remplacez-les par vos chiffres quand
//  vous les avez (ex. { value: '60', label: L('membres au Club IA', 'AI Club members') }).
// ---------------------------------------------------------------------
const liveCount = [...caseStudies, ...otherProjects].filter((p) => p.links.live).length

export const proofs = [
  { value: String(liveCount), label: L('projets en ligne, à tester', 'live projects you can try') },
  { value: 'Master 2', label: L('Data Science, IMSP-UAC', 'Data Science, IMSP-UAC') },
  { value: '2025', label: L('stage backend chez Inov Services', 'backend internship at Inov Services') },
  { value: L('Club IA', 'AI Club'), label: L("coordonnateur à l'IMSP en 2026-2027", 'coordinator at IMSP for 2026-2027') },
]

// ---------------------------------------------------------------------
//  Services
// ---------------------------------------------------------------------
export const services = [
  {
    id: 'web',
    title: L('Développement web', 'Web development'),
    deliver: L(
      "Sites et plateformes sur mesure : API Django REST, interface React, espace d'administration, mise en ligne.",
      'Custom websites and platforms: Django REST API, React front end, admin area, deployment.'
    ),
    how: L(
      "On cadre le besoin ensemble, puis je livre par étapes. Le code est versionné sur GitHub et l'API documentée.",
      'We scope the need together, then I deliver in steps. The code lives on GitHub and the API is documented.'
    ),
    stack: ['Django', 'Django REST Framework', 'React', 'PostgreSQL', 'Docker'],
  },
  {
    id: 'apps',
    title: L('Applications de gestion', 'Business applications'),
    deliver: L(
      "Logiciels métier (stocks, comptabilité matières, inscriptions) avec rôles, circuits de validation, alertes et import de données. En ligne ou en logiciel Windows autonome.",
      'Internal tools (inventory, asset accounting, registrations) with roles, approval workflows, alerts and data import. Online or as a standalone Windows application.'
    ),
    how: L(
      'Je pars de vos procédures et de vos documents existants pour concevoir des écrans simples à utiliser.',
      'I start from your existing procedures and documents to design screens that are simple to use.'
    ),
    stack: ['Django', 'React', 'Laravel', 'PostgreSQL', 'MySQL'],
  },
  {
    id: 'data',
    title: L('Data science et machine learning', 'Data science and machine learning'),
    deliver: L(
      "Analyse et visualisation de données, modèles de classification et de recommandation, mise à disposition via une API ou une démo web.",
      'Data analysis and visualisation, classification and recommendation models, delivered through an API or a web demo.'
    ),
    how: L(
      'Je pars de vos données réelles et je mesure la performance du modèle avant de le mettre en service.',
      'I start from your real data and measure model performance before putting it into service.'
    ),
    stack: ['Python', 'Pandas', 'scikit-learn', 'TensorFlow / Keras', 'Matplotlib'],
  },
]

// Ajouté automatiquement si config.mobileTech est renseigné.
export const mobileService = (tech) => ({
  id: 'mobile',
  title: L('Applications mobiles', 'Mobile apps'),
  deliver: L(
    'Applications mobiles connectées à votre back-end.',
    'Mobile apps connected to your back end.'
  ),
  how: L(
    'Même méthode que pour le web : besoin cadré, livraisons par étapes, code versionné.',
    'Same approach as for the web: scoped need, step-by-step delivery, versioned code.'
  ),
  stack: [tech],
})

// ---------------------------------------------------------------------
//  Compétences (groupées, sans pourcentage)
// ---------------------------------------------------------------------
export const skillGroups = [
  {
    title: 'Backend',
    items: ['Python', 'Django', 'Django REST Framework', 'PHP', 'Laravel', 'API REST', 'JWT', 'Swagger'],
    usedIn: L('Data for Earth, ResearchHub, StockMairie', 'Data for Earth, ResearchHub, StockMairie'),
  },
  {
    title: 'Frontend',
    items: ['JavaScript', 'React', 'HTML5', 'CSS3'],
    usedIn: L("ResearchHub, site de l'IMSP, ce portfolio", 'ResearchHub, IMSP website, this portfolio'),
  },
  {
    title: 'Data / ML',
    items: ['Pandas', 'NumPy', 'scikit-learn', 'TensorFlow / Keras', 'Matplotlib', 'Seaborn'],
    usedIn: L("Détection de maladies des plantes, banque d'épreuves", 'Plant disease detection, smart exam bank'),
  },
  {
    title: 'DevOps',
    items: ['Git', 'Docker', 'GitHub Actions', 'Linux'],
    usedIn: L('Data for Earth, StockMairie, ce portfolio', 'Data for Earth, StockMairie, this portfolio'),
  },
  {
    title: L('Bases de données', 'Databases'),
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL'],
    usedIn: L("ResearchHub, site de l'IMSP, StockMairie", 'ResearchHub, IMSP website, StockMairie'),
  },
]
// TODO : retirer Java ou C++ s'ils ne sont pas réellement maîtrisés.
export const otherLanguages = ['Java', 'C++']
export const spokenLanguages = L('Français (langue maternelle) · Anglais (B1/B2)', 'French (native) · English (B1/B2)')

// ---------------------------------------------------------------------
//  Parcours
// ---------------------------------------------------------------------
export const experience = [
  {
    period: '2026 – 2027',
    title: L("Coordonnateur du Club d'Intelligence Artificielle", 'Coordinator of the Artificial Intelligence Club'),
    place: L('IMSP-UAC, Dangbo. Secrétaire Général en 2025-2026', 'IMSP-UAC, Dangbo. Secretary General in 2025-2026'),
    text: L(
      "J'organise les sessions de formation en IA et en machine learning, j'aide les membres sur leurs projets et je prépare des événements pour faire découvrir l'IA.",
      'I run AI and machine learning training sessions, help members with their projects and set up events to introduce people to AI.'
    ),
    // TODO : nombre de membres, de sessions, d'événements. ex. L('60 membres · 12 sessions', '60 members · 12 sessions')
    facts: L('', ''),
  },
  {
    period: L('Depuis 2025', 'Since 2025'),
    title: L('Responsable de classe, Master 1 puis Master 2 TIC', 'Class representative, Master 1 then Master 2 in ICT'),
    place: 'IMSP-UAC, Dangbo',
    text: L(
      'Je fais le lien entre les étudiants et les enseignants, et je gère la logistique et la communication de la promotion.',
      "I am the link between students and teaching staff, and I handle the cohort's logistics and communication."
    ),
    facts: L('', ''), // TODO : effectif de la promotion
  },
  {
    period: '2025',
    title: L('Stage de développeur backend', 'Backend developer internship'),
    place: 'Inov Services Bénin',
    text: L(
      "J'ai travaillé sur le back-end de Data for Earth : API REST avec Django REST Framework, authentification JWT, Docker, déploiement avec GitHub Actions et documentation Swagger.",
      'I worked on the Data for Earth back end: REST API with Django REST Framework, JWT authentication, Docker, deployment with GitHub Actions and Swagger documentation.'
    ),
    facts: L('', ''), // TODO : mois exacts du stage, résultats chiffrés
  },
]

export const education = [
  {
    period: '2026 – 2027',
    title: L('Master 2 TIC, option Data Science', 'Master 2 in ICT, Data Science track'),
    place: L("IMSP, Université d'Abomey-Calavi", 'IMSP, University of Abomey-Calavi'),
    ongoing: true,
  },
  {
    period: '2025 – 2026',
    title: L('Master 1 TIC, option Data Science', 'Master 1 in ICT, Data Science track'),
    place: L("IMSP, Université d'Abomey-Calavi", 'IMSP, University of Abomey-Calavi'),
  },
  {
    period: '2024 – 2025',
    title: L('Licence en TIC', "Bachelor's degree in ICT"),
    place: 'IMSP, Dangbo',
  },
  {
    period: '2021 – 2024',
    title: L('Licence professionnelle Mathématiques-Informatique', "Professional bachelor's in Mathematics & Computer Science"),
    place: L('ENS de Natitingou', 'ENS Natitingou'),
  },
]

// ---------------------------------------------------------------------
//  Témoignages / logos — TODO : uniquement avec autorisation.
//  Tableau vide = section masquée.
//  ex. { quote: L('…', '…'), author: 'Nom', role: L('Fonction', 'Role') }
// ---------------------------------------------------------------------
export const testimonials = []
