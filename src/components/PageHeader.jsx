import { Link } from 'react-router-dom'
import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'

export default function PageHeader({ title, subtitle }) {
  const { lang } = useApp()
  return (
    <section className="page-head">
      <div className="container">
        <div className="breadcrumb reveal">
          <Link to="/">{pick(ui.nav.home, lang)}</Link>
          <i className="fa-solid fa-chevron-right" style={{ fontSize: '0.6rem' }} />
          <span>{title}</span>
        </div>
        <h1 className="reveal">{title}</h1>
        {subtitle ? <p className="reveal">{subtitle}</p> : null}
      </div>
    </section>
  )
}
