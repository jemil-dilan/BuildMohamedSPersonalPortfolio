import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react"

type Lang = "fr" | "en"

interface LanguageContextValue {
  lang: Lang
  setLang: (l: Lang) => void
  t: (s: { fr: string; en: string }) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function fromUrl(): Lang | null {
  try {
    const q = new URLSearchParams(window.location.search).get("lang")
    return q === "fr" || q === "en" ? q : null
  } catch {
    return null
  }
}

function detectLang(): Lang {
  const url = fromUrl()
  if (url) return url
  try {
    const stored = localStorage.getItem("lang")
    if (stored === "fr" || stored === "en") return stored
  } catch {}
  const nav = (navigator.language || "").toLowerCase()
  return nav.startsWith("en") ? "en" : "fr"
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      return detectLang()
    } catch {
      return "fr"
    }
  })

  const setLang = (l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem("lang", l)
    } catch {}
    try {
      const url = new URL(window.location.href)
      if (l === "fr") url.searchParams.delete("lang")
      else url.searchParams.set("lang", l)
      window.history.replaceState(null, "", url.toString())
    } catch {}
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
  if (!ctx) throw new Error("useLang must be used within LanguageProvider")
  return ctx
}
