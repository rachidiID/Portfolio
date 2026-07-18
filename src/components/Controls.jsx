import { useApp } from '../context/AppContext.jsx'
import { ui, pick } from '../i18n'
import Flag from './Flag.jsx'

export function ThemeToggle() {
  const { theme, toggleTheme, lang } = useApp()
  return (
    <button
      className="icon-btn"
      onClick={toggleTheme}
      aria-label={pick(ui.actions.switchTheme, lang)}
      title={pick(ui.actions.switchTheme, lang)}
    >
      <i className={theme === 'light' ? 'fa-solid fa-moon' : 'fa-solid fa-sun'} />
    </button>
  )
}

export function LangToggle() {
  const { lang, toggleLang } = useApp()
  // On affiche le drapeau de la langue ACTIVE + son code.
  const country = lang === 'fr' ? 'FR' : 'GB'
  const label = lang === 'fr' ? 'FR' : 'EN'
  return (
    <button
      className="icon-btn lang-btn"
      onClick={toggleLang}
      aria-label={pick(ui.actions.switchLang, lang)}
      title={pick(ui.actions.switchLang, lang)}
    >
      <Flag country={country} size={20} title={label} />
      <span className="lang-code">{label}</span>
    </button>
  )
}
