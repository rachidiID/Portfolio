import { useEffect, useRef, useState } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { ui } from '../i18n.js'
import Icon from './Icon.jsx'

export const SECTIONS = [
  { id: 'projets', key: 'projects' },
  { id: 'services', key: 'services' },
  { id: 'competences', key: 'skills' },
  { id: 'parcours', key: 'journey' },
  { id: 'contact', key: 'contact' },
]

export default function Header() {
  const { t, theme, toggleTheme, toggleLang } = useApp()
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)

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

  const links = (onClick) =>
    SECTIONS.map((s) => (
      <li key={s.id}>
        <a href={`#${s.id}`} onClick={onClick}>
          {t(ui.nav[s.key])}
        </a>
      </li>
    ))

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a href="#accueil" className="brand">
          Rachidi <span>Idoniyi</span>
        </a>

        <nav className="nav-desktop" aria-label={t(ui.nav.main)}>
          <ul>{links()}</ul>
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
          <ul>{links(() => setOpen(false))}</ul>
        </nav>
      </div>
    </header>
  )
}
