import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { profile } from '../data/profile.js'
import { aboutIntro, missionText } from '../data/about.js'
import { values } from '../data/education.js'
import PageHeader from '../components/PageHeader.jsx'
import portrait from '../assets/profile.webp'

export default function About() {
  const { lang } = useApp()

  return (
    <>
      <PageHeader title={pick(ui.about.title, lang)} subtitle={pick(ui.about.subtitle, lang)} />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="about-grid">
            {/* Profile card */}
            <aside className="card about-card reveal">
              <div className="about-card__img">
                <img src={portrait} alt={profile.name} width="640" height="640" />
              </div>
              <div className="about-card__body">
                <h2>{profile.name}</h2>
                <p className="about-card__role">{pick(profile.role, lang)}</p>
                <div className="about-detail"><i className="fa-solid fa-envelope" /> {profile.email}</div>
                <div className="about-detail"><i className="fa-solid fa-phone" /> {profile.phone}</div>
                <div className="about-detail"><i className="fa-solid fa-location-dot" /> {pick(profile.location, lang)}</div>
                <div className="about-detail"><i className="fa-solid fa-circle-check" /> {pick(ui.about.available, lang)}</div>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 18 }}>
                  <i className="fa-solid fa-envelope" /> {pick(ui.actions.contact, lang)}
                </Link>
              </div>
            </aside>

            {/* Text */}
            <div>
              <div className="about-block reveal">
                <h3><i className="fa-solid fa-user-graduate" /> {pick(ui.about.who, lang)}</h3>
                {aboutIntro.map((p, i) => <p key={i}>{pick(p, lang)}</p>)}
              </div>

              <div className="about-block reveal">
                <h3><i className="fa-solid fa-bullseye" /> {pick(ui.about.mission, lang)}</h3>
                <p>{pick(missionText, lang)}</p>
              </div>

              <div className="about-block reveal">
                <h3><i className="fa-solid fa-heart" /> {pick(ui.about.values, lang)}</h3>
                <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
                  {values.map((v, i) => (
                    <div className="card feature" key={i} style={{ padding: '20px' }}>
                      <div className="feature__ic" style={{ width: 42, height: 42, fontSize: '1.1rem', marginBottom: 12 }}><i className={v.icon} /></div>
                      <h4 style={{ fontSize: '1rem' }}>{pick(v.title, lang)}</h4>
                      <p>{pick(v.text, lang)}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
