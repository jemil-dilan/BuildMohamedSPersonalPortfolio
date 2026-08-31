import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

export default function Experience() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const s = strings.experience

  return (
    <section ref={ref} id="experience" className="py-24 px-6 bg-surface border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start mb-16">
          <div>
            <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
              {t({ fr: '// expérience', en: '// experience' })}
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
          <div />
        </div>

        {/* Concurrent tag */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] text-ink-faint border border-border rounded-sm px-2.5 py-1 whitespace-nowrap uppercase tracking-wider">
            {t(s.concurrent)} · Jan 2026 – {t(s.present)}
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Two concurrent roles */}
        <div className="grid md:grid-cols-2 gap-5 mb-12">
          <RoleCard
            inView={inView} delay={0.18}
            company="Logiaspace"
            tag={t(s.remote)}
            accentTag
            title={t(s.logiaspace.title)}
            period={`Jan 2026 – ${t(s.present)}`}
            bullets={s.logiaspace.bullets[t({ fr: 'fr', en: 'en' }) as 'fr' | 'en']}
            accent
          />
          <RoleCard
            inView={inView} delay={0.26}
            company="Lao Sarl"
            title={t(s.laoJunior.title)}
            period={`Mar 2025 – ${t(s.present)}`}
            bullets={s.laoJunior.bullets[t({ fr: 'fr', en: 'en' }) as 'fr' | 'en']}
            promotion={t(s.promotion)}
          />
        </div>

        {/* Divider with internship label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.36 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px flex-1 bg-border" />
          <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wider whitespace-nowrap">
            Nov 2024 – Feb 2025
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Intern role */}
        <div className="md:w-1/2">
          <RoleCard
            inView={inView} delay={0.44}
            company="Lao Sarl"
            title={t(s.laoIntern.title)}
            period="Nov 2024 – Feb 2025"
            bullets={s.laoIntern.bullets[t({ fr: 'fr', en: 'en' }) as 'fr' | 'en']}
          />
        </div>
      </div>
    </section>
  )
}

interface RoleCardProps {
  inView: boolean
  delay: number
  company: string
  title: string
  period: string
  bullets: readonly string[]
  accent?: boolean
  tag?: string
  accentTag?: boolean
  promotion?: string
}

function RoleCard({ inView, delay, company, title, period, bullets, accent, tag, accentTag, promotion }: RoleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.35 }}
      className={`rounded-lg border overflow-hidden ${accent ? 'border-accent/25' : 'border-border'}`}
    >
      {/* Card header bar */}
      <div className={`px-5 py-4 border-b flex items-start justify-between gap-3 ${accent ? 'bg-accent-light border-accent/20' : 'bg-paper border-border'}`}>
        <div>
          <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-1">{company}</div>
          <div className="font-display text-lg font-semibold text-ink leading-tight">{title}</div>
          <div className="font-mono text-[10px] text-ink-muted mt-1">{period}</div>
        </div>
        {tag && (
          <span className={`font-mono text-[10px] rounded-sm px-2 py-0.5 shrink-0 border ${
            accentTag ? 'text-accent border-accent/30 bg-accent-light' : 'text-ink-faint border-border'
          }`}>
            {tag}
          </span>
        )}
      </div>

      {/* Bullets */}
      <div className="px-5 py-4">
        {promotion && (
          <div className="font-mono text-[10px] text-accent mb-3 flex items-center gap-1.5">
            <span>↑</span>
            <span>{promotion}</span>
          </div>
        )}
        <ul className="space-y-2">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="text-border shrink-0 mt-[3px] text-sm leading-none">—</span>
              <span className="font-body text-[13px] text-ink-muted leading-snug">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
