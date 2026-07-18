import { L } from '../i18n'

export const experiences = [
  {
    id: 'club-ia',
    role: L("Secrétaire Général — Club d'Intelligence Artificielle", 'Secretary General — Artificial Intelligence Club'),
    org: 'IMSP — Dangbo, Bénin',
    period: L('2025 — Présent', '2025 — Present'),
    current: true,
    icon: 'fa-solid fa-users-gear',
    type: 'Leadership',
    summary: L(
      "Coordination des activités du Club IA de l'IMSP : organisation des formations, encadrement des membres et pilotage de projets appliqués en intelligence artificielle.",
      'Coordinating the activities of the IMSP AI Club: organizing trainings, mentoring members and leading applied AI projects.'
    ),
    achievements: [
      L('Animation et coordination des réunions et sessions de formation en IA', 'Leading and coordinating AI meetings and training sessions'),
      L("Pilotage du projet « Système de recommandation d'exercices » en équipe", 'Leading the "exercise recommendation system" project as a team'),
      L('Encadrement des membres sur les projets de machine learning', 'Mentoring members on machine learning projects'),
      L("Organisation d'événements de sensibilisation à l'IA", 'Organizing AI awareness events'),
    ],
    tags: [L("Leadership", 'Leadership'), L("Gestion d'équipe", 'Team management'), 'Python', 'Machine Learning'],
  },
  {
    id: 'responsable-classe',
    role: L('Responsable de classe — Master 1 Data Science', 'Class representative — Data Science Master 1'),
    org: 'IMSP — Dangbo, Bénin',
    period: L('2025 — Présent', '2025 — Present'),
    current: true,
    icon: 'fa-solid fa-user-tie',
    type: 'Leadership',
    summary: L(
      "Interface entre la promotion de Master 1 Data Science et le corps enseignant : coordination, communication et représentation des étudiants.",
      'Bridge between the Data Science Master 1 cohort and the faculty: coordination, communication and student representation.'
    ),
    achievements: [
      L("Représentation de la promotion auprès de l'administration et des enseignants", 'Representing the cohort before the administration and teachers'),
      L("Coordination de la communication et de l'organisation de la classe", 'Coordinating class communication and organization'),
      L('Médiation et résolution des problématiques collectives', 'Mediating and resolving collective issues'),
    ],
    tags: [L('Leadership', 'Leadership'), L('Communication', 'Communication'), L('Organisation', 'Organization')],
  },
  {
    id: 'stage-inov',
    role: L('Stagiaire Développeur Backend', 'Backend Developer Intern'),
    org: 'Inov Services Bénin',
    period: '2025',
    current: false,
    icon: 'fa-solid fa-briefcase',
    type: L('Expérience professionnelle', 'Professional experience'),
    summary: L(
      "Contribution au développement de la plateforme Data for Earth, une solution de collecte et de sécurisation de données environnementales déployée en production.",
      'Contributing to the Data for Earth platform, a solution to collect and secure environmental data, deployed in production.'
    ),
    achievements: [
      L("Développement d'APIs RESTful avec Django REST Framework", 'Building RESTful APIs with Django REST Framework'),
      L('Conception et gestion de bases de données PostgreSQL', 'Designing and managing PostgreSQL databases'),
      L('Conteneurisation des applications avec Docker et Docker Compose', 'Containerizing applications with Docker and Docker Compose'),
      L('Mise en place de tests automatisés et de pipelines CI/CD', 'Setting up automated tests and CI/CD pipelines'),
      L("Implémentation de l'authentification JWT et documentation Swagger", 'Implementing JWT authentication and Swagger documentation'),
    ],
    tags: ['Django/DRF', 'PostgreSQL', 'Docker', 'JWT', 'CI/CD', 'Linux'],
  },
  {
    id: 'projets-academiques',
    role: L('Projets académiques & personnels', 'Academic & personal projects'),
    org: 'IMSP & ENS Natitingou',
    period: '2021 — 2025',
    current: false,
    icon: 'fa-solid fa-graduation-cap',
    type: L('Réalisations', 'Achievements'),
    summary: L(
      "Conception de plusieurs applications durant la formation, mêlant développement web, data science et résolution de problèmes concrets.",
      'Building several applications during my studies, mixing web development, data science and real-world problem solving.'
    ),
    achievements: [
      L('Application web de gestion de séminaires (Laravel)', 'Seminar management web app (Laravel)'),
      L('Système de gestion de stocks (Django)', 'Inventory management system (Django)'),
      L('Détection de maladies des plantes par CNN (déployée sur HuggingFace)', 'Plant disease detection with CNN (deployed on HuggingFace)'),
    ],
    tags: ['Laravel', 'Django', 'Python', 'TensorFlow'],
  },
]

export const strengths = [
  {
    icon: 'fa-solid fa-users',
    title: L('Leadership & engagement', 'Leadership & commitment'),
    text: L(
      "Deux rôles de responsabilité (Club IA, délégué de promotion) : je coordonne, fédère et fais aboutir des projets collectifs.",
      'Two roles of responsibility (AI Club, class representative): I coordinate, unite and deliver collective projects.'
    ),
  },
  {
    icon: 'fa-solid fa-bullseye',
    title: L('Orientation impact', 'Impact-driven'),
    text: L(
      "Je choisis des projets qui répondent à un besoin réel : agriculture, environnement, éducation, recherche.",
      'I choose projects that answer a real need: agriculture, environment, education, research.'
    ),
  },
  {
    icon: 'fa-solid fa-gears',
    title: L('Rigueur technique', 'Technical rigor'),
    text: L(
      "Code propre, testé, documenté et déployé — de l'API sécurisée au modèle de deep learning en production.",
      'Clean, tested, documented and deployed code — from secure APIs to deep learning models in production.'
    ),
  },
  {
    icon: 'fa-solid fa-seedling',
    title: L('Apprentissage continu', 'Continuous learning'),
    text: L(
      'Je monte vite en compétence sur de nouvelles technologies et méthodologies pour rester utile et pertinent.',
      'I ramp up quickly on new technologies and methods to stay useful and relevant.'
    ),
  },
]
