import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

const stageKeys = ['problem', 'domain', 'api', 'data', 'tests', 'review', 'docs', 'ship'] as const

export default function HowIWork() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const s = strings.howIWork

  return (
    <section ref={ref} className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex items-start justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
              {t({ fr: '// méthode', en: '// method' })}
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
        </div>

        {/* Steps grid — 4 per row on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border rounded overflow-hidden">
          {stageKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: i * 0.065, duration: 0.3 }}
              className="bg-paper p-5 hover:bg-surface transition-colors duration-200 group"
            >
              {/* Step number */}
              <div className="font-display text-4xl font-semibold text-border group-hover:text-surface-2 transition-colors duration-200 mb-3 leading-none select-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              {/* Stage label */}
              <div className="font-mono text-xs font-medium text-ink mb-2">
                {t(s.stages[key])}
              </div>
              {/* Description */}
              <div className="font-body text-[12px] text-ink-faint leading-snug">
                {t(s.descriptions[key])}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.65, duration: 0.35 }}
          className="mt-12 font-display text-xl md:text-2xl text-ink font-light italic max-w-2xl border-l-2 border-accent pl-5"
        >
          {t(s.closing)}
        </motion.p>
      </div>
    </section>
  )
}
