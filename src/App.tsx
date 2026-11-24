import { MotionConfig } from "motion/react"
import { LanguageProvider, useLang } from "./context/LanguageContext"
import { strings } from "./data/i18n"
import SEOHead from "./components/SEOHead"
import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import WorkSection from "./components/Work/WorkSection"
import HowIWork from "./components/HowIWork"
import StackMap from "./components/StackMap"
import Experience from "./components/Experience"
import Teaching from "./components/Teaching"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function Page() {
  const { t } = useLang()

  return (
    <div className="min-h-full bg-board">
      <SEOHead />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[100] focus:bg-chalk focus:px-3 focus:py-2 focus:font-cond focus:text-[13px] focus:uppercase focus:tracking-[0.1em] focus:text-ink"
      >
        {t(strings.nav.skip)}
      </a>
      <Nav />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Intro />
        <WorkSection />
        <HowIWork />
        <StackMap />
        <Experience />
        <Teaching />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <MotionConfig reducedMotion="user">
        <Page />
      </MotionConfig>
    </LanguageProvider>
  )
}
