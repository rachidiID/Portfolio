import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { profile } from '../data/profile.js'
import { ThemeToggle, LangToggle } from './Controls.jsx'

const links = [
  { to: '/', key: 'home', icon: 'fa-solid fa-house' },
  { to: '/about', key: 'about', icon: 'fa-solid fa-user' },
  { to: '/education', key: 'education', icon: 'fa-solid fa-graduation-cap' },
  { to: '/skills', key: 'skills', icon: 'fa-solid fa-code' },
  { to: '/projects', key: 'projects', icon: 'fa-solid fa-laptop-code' },
  { to: '/experience', key: 'experience', icon: 'fa-solid fa-briefcase' },
  { to: '/contact', key: 'contact', icon: 'fa-solid fa-envelope' },
]

export default function Navbar() {
  const { lang } = useApp()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <NavLink to="/" className="navbar__logo" end>
          <span className="mark">{profile.shortName}</span>
          <span className="who">
            Rachidi IDONIYI
            <small>{pick(profile.role, lang)}</small>
          </span>
        </NavLink>

        <nav className="navbar__links" aria-label="Navigation principale">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              {pick(ui.nav[l.key], lang)}
            </NavLink>
          ))}
        </nav>

        <div className="navbar__actions">
          <LangToggle />
          <ThemeToggle />
          <button
            className="icon-btn nav-toggle"
            onClick={() => setOpen(true)}
            aria-label={pick(ui.actions.menu, lang)}
          >
            <i className="fa-solid fa-bars" />
          </button>
        </div>
      </div>

      <div className={`drawer-backdrop ${open ? 'open' : ''}`} onClick={() => setOpen(false)} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="drawer__head">
          <h3>{pick(ui.actions.menu, lang)}</h3>
          <button className="icon-btn" onClick={() => setOpen(false)} aria-label="Fermer">
            <i className="fa-solid fa-xmark" />
          </button>
        </div>
        <nav className="drawer__links">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'}>
              <i className={l.icon} />
              {pick(ui.nav[l.key], lang)}
            </NavLink>
          ))}
        </nav>
        <div className="drawer__footer">
          <a className="social-btn" href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in" />
          </a>
          <a className="social-btn" href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fa-brands fa-github" />
          </a>
          <a className="social-btn" href={profile.socials.huggingface} target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
            <i className="fa-solid fa-robot" />
          </a>
        </div>
      </aside>
    </header>
  )
}
