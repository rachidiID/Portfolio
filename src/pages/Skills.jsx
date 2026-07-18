import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { skillGroups, softSkills } from '../data/education.js'
import PageHeader from '../components/PageHeader.jsx'

export default function Skills() {
  const { lang } = useApp()

  return (
    <>
      <PageHeader title={pick(ui.skills.title, lang)} subtitle={pick(ui.skills.subtitle, lang)} />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="skill-groups">
            {skillGroups.map((g, i) => (
              <div className="card skill-group reveal" key={i}>
                <div className="skill-group__head">
                  <i className={g.icon} />
                  <h3>{pick(g.title, lang)}</h3>
                </div>
                <div className="skill-list">
                  {g.skills.map((s, j) => <span key={j} className="chip">{pick(s, lang)}</span>)}
                </div>
              </div>
            ))}
          </div>

          <div className="section-head reveal" style={{ marginTop: 64 }}>
            <span className="eyebrow">{pick(ui.skills.soft, lang)}</span>
          </div>
          <div className="feature-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            {softSkills.map((s, i) => (
              <div className="card feature reveal" key={i} style={{ textAlign: 'center' }}>
                <div className="feature__ic" style={{ margin: '0 auto 14px' }}><i className={s.icon} /></div>
                <h4 style={{ fontSize: '0.98rem' }}>{pick(s.label, lang)}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
