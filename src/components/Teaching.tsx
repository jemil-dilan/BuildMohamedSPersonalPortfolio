import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

const topicKeys = ['cleanCode', 'git', 'docker', 'agile'] as const

const topicIcons: Record<string, string> = {
  cleanCode: '§',
  git:       '⎇',
  docker:    '⬡',
  agile:     '↻',
}

export default function Teaching() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const s = strings.teaching

  return (
    <section ref={ref} className="py-24 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start mb-14">
          <div>
            <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
              {t({ fr: '// enseignement', en: '// teaching' })}
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.12, duration: 0.35 }}
            className="font-body text-[15px] text-ink-muted leading-relaxed pt-10"
          >
            {t(s.body)}
          </motion.p>
        </div>

        {/* Topic cards — 4 in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topicKeys.map((key, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.35 }}
              className="border border-border rounded-lg p-5 bg-paper hover:bg-surface hover:border-ink-faint transition-all duration-200 group"
            >
              {/* Symbolic icon */}
              <div
                className="font-mono text-2xl text-border group-hover:text-ink-faint transition-colors mb-3 leading-none select-none"
                aria-hidden="true"
              >
                {topicIcons[key]}
              </div>
              <div className="font-mono text-sm font-medium text-ink">
                {t(s.topics[key])}
              </div>
              <div className="font-body text-[11px] text-ink-faint mt-1 leading-snug">
                {t({
                  cleanCode: { fr: 'Présentation interne, Lao Sarl', en: 'Internal talk, Lao Sarl' },
                  git:       { fr: 'Présentation interne, Lao Sarl', en: 'Internal talk, Lao Sarl' },
                  docker:    { fr: 'Présentation interne, Lao Sarl', en: 'Internal talk, Lao Sarl' },
                  agile:     { fr: 'Présentation interne, Lao Sarl', en: 'Internal talk, Lao Sarl' },
                }[key])}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
