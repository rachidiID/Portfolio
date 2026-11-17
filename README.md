# Portfolio — Rachidi Adébissi IDONIYI

Portfolio de Rachidi Adébissi IDONIYI, développeur full-stack (Django, React) et data scientist.
Le site est une page unique, bilingue FR/EN, avec un thème clair et un thème sombre, publiée sur GitHub Pages.

En ligne : https://rachidiid.github.io/Portfolio/

## Stack

- React 18 et Vite 5, sans routeur : une seule page avec des ancres.
- CSS maison ; icônes en SVG inline ; polices auto-hébergées (Fraunces, IBM Plex Sans, licence SIL OFL).
- Aucune dépendance d'interface ni aucun CDN.
- CV en LaTeX dans `cv/`.

## Modifier le contenu

| Fichier | Contenu |
|---|---|
| `src/data/site.js` | Tout le contenu du site : identité, contact, projets, services, compétences, parcours. Une valeur vide est masquée. |
| `src/i18n.js` | Libellés d'interface (menus, boutons). |
| `cv/donnees.tex` | Données du CV (chiffres, disponibilité…). |
| `TODO_A_COMPLETER.md` | Liste des données encore vides, avec l'emplacement de chaque champ et un exemple. |

## Commandes

```bash
npm install       # une seule fois
npm run dev       # développement : http://localhost:5173/Portfolio/
npm run build     # build de production dans dist/
npm run preview   # tester le build : http://localhost:4173/Portfolio/
./cv/build.sh     # recompiler les CV (LaTeX), copiés ensuite dans public/assets/
```

## Déploiement

Chaque `push` sur `main` déclenche `.github/workflows/deploy.yml`, qui construit le site et le publie sur GitHub Pages.
Réglage à faire une seule fois dans le dépôt : **Settings → Pages → Source = GitHub Actions**.

Le site est servi sous `/Portfolio/` (option `base` dans `vite.config.js`). Les chemins du HTML utilisent `%BASE_URL%` et ceux du code `import.meta.env.BASE_URL`.

La version précédente du site est conservée sous le tag `v1-avant-refonte`.
