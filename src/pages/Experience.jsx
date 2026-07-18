import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { experiences, strengths } from '../data/experience.js'
import PageHeader from '../components/PageHeader.jsx'

export default function Experience() {
  const { lang } = useApp()

  return (
    <>
      <PageHeader title={pick(ui.experience.title, lang)} subtitle={pick(ui.experience.subtitle, lang)} />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="timeline">
            {experiences.map((xp) => (
              <div className={`tl-item ${xp.current ? 'current' : ''} reveal`} key={xp.id}>
                <div className="tl-dot"><i className={xp.icon} /></div>
                <div className="card tl-card">
                  <div className="tl-head">
                    <span className="tl-period">{pick(xp.period, lang)}</span>
                    <span className="tl-type">· {pick(xp.type, lang)}</span>
                  </div>
                  <h3>{pick(xp.role, lang)}</h3>
                  <div className="tl-org"><i className="fa-solid fa-location-dot" /> {xp.org}</div>
                  <p className="tl-summary">{pick(xp.summary, lang)}</p>
                  <ul className="tl-list">
                    {xp.achievements.map((a, i) => (
                      <li key={i}><i className="fa-solid fa-check" /> {pick(a, lang)}</li>
                    ))}
                  </ul>
                  <div className="tl-tags">
                    {xp.tags.map((t, i) => <span key={i} className="chip">{pick(t, lang)}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" style={{ background: 'var(--bg-elevated)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">{pick(ui.experience.strengthsTitle, lang)}</span>
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
    </>
  )
}
