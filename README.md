# Portfolio — Rachidi Adébissi IDONIYI

Portfolio personnel (développeur web/mobile & data scientist), construit avec **React + Vite**,
bilingue **FR / EN**, thème clair/sombre, et déployé sur **GitHub Pages**.

🔗 En ligne : https://rachidiid.github.io/Portfolio/

## Stack

- **React 18** + **React Router** (HashRouter, compatible GitHub Pages)
- **Vite** (build statique)
- CSS « maison » (design system, aucune dépendance UI lourde)
- i18n interne (`src/i18n`) — tout le contenu est bilingue
- Drapeaux en **SVG inline** (rendu identique sur Windows/macOS/Linux)

## Démarrer en local

```bash
npm install     # une seule fois
npm run dev     # serveur de développement (http://localhost:5173)
npm run build   # build de production -> dist/
npm run preview # prévisualiser le build
```

## Modifier le contenu

Tout le contenu est centralisé dans `src/data/` (source unique de vérité) :

| Fichier | Contenu |
|---|---|
| `src/data/profile.js` | Identité, tagline, stats, réseaux |
| `src/data/projects.js` | Projets (impact, stack, liens) |
| `src/data/experience.js` | Expériences & points forts |
| `src/data/education.js` | Formation, compétences, valeurs |
| `src/data/about.js` | Textes « À propos » |
| `src/i18n/index.js` | Libellés d'interface (nav, boutons…) |

Chaque texte est un objet `L('français', 'english')`. Pour ajouter un projet, il suffit
d'ajouter un objet dans le tableau `projects`.

## Déploiement

Le déploiement est **automatique** via GitHub Actions (`.github/workflows/deploy.yml`) :
à chaque `push` sur `main`, le site est buildé et publié sur GitHub Pages.

> ⚙️ Réglage unique à faire dans le dépôt GitHub :
> **Settings → Pages → Build and deployment → Source = GitHub Actions**.

## Structure

```
src/
  assets/       photo de profil optimisée
  components/   Navbar, Footer, cartes, contrôles (thème/langue), drapeaux
  context/      contexte global (thème + langue, persistés)
  data/         contenu bilingue centralisé
  hooks/        animations au scroll
  i18n/         helper + libellés d'interface
  pages/        Accueil, Projets, Expérience, Parcours, Compétences, À propos, Contact
  styles/       design system CSS
```

L'ancien site statique (HTML/CSS/JS) est conservé dans `_legacy/` pour référence.
