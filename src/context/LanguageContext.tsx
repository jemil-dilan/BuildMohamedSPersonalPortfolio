import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

type Lang = 'fr' | 'en'

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (s: { fr: string; en: string }) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectLang(): Lang {
  const stored = localStorage.getItem('lang')
  if (stored === 'fr' || stored === 'en') return stored
  const nav = navigator.language || ''
  return nav.startsWith('fr') ? 'fr' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try { return detectLang() } catch { return 'fr' }
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    try { localStorage.setItem('lang', l) } catch {}
    document.documentElement.lang = l
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = (s: { fr: string; en: string }) => s[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
