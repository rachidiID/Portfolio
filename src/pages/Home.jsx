import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { profile } from '../data/profile.js'
import { projects } from '../data/projects.js'
import { strengths } from '../data/experience.js'
import ProjectCard from '../components/ProjectCard.jsx'
import Cta from '../components/Cta.jsx'
import portrait from '../assets/profile.webp'

export default function Home() {
  const { lang } = useApp()
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__text reveal">
            <span className="hero__eyebrow">
              <span className="dot" /> {pick(ui.home.eyebrow, lang)}
            </span>
            <h1>
              {pick(ui.home.greeting, lang)}<br />
              <span className="accent">Rachidi Adébissi IDONIYI</span>
            </h1>
            <p className="hero__role">{pick(profile.role, lang)}</p>
            <p className="hero__tagline">{pick(profile.tagline, lang)}</p>

            <ul className="hero__highlights">
              {profile.highlights.map((h, i) => (
                <li key={i}><i className={h.icon} /> {pick(h.label, lang)}</li>
              ))}
            </ul>

            <div className="hero__cta">
              <Link to="/projects" className="btn btn-primary">
                <i className="fa-solid fa-laptop-code" /> {pick(ui.actions.projects, lang)}
              </Link>
              <a className="btn btn-outline" href={`${import.meta.env.BASE_URL}${profile.cv}`} target="_blank" rel="noopener noreferrer">
                <i className="fa-solid fa-download" /> {pick(ui.actions.cv, lang)}
              </a>
            </div>

            <div className="hero__socials">
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

          <div className="hero__portrait reveal">
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img src={portrait} alt={profile.name} width="720" height="900" />
              <div className="portrait-badge">
                <span className="pb-ic"><i className="fa-solid fa-graduation-cap" /></span>
                <span>
                  <b>Master 1 Data Science</b>
                  <small>IMSP — Dangbo, Bénin</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAT BAND */}
      <section className="stat-band">
        <div className="container">
          <div className="stat-band__grid">
            {profile.stats.map((s, i) => (
              <div className="stat reveal" key={i}>
                <b>{s.value}</b>
                <span>{pick(s.label, lang)}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{pick(ui.home.featuredEyebrow, lang)}</span>
            <h2>{pick(ui.home.featuredTitle, lang)}</h2>
            <p>{pick(ui.home.featuredSubtitle, lang)}</p>
          </div>
          <div className="projects-grid">
            {featured.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }} className="reveal">
            <Link to="/projects" className="btn btn-outline">
              <i className="fa-solid fa-arrow-right" /> {pick(ui.home.allProjects, lang)}
            </Link>
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="section section--tight" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{pick(ui.home.strengthsEyebrow, lang)}</span>
            <h2>{pick(ui.home.strengthsTitle, lang)}</h2>
          </div>
          <div className="feature-grid">
            {strengths.map((s, i) => (
              <div className="card feature reveal" key={i}>
                <div className="feature__ic"><i className={s.icon} /></div>
                <h4>{pick(s.title, lang)}</h4>
                <p>{pick(s.text, lang)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <Cta title={pick(ui.home.ctaTitle, lang)} text={pick(ui.home.ctaText, lang)} />
        </div>
      </section>
    </>
  )
}
