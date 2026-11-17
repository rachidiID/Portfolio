import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { pick } from '../i18n.js'

const AppContext = createContext(null)

const read = (key) => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}
const write = (key, value) => {
  try {
    localStorage.setItem(key, value)
  } catch {
    /* stockage indisponible (navigation privée) : on ignore */
  }
}

const systemDark = () => typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: dark)').matches

export function AppProvider({ children }) {
  // Langue : français par défaut, choix mémorisé
  const [lang, setLang] = useState(() => (read('lang') === 'en' ? 'en' : 'fr'))
  // Thème : suit le système tant que l'utilisateur n'a rien choisi
  const [stored, setStored] = useState(() => {
    const t = read('theme')
    return t === 'light' || t === 'dark' ? t : null
  })
  const [system, setSystem] = useState(systemDark() ? 'dark' : 'light')
  const theme = stored ?? system

  useEffect(() => {
    const mq = window.matchMedia?.('(prefers-color-scheme: dark)')
    if (!mq) return
    const onChange = (e) => setSystem(e.matches ? 'dark' : 'light')
    mq.addEventListener?.('change', onChange)
    return () => mq.removeEventListener?.('change', onChange)
  }, [])

  useEffect(() => {
    const root = document.documentElement
    if (stored) root.setAttribute('data-theme', stored)
    else root.removeAttribute('data-theme')
  }, [stored])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleTheme = useCallback(() => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setStored(next)
    write('theme', next)
  }, [theme])

  const toggleLang = useCallback(() => {
    setLang((l) => {
      const next = l === 'fr' ? 'en' : 'fr'
      write('lang', next)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({ lang, t: (v) => pick(v, lang), theme, toggleTheme, toggleLang }),
    [lang, theme, toggleTheme, toggleLang]
  )
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp doit être utilisé dans <AppProvider>')
  return ctx
}
