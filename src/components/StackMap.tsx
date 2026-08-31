import { useState, useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'
import { stackItems, stackGroups } from '../data/stack'

export default function StackMap() {
  const { lang, t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState<string | null>(null)
  const s = strings.stack

  const getState = (name: string) => {
    if (!hovered) return 'idle'
    if (name === hovered) return 'primary'
    const item = stackItems.find(i => i.name === hovered)
    if (item?.connects.includes(name)) return 'connected'
    return 'dim'
  }

  const hoverInfo = hovered
    ? (() => {
        const item = stackItems.find(i => i.name === hovered)
        if (!item) return null
        return item.connects.length
          ? { fr: `Connecté à : ${item.connects.join(', ')}`, en: `Connected to: ${item.connects.join(', ')}` }
          : { fr: 'Aucune connexion directe listée.', en: 'No direct connections listed.' }
      })()
    : null

  const dailyByGroup = stackGroups.map(g => ({
    group: g,
    items: stackItems.filter(i => i.tier === 'daily' && i.group === g),
  })).filter(g => g.items.length > 0)

  const workingByGroup = stackGroups.map(g => ({
    group: g,
    items: stackItems.filter(i => i.tier === 'working' && i.group === g),
  })).filter(g => g.items.length > 0)

  const renderTag = (item: typeof stackItems[0], delay: number) => {
    const state = getState(item.name)
    const isDaily = item.tier === 'daily'
    return (
      <motion.button
        key={item.name}
        initial={{ opacity: 0, scale: 0.94 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay, duration: 0.22 }}
        onMouseEnter={() => setHovered(item.name)}
        onMouseLeave={() => setHovered(null)}
        aria-pressed={state === 'primary'}
        className={`
          font-mono text-[11px] px-2.5 py-1.5 rounded-sm border
          transition-all duration-150 cursor-default select-none
          ${isDaily
            ? 'bg-ink text-paper border-ink font-medium'
            : 'bg-paper text-ink-muted border-border'
          }
          ${state === 'primary' ? '!bg-accent !text-paper !border-accent scale-105 shadow-sm' : ''}
          ${state === 'connected' ? '!border-accent !text-accent !bg-accent-light' : ''}
          ${state === 'dim' ? 'opacity-25' : ''}
        `}
      >
        {item.name}
      </motion.button>
    )
  }

  return (
    <section ref={ref} id="stack" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 items-start mb-14">
          <div>
            <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
              {t({ fr: '// stack', en: '// stack' })}
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15 }}
            className="flex items-start pt-8"
          >
            <p className="font-body text-sm text-ink-muted leading-relaxed">
              {hovered
                ? (hoverInfo ? t(hoverInfo) : '')
                : t({ fr: 'Passez la souris sur une technologie pour voir ses connexions.', en: 'Hover a technology to see its connections.' })
              }
            </p>
          </motion.div>
        </div>

        {/* Two-column: Daily | Working */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Daily */}
          <div>
            <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-border">
              <h3 className="font-display text-base font-semibold text-ink">{t(s.daily)}</h3>
              <span className="font-body text-xs text-ink-faint">{t(s.dailyNote)}</span>
            </div>
            <div className="space-y-6">
              {dailyByGroup.map(({ group, items }, gi) => (
                <div key={group}>
                  <div className="font-mono text-[9px] text-ink-faint uppercase tracking-widest mb-2.5">{group}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item, ii) => renderTag(item, gi * 0.04 + ii * 0.03))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Working knowledge */}
          <div>
            <div className="flex items-baseline gap-3 mb-6 pb-3 border-b border-border">
              <h3 className="font-display text-base font-semibold text-ink">{t(s.working)}</h3>
              <span className="font-body text-xs text-ink-faint">{t(s.workingNote)}</span>
            </div>
            <div className="space-y-6">
              {workingByGroup.map(({ group, items }, gi) => (
                <div key={group}>
                  <div className="font-mono text-[9px] text-ink-faint uppercase tracking-widest mb-2.5">{group}</div>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item, ii) => renderTag(item, 0.3 + gi * 0.04 + ii * 0.03))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-center gap-6 border-t border-border pt-6"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm bg-ink" />
            <span className="font-body text-xs text-ink-muted">{t(s.daily)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm border border-border bg-paper" />
            <span className="font-body text-xs text-ink-muted">{t(s.working)}</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-sm border border-accent bg-accent-light" />
            <span className="font-body text-xs text-ink-muted">{t({ fr: 'Connexion', en: 'Connected' })}</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
