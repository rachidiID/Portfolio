import { useState, useMemo } from 'react'
import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { projects, projectFilters } from '../data/projects.js'
import PageHeader from '../components/PageHeader.jsx'
import ProjectCard from '../components/ProjectCard.jsx'
import Cta from '../components/Cta.jsx'

export default function Projects() {
  const { lang } = useApp()
  const [filter, setFilter] = useState('all')

  const list = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  )

  return (
    <>
      <PageHeader title={pick(ui.projects.title, lang)} subtitle={pick(ui.projects.subtitle, lang)} />

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div className="filter-bar reveal">
            {projectFilters.map((f) => (
              <button
                key={f.key}
                className={`filter-btn ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                <i className={f.icon} /> {pick(f.label, lang)}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {list.map((p) => <ProjectCard key={p.id} project={p} />)}
          </div>

          <div className="section" style={{ paddingBottom: 0 }}>
            <Cta title={pick(ui.home.ctaTitle, lang)} text={pick(ui.home.ctaText, lang)} />
          </div>
        </div>
      </section>
    </>
  )
}
