import { useApp } from './context/AppContext.jsx'
import { ui } from './i18n.js'
import { useReveal } from './hooks/useReveal.js'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import { Hero, Proofs, Projects, Services, Skills, Journey, Contact } from './components/Sections.jsx'

export default function App() {
  const { t } = useApp()
  useReveal()
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
