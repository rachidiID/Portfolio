import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import { statusLabels } from '../data/projects.js'

export default function ProjectCard({ project }) {
  const { lang } = useApp()
  const status = statusLabels[project.status] || statusLabels.done

  return (
    <article className="card project reveal">
      <div className="project__top">
        <div className="project__icon"><i className={project.icon} /></div>
        <span className={`status ${status.tone}`}>
          <i className="fa-solid fa-circle" /> {pick(status.label, lang)}
        </span>
      </div>

      <div className="project__body">
        <span className="project__context">{pick(project.context, lang)}</span>
        <h3>{pick(project.title, lang)}</h3>

        <p className="project__impact">
          <b>{pick(ui.projects.impactLabel, lang)} — </b>
          {pick(project.impact, lang)}
        </p>

        <p className="project__desc">{pick(project.description, lang)}</p>

        <ul className="project__highlights">
          {project.highlights.map((h, i) => (
            <li key={i}><i className="fa-solid fa-check" /> {pick(h, lang)}</li>
          ))}
        </ul>

        <div className="project__tags">
          {project.tags.map((t, i) => (
            <span key={i} className="chip">{pick(t, lang)}</span>
          ))}
        </div>

        <div className="project__links">
          {project.links?.demo && (
            <a className="primary" href={project.links.demo} target="_blank" rel="noopener noreferrer">
              <i className="fa-solid fa-arrow-up-right-from-square" /> {pick(ui.actions.demo, lang)}
            </a>
          )}
          {project.links?.github && (
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github" /> {pick(ui.actions.code, lang)}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
