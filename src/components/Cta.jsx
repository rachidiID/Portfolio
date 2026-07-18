import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { profile } from '../data/profile.js'

export default function Cta({ title, text }) {
  const { lang } = useApp()
  return (
    <div className="cta reveal">
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="hero__cta" style={{ justifyContent: 'center', marginTop: 0 }}>
        <Link to="/contact" className="btn btn-primary">
          <i className="fa-solid fa-envelope" /> {pick(ui.actions.contact, lang)}
        </Link>
        <a className="btn btn-outline" href={profile.socials.github} target="_blank" rel="noopener noreferrer">
          <i className="fa-brands fa-github" /> {pick(ui.actions.viewGithub, lang)}
        </a>
      </div>
    </div>
  )
}
