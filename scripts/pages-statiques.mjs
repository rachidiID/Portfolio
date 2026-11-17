// Après « vite build » : crée une copie de index.html pour chaque page
// (dist/projets/index.html, …) avec son propre titre, sa description et son
// adresse canonique, plus un 404.html. GitHub Pages sert ainsi chaque adresse
// directement (statut 200), ce qui marche aussi pour les liens partagés et Google.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'

const SITE = 'https://rachidiid.github.io/Portfolio/'
const NAME = 'Rachidi Adébissi IDONIYI'
const dist = new URL('../dist/', import.meta.url)
const html = readFileSync(new URL('index.html', dist), 'utf8')

const pages = [
  {
    route: 'projets',
    title: 'Projets',
    description:
      "Projets de Rachidi Adébissi IDONIYI : Data for Earth, détection de maladies des plantes (CNN), ResearchHub, StockMairie, site de l'IMSP et autres applications web et data science.",
  },
  {
    route: 'services',
    title: 'Services',
    description:
      'Développement web (Django, React), applications de gestion et projets de data science et machine learning, pour entreprises, institutions et porteurs de projets.',
  },
  {
    route: 'competences',
    title: 'Compétences',
    description:
      'Compétences de Rachidi Adébissi IDONIYI : Python, Django, Django REST Framework, React, PostgreSQL, Docker, scikit-learn, TensorFlow et Keras.',
  },
  {
    route: 'parcours',
    title: 'Parcours',
    description:
      "Parcours de Rachidi Adébissi IDONIYI : Master 2 TIC option Data Science à l'IMSP-UAC, stage de développeur backend chez Inov Services, coordonnateur du Club IA.",
  },
  {
    route: 'contact',
    title: 'Contact',
    description: 'Contacter Rachidi Adébissi IDONIYI par WhatsApp, e-mail ou LinkedIn, et télécharger son CV en PDF.',
  },
]

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

function page({ title, description, url, noindex = false }) {
  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
    .replace(/(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta\s+property="og:title"\s+content=")[^"]*(")/, `$1${esc(title)}$2`)
    .replace(/(<meta\s+property="og:description"\s+content=")[^"]*(")/, `$1${esc(description)}$2`)
    .replace(/(<meta\s+name="twitter:title"\s+content=")[^"]*(")/, `$1${esc(title)}$2`)
  if (url) {
    out = out
      .replace(/(<link\s+rel="canonical"\s+href=")[^"]*(")/, `$1${url}$2`)
      .replace(/(<meta\s+property="og:url"\s+content=")[^"]*(")/, `$1${url}$2`)
  }
  if (noindex) out = out.replace('<meta charset="UTF-8" />', '<meta charset="UTF-8" />\n    <meta name="robots" content="noindex" />')
  return out
}

for (const p of pages) {
  const dir = new URL(`${p.route}/`, dist)
  mkdirSync(dir, { recursive: true })
  writeFileSync(new URL('index.html', dir), page({ title: `${p.title} | ${NAME}`, description: p.description, url: `${SITE}${p.route}/` }))
}
writeFileSync(
  new URL('404.html', dist),
  page({ title: `Page introuvable | ${NAME}`, description: "Cette page n'existe pas.", noindex: true })
)
console.log(`Pages statiques : ${pages.map((p) => p.route).join(', ')} + 404.html`)
