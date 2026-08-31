import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { strings } from '../../data/i18n'
import ExpoPrepaCard from './ExpoPrepaCard'
import LifekoraCard from './LifekoraCard'
import SukuCard from './SukuCard'
import MoviaCard from './MoviaCard'

export default function WorkSection() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="work" className="py-24 px-6 border-t border-border bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start mb-16">
          <div>
            <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
              {t({ fr: '// projets', en: '// work' })}
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight mt-2"
            >
              {t(strings.work.heading)}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-body text-sm text-ink-muted pt-10 leading-relaxed"
          >
            {t({
              fr: 'Ce sur quoi j\'ai travaillé — avec le rôle que j\'y ai eu, exactement.',
              en: 'What I\'ve worked on — with my exact role, stated plainly.',
            })}
          </motion.p>
        </div>

        <div className="flex flex-col gap-10">
          {[ExpoPrepaCard, LifekoraCard, SukuCard, MoviaCard].map((Card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.4 }}
            >
              <Card />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
