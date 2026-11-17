import { useApp } from '../context/AppContext.jsx'
import { ui } from '../i18n.js'
import { config } from '../data/site.js'
import Icon from './Icon.jsx'

export default function Footer() {
  const { t } = useApp()
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p>
          © 2026 {config.name} · {t(config.location)}
        </p>
        <p>
          {t(ui.footer.made)}{' '}
          <a href={config.repo} target="_blank" rel="noopener noreferrer">
            {t(ui.footer.source)}
            <span className="sr-only"> {t(ui.newTab)}</span>
          </a>{' '}
          · {t(ui.footer.updated)}
        </p>
        <a href="#accueil" className="site-footer__top">
          <Icon name="arrowUp" size={18} /> {t(ui.footer.top)}
        </a>
      </div>
    </footer>
  )
}
