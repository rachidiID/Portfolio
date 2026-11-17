import { useEffect, useRef } from 'react'
import { useApp } from './context/AppContext.jsx'
import { useRouter } from './router.jsx'
import { ui } from './i18n.js'
import { useReveal } from './hooks/useReveal.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {
  HomePage,
  ProjectsPage,
  ServicesPage,
  SkillsPage,
  JourneyPage,
  ContactPage,
  NotFoundPage,
} from './components/Sections.jsx'

const PAGES = {
  '': { Page: HomePage },
  projets: { Page: ProjectsPage, nav: 'projects' },
  services: { Page: ServicesPage, nav: 'services' },
  competences: { Page: SkillsPage, nav: 'skills' },
  parcours: { Page: JourneyPage, nav: 'journey' },
  contact: { Page: ContactPage, nav: 'contact' },
}

const SITE_TITLE = {
  fr: 'Rachidi Adébissi IDONIYI | Développeur Full-Stack & Data Scientist',
  en: 'Rachidi Adébissi IDONIYI | Full-Stack Developer & Data Scientist',
}

export default function App() {
  const { t, lang } = useApp()
  const { route, hash, key, initial, pop } = useRouter()
  const mainRef = useRef(null)
  const current = PAGES[route]
  const Page = current?.Page ?? NotFoundPage

  useReveal(route)

  // Titre de l'onglet
  useEffect(() => {
    if (route === '') document.title = SITE_TITLE[lang]
    else if (current) document.title = `${t(ui.nav[current.nav])} | Rachidi Adébissi IDONIYI`
    else document.title = `${t(ui.notFound.title)} | Rachidi Adébissi IDONIYI`
  }, [route, lang, current, t])

  // Après un changement de page : ancre éventuelle, sinon haut de page ;
  // le focus va au contenu pour les lecteurs d'écran.
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash))
    requestAnimationFrame(() => {
      if (target) target.scrollIntoView({ behavior: 'instant', block: 'start' })
      else if (!initial && !pop) window.scrollTo({ top: 0, behavior: 'instant' })
      if (!initial) mainRef.current?.focus({ preventScroll: true })
    })
  }, [key])

  return (
    <>
      <a className="skip-link" href="#main">
        {t(ui.skip)}
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Page key={route} />
      </main>
      <Footer />
    </>
  )
}
