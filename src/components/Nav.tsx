import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

const navLinks = [
  { key: 'work',    href: '#work' },
  { key: 'stack',   href: '#stack' },
  { key: 'exp',     href: '#experience' },
  { key: 'about',   href: '#about' },
  { key: 'contact', href: '#contact' },
] as const

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const obs = new IntersectionObserver(
      entries => {
        const hit = entries.find(e => e.isIntersecting)
        if (hit) setActive(hit.target.id)
      },
      { threshold: 0.25, rootMargin: '-64px 0px -40% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  const toggleLang = () => setLang(lang === 'fr' ? 'en' : 'fr')

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.38, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-paper/96 backdrop-blur-md border-b border-border'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            aria-label="Mohamed Nfonka — haut de page"
            className="font-display text-lg font-bold tracking-tight text-ink hover:text-accent transition-colors duration-200"
          >
            MNJD
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.map(link => {
              const isActive = active === link.href.slice(1)
              return (
                <a
                  key={link.key}
                  href={link.href}
                  className={`relative font-body text-[13px] transition-colors duration-200 py-1 ${
                    isActive ? 'text-ink font-medium' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {t(strings.nav[link.key as keyof typeof strings.nav] as { fr: string; en: string })}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-px bg-accent"
                    />
                  )}
                </a>
              )
            })}
          </div>

          {/* Right controls */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleLang}
              aria-label={t(strings.nav.langLabel)}
              className="font-mono text-[11px] text-ink-faint hover:text-ink border border-border hover:border-ink-faint rounded-sm px-2.5 py-1 transition-colors duration-200"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <a
              href="#contact"
              className="font-body text-[13px] font-medium bg-ink text-paper px-4 py-2 rounded-sm hover:bg-accent transition-colors duration-200"
            >
              {t(strings.nav.cta)}
            </a>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLang}
              aria-label={t(strings.nav.langLabel)}
              className="font-mono text-[11px] text-ink-faint border border-border rounded-sm px-2 py-1"
            >
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Fermer' : 'Menu'}
              className="flex flex-col justify-center gap-[5px] w-7 h-7 items-center"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-ink origin-center"
                transition={{ duration: 0.22 }}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                className="block w-5 h-[1.5px] bg-ink"
                transition={{ duration: 0.18 }}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-[1.5px] bg-ink origin-center"
                transition={{ duration: 0.22 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-paper flex flex-col"
          >
            <div className="pt-20 px-8 flex flex-col justify-between flex-1 pb-12">
              <nav className="flex flex-col gap-1 mt-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.key}
                    href={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMenuOpen(false)}
                    className="font-display text-4xl font-light text-ink hover:text-accent transition-colors py-2 border-b border-border"
                  >
                    {t(strings.nav[link.key as keyof typeof strings.nav] as { fr: string; en: string })}
                  </motion.a>
                ))}
              </nav>
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                onClick={() => setMenuOpen(false)}
                className="inline-block font-body text-sm font-medium bg-ink text-paper px-6 py-3 rounded-sm hover:bg-accent transition-colors self-start"
              >
                {t(strings.nav.cta)}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
