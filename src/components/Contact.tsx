import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

function buildEmail() {
  return ['nfonkmohamed', '@', 'gmail', '.', 'com'].join('')
}

export default function Contact() {
  const { lang, t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const s = strings.contact

  const rows = [
    {
      label: t(s.email),
      content: (
        <button
          onClick={() => { window.location.href = 'mailto:' + buildEmail() }}
          className="font-body text-[13px] text-ink hover:text-accent transition-colors text-left link-hover"
        >
          nfonkmohamed&#64;gmail&#46;com
        </button>
      ),
    },
    {
      label: t(s.phone),
      content: (
        <a href="tel:+237671018302" className="font-body text-[13px] text-ink hover:text-accent transition-colors">
          +237 671 01 83 02
        </a>
      ),
    },
    {
      label: 'LinkedIn',
      content: (
        <a
          href="https://www.linkedin.com/in/njoupouandom-nfonka-mohamed-jemil-dilan-a5204a3a2"
          target="_blank" rel="noopener noreferrer"
          className="font-body text-[13px] text-ink hover:text-accent transition-colors break-all link-hover"
        >
          linkedin.com/in/njoupouandom-nfonka-…
        </a>
      ),
    },
    {
      label: 'GitHub',
      content: (
        <a
          href="https://github.com/jemil-dilan"
          target="_blank" rel="noopener noreferrer"
          className="font-body text-[13px] text-ink hover:text-accent transition-colors link-hover"
        >
          github.com/jemil-dilan
        </a>
      ),
    },
    {
      label: t(s.location),
      content: <span className="font-body text-[13px] text-ink">{t(s.locationVal)}</span>,
    },
  ]

  return (
    <section ref={ref} id="contact" className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div>
          <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
            {t({ fr: '// contact', en: '// contact' })}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight mt-2"
          >
            {t(s.heading)}
          </motion.h2>
        </div>

        <div className="flex flex-col gap-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="font-body text-[15px] text-ink-muted leading-relaxed"
          >
            {t(s.body)}
          </motion.p>

          {/* Contact rows */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.18, duration: 0.35 }}
            className="rounded-lg border border-border overflow-hidden"
          >
            {rows.map(({ label, content }, i) => (
              <div
                key={label}
                className={`flex items-center gap-6 px-5 py-4 ${i < rows.length - 1 ? 'border-b border-border' : ''} hover:bg-surface transition-colors duration-150`}
              >
                <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wider w-20 shrink-0">
                  {label}
                </span>
                {content}
              </div>
            ))}
          </motion.div>

          {/* CV download */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.35 }}
          >
            <a
              href={lang === 'fr' ? '/cv-fr.pdf' : '/cv-en.pdf'}
              download
              className="inline-flex items-center gap-2.5 font-body text-sm font-medium border border-ink text-ink px-5 py-2.5 rounded-sm hover:bg-ink hover:text-paper transition-all duration-200"
            >
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                <path d="M6.5 1v8M3.5 6l3 3 3-3M1.5 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t(s.downloadCV)}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
