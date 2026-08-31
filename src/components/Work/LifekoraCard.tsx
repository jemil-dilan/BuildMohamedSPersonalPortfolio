import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { strings } from '../../data/i18n'

export default function LifekoraCard() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const s = strings.work.lifekora

  const stack = ['Java', 'Spring Boot', 'Spring Data JPA', 'PostgreSQL', 'REST APIs', 'Microservices']

  const domainNodes = [
    { fr: 'Donneur', en: 'Donor' },
    { fr: 'Éligibilité', en: 'Eligibility' },
    { fr: 'Matching', en: 'Match' },
    { fr: 'Rendez-vous', en: 'Appointment' },
    { fr: 'Collecteur', en: 'Collector' },
  ]

  return (
    <div ref={ref} className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300">
      {/* Header */}
      <div className="bg-surface border-b border-border px-7 py-5 flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-5">
          <span className="font-display text-5xl font-semibold text-border leading-none select-none mt-1">
            02
          </span>
          <div>
            <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-1">
              {t(s.label)}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Lifekora</h3>
          </div>
        </div>
        <a
          href="https://life-kora.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-body text-xs font-medium bg-ink text-paper px-4 py-2 rounded-sm hover:bg-accent transition-colors duration-200 self-center"
        >
          {t(strings.work.viewSite)}
        </a>
      </div>

      {/* Body */}
      <div className="px-7 py-7 grid md:grid-cols-[3fr_2fr] gap-10 items-start">
        <div className="flex flex-col gap-5">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="border-l-2 border-border pl-4"
          >
            <p className="font-body text-sm font-medium text-ink">{t(s.problem)}</p>
            <p className="font-mono text-[11px] text-ink-muted mt-1">{t(s.role)}</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16 }}
            className="font-body text-sm text-ink-muted leading-relaxed"
          >
            {t(s.body)}
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.26 }}
            className="font-mono text-[11px] text-accent border-l border-accent pl-3 italic"
          >
            {t(s.heroRef)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.32 }}
            className="flex flex-wrap gap-1.5 mt-1"
          >
            {stack.map(tag => (
              <span key={tag} className="font-mono text-[10px] text-ink-muted border border-border rounded-sm px-2 py-0.5">
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Domain diagram */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.18 }}
          aria-label={t({ fr: 'Modèle de domaine Lifekora', en: 'Lifekora domain model' })}
        >
          <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-4">
            {t(s.diagramCaption)}
          </div>

          {/* Schematic domain model */}
          <div className="flex flex-col gap-0">
            {domainNodes.map((node, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="flex items-center gap-2">
                  {i === 0 && <div className="w-2.5 h-2.5 rounded-full border-2 border-accent bg-accent-light shrink-0" />}
                  {i > 0 && i < domainNodes.length - 1 && <div className="w-2.5 h-2.5 rounded border border-border shrink-0" />}
                  {i === domainNodes.length - 1 && <div className="w-2.5 h-2.5 rounded-sm border-2 border-ink-muted shrink-0" />}
                  <div className="font-mono text-[11px] text-ink px-2 py-1 border border-border rounded-sm bg-paper">
                    {t(node)}
                  </div>
                </div>
                {i < domainNodes.length - 1 && (
                  <div className="w-px h-4 bg-border ml-1.5" />
                )}
              </div>
            ))}
          </div>

          {/* Stack layer */}
          <div className="mt-5 border-t border-border pt-3 space-y-1">
            {[
              { fr: 'Spring Boot · Microservices', en: 'Spring Boot · Microservices' },
              { fr: 'REST APIs → Spring Data JPA', en: 'REST APIs → Spring Data JPA' },
              { fr: '↳ PostgreSQL', en: '↳ PostgreSQL' },
            ].map((line, i) => (
              <div key={i} className="font-mono text-[10px] text-ink-faint">{t(line)}</div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
