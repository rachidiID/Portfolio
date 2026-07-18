import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { profile } from '../data/profile.js'

const navLinks = [
  { to: '/about', key: 'about' },
  { to: '/education', key: 'education' },
  { to: '/projects', key: 'projects' },
  { to: '/experience', key: 'experience' },
  { to: '/contact', key: 'contact' },
]

export default function Footer() {
  const { lang } = useApp()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h4>{profile.name}</h4>
            <p>{pick(ui.footer.tagline, lang)}</p>
            <div className="footer__socials">
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
          </div>

          <div>
            <h4>{pick(ui.footer.nav, lang)}</h4>
            <div className="footer__links">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to}>{pick(ui.nav[l.key], lang)}</Link>
              ))}
            </div>
          </div>

          <div>
            <h4>{pick(ui.footer.contact, lang)}</h4>
            <ul className="footer__contact">
              <li><i className="fa-solid fa-envelope" /> {profile.email}</li>
              <li><i className="fa-solid fa-phone" /> {profile.phone}</li>
              <li><i className="fa-solid fa-location-dot" /> {pick(profile.location, lang)}</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          © {year} {profile.name}. {pick(ui.footer.rights, lang)}
        </div>
      </div>
    </footer>
  )
}
