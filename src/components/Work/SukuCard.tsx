import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { strings } from '../../data/i18n'

export default function SukuCard() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const s = strings.work.suku

  const stack = ['Java', 'Spring Boot', 'MySQL', 'REST APIs', 'Git']

  const domainNodes = [
    { fr: 'Étudiant', en: 'Student' },
    { fr: 'Quiz', en: 'Quiz' },
    { fr: 'Soumission', en: 'Submission' },
    { fr: 'Évaluation', en: 'Evaluation' },
    { fr: 'Performance', en: 'Performance' },
  ]

  return (
    <div ref={ref} className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300">
      <div className="bg-surface border-b border-border px-7 py-5">
        <div className="flex items-start gap-5">
          <span className="font-display text-5xl font-semibold text-border leading-none select-none mt-1">
            03
          </span>
          <div>
            <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-1">
              {t(s.label)}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Suku</h3>
          </div>
        </div>
      </div>

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

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.26 }}
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
          aria-label={t({ fr: 'Modèle de domaine Suku', en: 'Suku domain model' })}
        >
          <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-4">
            {t({ fr: 'Modèle de domaine', en: 'Domain model' })}
          </div>
          <div className="flex flex-col gap-0">
            {domainNodes.map((node, i) => (
              <div key={i} className="flex flex-col items-start">
                <div className="font-mono text-[11px] text-ink px-2 py-1 border border-border rounded-sm bg-paper">
                  {t(node)}
                </div>
                {i < domainNodes.length - 1 && <div className="w-px h-3 bg-border ml-3" />}
              </div>
            ))}
          </div>
          <div className="mt-4 border-t border-border pt-3">
            <div className="font-mono text-[10px] text-ink-faint">Spring Boot → REST API → MySQL</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
