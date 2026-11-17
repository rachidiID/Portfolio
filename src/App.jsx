import { useEffect } from 'react'
import { useApp } from './context/AppContext.jsx'
import { ui } from './i18n.js'
import { useReveal } from './hooks/useReveal.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Hero, Proofs, Projects, Services, Skills, Journey, Contact } from './components/Sections.jsx'

export default function App() {
  const { t } = useApp()
  useReveal()

  // Lien direct vers une section (ex. …/Portfolio/#contact) : le contenu étant
  // rendu par React après le chargement, on fait défiler une fois la page prête.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    const el = id && document.getElementById(id)
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: 'instant', block: 'start' }))
  }, [])
  return (
    <>
      <a className="skip-link" href="#main">
        {t(ui.skip)}
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Proofs />
        <Projects />
        <Services />
        <Skills />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
