import { LanguageProvider } from './context/LanguageContext'
import Nav from './components/Nav'
import Hero from './components/Hero'
import CredibilityStrip from './components/CredibilityStrip'
import Intro from './components/Intro'
import WorkSection from './components/Work/WorkSection'
import HowIWork from './components/HowIWork'
import StackMap from './components/StackMap'
import Experience from './components/Experience'
import Teaching from './components/Teaching'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-full bg-paper">
        <Nav />
        <main>
          <Hero />
          <CredibilityStrip />
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
    </LanguageProvider>
  )
}
