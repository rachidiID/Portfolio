import { createContext, useContext, useEffect, useState, useCallback } from 'react'

const AppContext = createContext(null)

const getInitialTheme = () => {
  if (typeof window === 'undefined') return 'light'
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const getInitialLang = () => {
  if (typeof window === 'undefined') return 'fr'
  const saved = localStorage.getItem('lang')
  if (saved === 'fr' || saved === 'en') return saved
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'fr'
}

export function AppProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [lang, setLang] = useState(getInitialLang)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    localStorage.setItem('lang', lang)
  }, [lang])

  const toggleTheme = useCallback(() => setTheme((t) => (t === 'light' ? 'dark' : 'light')), [])
  const toggleLang = useCallback(() => setLang((l) => (l === 'fr' ? 'en' : 'fr')), [])

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, toggleLang }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
