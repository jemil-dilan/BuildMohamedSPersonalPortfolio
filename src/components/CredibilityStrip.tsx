import { motion, useInView } from 'motion/react'
import { useRef } from 'react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

const facts = [
  { labelKey: 'since',   valueKey: 'sinceVal'   },
  { labelKey: 'stack',   valueKey: 'stackVal'   },
  { labelKey: 'current', valueKey: 'currentVal' },
  { labelKey: 'also',    valueKey: 'alsoVal'    },
] as const

export default function CredibilityStrip() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const s = strings.credibility

  return (
    <section ref={ref} className="border-y border-border bg-ink">
      <div className="max-w-6xl mx-auto px-6 py-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
          {facts.map(({ labelKey, valueKey }, i) => (
            <motion.div
              key={labelKey}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.09, duration: 0.3 }}
              className="px-6 py-7"
            >
              <div className="font-mono text-[10px] text-white/40 uppercase tracking-widest mb-2">
                {t(s[labelKey])}
              </div>
              <div className="font-display text-[15px] font-semibold text-white leading-snug">
                {t(s[valueKey])}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
