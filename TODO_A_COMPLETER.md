# À compléter

Tant qu'une valeur reste vide, l'élément correspondant est **masqué** : sur le site comme dans le CV final, aucun « [X] » ne s'affiche.
Le CV en version brouillon (`cv/export/brouillon/`) montre en jaune chaque donnée manquante, ce qui aide à relire.

Après une modification :
- **Portfolio :** `git push` sur `main` suffit, le déploiement est automatique.
- **CV :** lancez `./cv/build.sh`. Il régénère les PDF et copie les CV Full-Stack FR et EN dans `public/assets/`.

---

## 1. À vérifier avant le salon (18 novembre)

| Quoi | Où | Action |
|---|---|---|
| Data for Earth ne répondait pas le 17/11 (serveur 144.126.200.99 injoignable) | `src/data/site.js` l. 89 | Ouvrez dataforearth.inovservices.com. S'il est toujours hors ligne, mettez `live: ''`. Le bouton et le compteur « projets en ligne » s'ajustent tout seuls. Le profil du CV dit « tous en ligne aujourd'hui » : retirez cette fin de phrase dans `cv/contenu-fr.tex` et `cv/contenu-en.tex` si besoin. |
| La démo Hugging Face est en veille (« Sleeping ») | huggingface.co/spaces/Adebissi/Detection_maladie_plante | Ouvrez-la et cliquez sur « Restart this Space » le matin du salon. Le redémarrage prend quelques minutes. |
| E-mail public : repris du CV d'origine, à confirmer | `src/data/site.js` l. 33 et `cv/donnees.tex` l. 13 | ex. `rachidon2002@gmail.com` ou `adebissi.idoniyi@imsp-uac.org` |
| Numéro WhatsApp : celui du CV, à confirmer qu'il est bien sur WhatsApp | `src/data/site.js` l. 37-38 | Chiffres uniquement : `2290153394777`. Mettez `''` pour ne pas l'afficher. |

## 2. Portfolio : `src/data/site.js`

| Champ | Ligne | Exemple |
|---|---|---|
| `config.availability` : mention « Disponible pour » | 42 | `L('stage de fin d’études · missions freelance', 'final-year internship · freelance work')` |
| `config.mobileTech` : ajoute le service « Applications mobiles » | 55 | `'Flutter'` (seulement si vous l'avez réellement pratiqué) |
| Data for Earth, `results` : chiffres | 84 | `L('25 endpoints documentés', '25 documented endpoints')` |
| Détection de plantes, `role` | 107 | `L('Conception, entraînement et déploiement du modèle.', 'Designed, trained and deployed the model.')` |
| Détection de plantes, `results` : images, classes, précision | 111 | `L('94 % de précision sur 15 classes', '94% accuracy across 15 classes')` |
| ResearchHub, `role` | 133 | `L('Développeur full-stack principal.', 'Lead full-stack developer.')` (GitHub montre 209 commits de votre part sur le dépôt) |
| ResearchHub, `results` : publications ou visiteurs | 137 | Le site affiche « 80+ publications » : ne l'utilisez que si le chiffre est exact. |
| StockMairie, `kicker` : nom du client | 145 | Si la mention est autorisée : `L('Client · Mairie de Porto-Novo', 'Client · Porto-Novo City Hall')` |
| StockMairie, `role` et `results` | 160 et 163 | `L('Utilisé par 12 agents', 'Used by 12 staff members')` |
| Langages secondaires (Java, C++) | 328 | Retirez ceux que vous ne maîtrisez pas vraiment. |
| Club IA, `facts` : membres, sessions, événements | 343 | `L('60 membres · 12 sessions', '60 members · 12 sessions')` |
| Responsable de classe, `facts` : effectif | 354 | `L('Promotion de 35 étudiants', 'Cohort of 35 students')` |
| Stage, `facts` : mois exacts, résultats | 364 | `L('Juin – septembre 2025', 'June – September 2025')` |
| `proofs` : bande « En bref » | 230 | Remplacez un fait par un chiffre dès que vous l'avez, ex. `{ value: '60', label: L('membres au Club IA', 'AI Club members') }`. |
| `testimonials` : témoignages ou logos | 397 | Uniquement avec l'accord de la personne. La liste vide masque la section. |

## 3. CV : `cv/donnees.tex`

| Clé | Ligne | Exemple |
|---|---|---|
| `dispo` / `dispoEN` | 21 / 27 | `Stage de 6 mois à partir de janvier 2027, remote possible` |
| `objectifFS`, `objectifDS`, `objectifEN` | 24, 25, 29 | Pré-remplis d'après votre texte (« un stage ou un premier poste ») : à ajuster |
| `inovMois` / `inovMoisEN` | 32 / 33 | `juin – septembre` |
| `inovEndpoints` | 34 | `25` |
| `inovUtilisateurs` | 35 | `150` |
| `inovDeploiement` / `inovDeploiementEN` | 36 / 37 | `moins de 10 minutes` |
| `inovTests` | 38 | `80` (couverture de tests, en %) |
| `cnnImages`, `cnnClasses`, `cnnPrecision` | 41 à 43 | `20 000`, `15`, `94` |
| `roleIMSP` / `roleIMSPEN` | 44 / 45 | `développeur full-stack principal` |
| `imspChiffre` / `imspChiffreEN` | 46 / 47 | `40 pages de contenu` |
| `roleRH` / `roleRHEN` | 48 / 49 | `développeur principal` |
| `rhPublications` | 50 | `120` |
| `stockmairieCitable` | 53 | `oui` : sans cette valeur, StockMairie **n'apparaît pas** dans le CV final |
| `stockmairieRole` / `stockmairieRoleEN`, `stockmairieUtilisateurs` | 54 à 56 | `conception et développement complet`, `12` |
| `clubMembres`, `clubSessions`, `clubEvenements` | 59 à 61 | `60`, `12`, `3` |
| `promoEffectif` | 62 | `35` |
| `langagesSecondaires` | 66 | Videz `{}` pour retirer Java et C++ |
| `anglaisCertif` / `anglaisAnnee` | 67 / 69 | Nom exact du certificat, organisme, `2024` |

Les `\TODO` correspondants se trouvent dans `cv/contenu-fr.tex` (22) et `cv/contenu-en.tex` (20). Pour les lister avec leurs lignes : `grep -n '\\TODO' cv/contenu-*.tex`.

## 4. Pistes trouvées dans vos dépôts GitHub (non utilisées, à valider)

- **Technologies présentes dans vos dépôts mais absentes de votre liste :** TypeScript, Tailwind CSS, PyTorch, FastAPI, XGBoost, SHAP, Redis, Nginx. Ajoutez-les aux compétences seulement si vous savez en parler en entretien.
- **Banque d'épreuves :** le README du dépôt parle d'une API Django REST avec PostgreSQL, Redis et PyTorch (Neural Collaborative Filtering), alors que votre CV dit scikit-learn et Pandas. Choisissez la version qui reflète votre travail.
- **Travaux clients privés (SARESKA, LUXDEVALL) :** non publiés. Ils peuvent devenir une carte anonymisée avec l'accord des clients.
