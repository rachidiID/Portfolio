import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { education } from '../data/education.js'
import PageHeader from '../components/PageHeader.jsx'

export default function Education() {
  const { lang } = useApp()

  return (
    <>
      <PageHeader title={pick(ui.education.title, lang)} subtitle={pick(ui.education.subtitle, lang)} />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="timeline">
            {education.map((ed) => (
              <div className={`tl-item ${ed.featured ? 'current' : ''} reveal`} key={ed.id}>
                <div className="tl-dot"><i className={ed.icon} /></div>
                <div className="card tl-card">
                  <div className="tl-head">
                    <span className="tl-period">{ed.period}</span>
                    <span className={`status ${ed.tone}`}>{pick(ed.status, lang)}</span>
                  </div>
                  <h3>{pick(ed.degree, lang)}</h3>
                  <div className="tl-org"><i className="fa-solid fa-building-columns" /> {pick(ed.school, lang)}</div>
                  <p className="tl-summary">{pick(ed.description, lang)}</p>

                  <div className="subjects">
                    {ed.subjects.map((s, i) => <span key={i} className="subject">{pick(s, lang)}</span>)}
                  </div>

                  {ed.achievements.length > 0 && (
                    <>
                      <h5 style={{ fontSize: '0.85rem', color: 'var(--text-soft)', margin: '10px 0 8px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        {pick(ui.education.achievements, lang)}
                      </h5>
                      <ul className="tl-list">
                        {ed.achievements.map((a, i) => (
                          <li key={i}><i className="fa-solid fa-check" /> {pick(a, lang)}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
