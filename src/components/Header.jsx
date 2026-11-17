import { useEffect, useRef, useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { Link, useRouter } from '../router.jsx'
import { ui } from '../i18n.js'
import Icon from './Icon.jsx'

const NAV = [
  { to: 'projets', key: 'projects' },
  { to: 'services', key: 'services' },
  { to: 'competences', key: 'skills' },
  { to: 'parcours', key: 'journey' },
  { to: 'contact', key: 'contact' },
]

export default function Header() {
  const { t, theme, toggleTheme, toggleLang } = useApp()
  const { key } = useRouter()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

  // Le menu se ferme à chaque changement de page
  useEffect(() => setOpen(false), [key])

  // Échap ferme le menu et rend le focus au bouton
  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    const onResize = () => window.innerWidth >= 900 && setOpen(false)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <Link to="" className="brand" aria-label={`Rachidi IDONIYI, ${t(ui.nav.home)}`}>
          Rachidi <span>IDONIYI</span>
        </Link>

        <nav className="nav-desktop" aria-label={t(ui.nav.main)}>
          <ul>
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{t(ui.nav[n.key])}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="controls">
          <button type="button" className="ctrl ctrl--text" onClick={toggleLang} aria-label={t(ui.lang.label)}>
            {t(ui.lang.other)}
          </button>
          <button
            type="button"
            className="ctrl"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t(ui.theme.toLight) : t(ui.theme.toDark)}
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
          </button>
          <button
            ref={toggleRef}
            type="button"
            className="ctrl ctrl--menu"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? t(ui.nav.close) : t(ui.nav.menu)}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div id="menu-mobile" className="mobile-menu" hidden={!open}>
        <nav className="wrap" aria-label={t(ui.nav.main)}>
          <ul>
            <li>
              <Link to="">{t(ui.nav.home)}</Link>
            </li>
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to}>{t(ui.nav[n.key])}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
