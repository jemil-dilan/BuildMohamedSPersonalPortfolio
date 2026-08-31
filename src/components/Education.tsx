import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

export default function Education() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const s = strings.education

  return (
    <section ref={ref} className="py-24 px-6 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        <div>
          <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
            {t({ fr: '// formation', en: '// education' })}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight mt-2 sticky top-28"
          >
            {t(s.heading)}
          </motion.h2>
        </div>

        <div className="flex flex-col gap-6">
          {/* University of Buea */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.35 }}
            className="border border-border rounded-lg overflow-hidden"
          >
            <div className="bg-paper px-5 py-4 flex items-start justify-between gap-4">
              <div>
                <div className="font-mono text-[10px] text-ink-faint mb-1">{t(s.ubea.school)}</div>
                <div className="font-display text-lg font-semibold text-ink">{t(s.ubea.degree)}</div>
                <div className="font-mono text-[11px] text-ink-muted mt-1">{t(s.ubea.period)}</div>
              </div>
              <span className="font-mono text-[10px] text-accent border border-accent/30 bg-accent-light rounded-sm px-2 py-0.5 shrink-0">
                {t(s.ubea.note)}
              </span>
            </div>
          </motion.div>

          {/* Ceti */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.35 }}
            className="border border-border rounded-lg overflow-hidden"
          >
            <div className="bg-paper px-5 py-4">
              <div className="font-mono text-[10px] text-ink-faint mb-1">{t(s.ceti.school)}</div>
              <div className="font-display text-lg font-semibold text-ink">{t(s.ceti.degree)}</div>
              <div className="font-mono text-[11px] text-ink-muted mt-1">{t(s.ceti.period)}</div>
            </div>
          </motion.div>

          {/* Switch note */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.35 }}
            className="font-body text-sm text-ink-muted border-l-2 border-border pl-4"
          >
            {t(s.switchNote)}
          </motion.p>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.38 }}
          >
            <span className="font-mono text-[11px] text-ink-faint border border-border rounded-sm px-3 py-1.5">
              {t(s.languages)}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
