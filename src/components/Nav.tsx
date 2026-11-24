import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'
import TornEdge from './TornEdge'

const links = [
  { key: 'work', href: '#work', tilt: '-1.1deg' },
  { key: 'stack', href: '#stack', tilt: '0.7deg' },
  { key: 'exp', href: '#experience', tilt: '-0.5deg' },
  { key: 'teaching', href: '#teaching', tilt: '0.9deg' },
  { key: 'contact', href: '#contact', tilt: '-0.7deg' },
] as const

export default function Nav() {
  const { lang, setLang, t } = useLang()
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    const obs = new IntersectionObserver(
      entries => {
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { threshold: [0.12, 0.35, 0.6], rootMargin: '-22% 0px -48% 0px' },
    )
    ids.forEach(id => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="relative bg-board">
          <div className="mx-auto flex h-16 max-w-[1400px] items-center gap-3 px-4 sm:px-6">
            <a
              href="#top"
              aria-label={t(strings.nav.home)}
              className="flex h-9 -rotate-2 items-center bg-chalk px-2.5 font-display text-[13px] leading-none tracking-[-0.03em] text-ink shadow-[0_5px_12px_-6px_rgba(26,26,24,0.55)]"
            >
              MNJD
            </a>

            <nav aria-label="Sections" className="ml-2 hidden items-center gap-1.5 lg:flex">
              {links.map(l => {
                const on = active === l.href.slice(1)
                return (
                  <a
                    key={l.key}
                    href={l.href}
                    aria-current={on ? 'true' : undefined}
                    style={{ rotate: on ? '0deg' : l.tilt }}
                    className={`border px-3 py-2 font-cond text-[12px] uppercase leading-none tracking-[0.13em] transition-[transform,background-color,color,border-color] duration-200 hover:rotate-0 ${
                      on
                        ? 'border-red bg-red text-chalk'
                        : 'border-ink/15 bg-chalk/70 text-ink hover:bg-chalk'
                    }`}
                  >
                    {t(strings.nav[l.key])}
                  </a>
                )
              })}
            </nav>

            <div className="ml-auto flex items-center gap-2">
              <div
                className="flex border border-ink/20 bg-chalk/70"
                role="group"
                aria-label={t(strings.nav.langLabel)}
              >
                {(['fr', 'en'] as const).map(code => (
                  <button
                    key={code}
                    type="button"
                    onClick={() => setLang(code)}
                    aria-pressed={lang === code}
                    aria-label={code === 'fr' ? 'Français' : 'English'}
                    className={`px-2 py-1.5 font-label text-[11px] uppercase leading-none transition-colors duration-150 ${
                      lang === code ? 'bg-ink text-chalk' : 'text-ink-faint hover:text-ink'
                    }`}
                  >
                    {code}
                  </button>
                ))}
              </div>

              <a
                href="#contact"
                className="hidden bg-red px-3.5 py-2.5 font-cond text-[12px] uppercase leading-none tracking-[0.12em] text-chalk transition-transform duration-200 hover:-rotate-1 sm:inline-block"
              >
                {t(strings.nav.cta)}
              </a>

              <button
                type="button"
                onClick={() => setOpen(v => !v)}
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label={open ? t(strings.nav.close) : t(strings.nav.menu)}
                className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-ink/25 bg-chalk/70 lg:hidden"
              >
                <span
                  className={`block h-[2px] w-4 bg-ink transition-transform duration-200 ${
                    open ? 'translate-y-[7px] rotate-45' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] w-4 bg-ink transition-opacity duration-200 ${
                    open ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block h-[2px] w-4 bg-ink transition-transform duration-200 ${
                    open ? '-translate-y-[7px] -rotate-45' : ''
                  }`}
                />
              </button>
            </div>
          </div>
          <TornEdge color="var(--color-board)" lip={false} className="absolute inset-x-0 -bottom-5 h-5" />
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.16 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-board px-5 pb-10 pt-24"
          >
            <p className="max-w-[280px] font-cond text-[17px] uppercase leading-tight tracking-[0.08em] text-ink">
              {t(strings.hero.role)}
            </p>
            <nav aria-label="Sections" className="mt-7 flex flex-col gap-2.5">
              {links.map((l, i) => (
                <a
                  key={l.key}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{ rotate: i % 2 ? '0.8deg' : '-0.8deg' }}
                  className="flex items-baseline justify-between gap-3 bg-chalk px-4 py-3 font-display text-[24px] leading-none text-ink shadow-[0_8px_18px_-14px_rgba(26,26,24,0.7)]"
                >
                  {t(strings.nav[l.key])}
                  <span aria-hidden="true" className="font-label text-[12px] text-red">
                    →
                  </span>
                </a>
              ))}
            </nav>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-7 inline-block bg-red px-4 py-3 font-cond text-[14px] uppercase tracking-[0.14em] text-chalk"
            >
              {t(strings.nav.cta)}
            </a>
            <div className="mt-9 border-t border-ink/20 pt-4 font-label text-[10px] leading-relaxed tracking-[0.06em] text-ink-faint">
              nfonkmohamed@gmail.com
              <br />
              Bonaberi, Douala
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
