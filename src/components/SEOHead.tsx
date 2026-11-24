import { useEffect } from "react"
import { useLang } from "../context/LanguageContext"

export default function SEOHead() {
  const { lang } = useLang()

  const seo = {
    fr: {
      title:
        "Mohamed Nfonka — Développeur Backend Java & Spring Boot | Douala, Cameroun",
      description:
        "Développeur backend Java et Spring Boot à Douala, Cameroun. REST APIs, microservices, PostgreSQL. Ouvert aux opportunités internationales.",
      ogTitle: "Mohamed Nfonka — Développeur Backend Java & Spring Boot",
      ogDescription:
        "Développeur backend Java et Spring Boot à Douala, Cameroun. REST APIs, microservices, PostgreSQL. Ouvert aux opportunités internationales.",
    },
    en: {
      title:
        "Mohamed Nfonka — Java Backend Developer | Spring Boot | Douala, Cameroon",
      description:
        "Java Backend Developer in Douala, Cameroon. Spring Boot, REST APIs, microservices and PostgreSQL. Open to international opportunities.",
      ogTitle: "Mohamed Nfonka — Java Backend Developer | Spring Boot",
      ogDescription:
        "Java Backend Developer in Douala, Cameroon. Spring Boot, REST APIs, microservices and PostgreSQL. Open to international opportunities.",
    },
  }

  const current = seo[lang]

  useEffect(() => {
    // Update document title
    document.title = current.title

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute("content", current.description)
    }

    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute("content", current.ogTitle)
    }

    // Update Open Graph description
    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    )
    if (ogDescription) {
      ogDescription.setAttribute("content", current.ogDescription)
    }

    // Update og:locale
    const ogLocale = document.querySelector('meta[property="og:locale"]')
    if (ogLocale) {
      ogLocale.setAttribute("content", lang === "fr" ? "fr_CM" : "en_CM")
    }
  }, [lang, current])

  return null
}
