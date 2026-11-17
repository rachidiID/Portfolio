// Petit routeur sans dépendance : adresses propres sous /Portfolio/
// (ex. /Portfolio/projets/). Chaque page existe aussi en fichier statique
// après le build (scripts/pages-statiques.mjs), donc un lien direct marche.
import { createContext, useCallback, useContext, useEffect, useState } from 'react'

const BASE = import.meta.env.BASE_URL // '/Portfolio/'

export const PAGES = ['projets', 'services', 'competences', 'parcours', 'contact']

const routeOf = (pathname) => {
  const rest = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname
  return decodeURIComponent(rest.replace(/^\/+|\/+$/g, ''))
}

// Adresse d'une page : href('projets', 'cas-researchhub') -> /Portfolio/projets/#cas-researchhub
export const href = (route = '', hash = '') => `${BASE}${route ? `${route}/` : ''}${hash ? `#${hash}` : ''}`

const RouterContext = createContext(null)

export function Router({ children }) {
  const read = (extra = {}) => ({
    route: routeOf(window.location.pathname),
    hash: window.location.hash.slice(1),
    key: Date.now(),
    ...extra,
  })
  const [loc, setLoc] = useState(() => read({ initial: true }))

  useEffect(() => {
    const onPop = () => setLoc(read({ pop: true }))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const navigate = useCallback((url) => {
    const u = new URL(url, window.location.href)
    window.history.pushState(null, '', `${u.pathname}${u.search}${u.hash}`)
    setLoc(read())
  }, [])

  return <RouterContext.Provider value={{ ...loc, navigate }}>{children}</RouterContext.Provider>
}

export const useRouter = () => useContext(RouterContext)

// Lien interne : navigation sans rechargement, clic molette / Ctrl conservés.
export function Link({ to = '', hash = '', onClick, children, ...props }) {
  const { route, navigate } = useRouter()
  const url = href(to, hash)
  return (
    <a
      href={url}
      aria-current={!hash && route === to ? 'page' : undefined}
      onClick={(e) => {
        onClick?.(e)
        if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
        e.preventDefault()
        navigate(url)
      }}
      {...props}
    >
      {children}
    </a>
  )
}
