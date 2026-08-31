import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { strings } from '../../data/i18n'

// MOVIA_LINK_MODE = "stills" — no clickable link
// MOVIA_BRAND = "Movia"

export default function MoviaCard() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const s = strings.work.movia

  const domainNodes = [
    { fr: 'Client', en: 'Customer' },
    { fr: 'Réservation', en: 'Booking' },
    { fr: 'Trajet', en: 'Trip' },
    { fr: 'Siège', en: 'Seat' },
    { fr: 'Billet', en: 'Ticket' },
    { fr: 'Validation', en: 'Validation' },
  ]

  return (
    <div ref={ref} className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300">
      <div className="bg-surface border-b border-border px-7 py-5 flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-5">
          <span className="font-display text-5xl font-semibold text-border leading-none select-none mt-1">
            04
          </span>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">
                {t(s.label)}
              </div>
              <span className="font-mono text-[9px] border border-border text-ink-muted rounded-sm px-1.5 py-0.5 uppercase tracking-wide">
                {t(s.conceptBadge)}
              </span>
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">Movia</h3>
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

          {/* Stills — MOVIA_LINK_MODE = "stills" */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24 }}
            className="grid grid-cols-2 gap-3"
          >
            {/* Still 1: Route list */}
            <div className="border border-border rounded bg-surface overflow-hidden">
              <div className="flex items-center gap-1 px-2 py-1.5 border-b border-border">
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <div className="h-2 w-12 ml-1 bg-border/40 rounded-sm" />
              </div>
              <div className="p-2.5 space-y-2">
                <div className="h-1.5 w-14 bg-ink-faint/25 rounded" />
                {[0.8, 0.6, 0.9, 0.7].map((w, i) => (
                  <div key={i} className="flex gap-1.5 items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-border shrink-0" />
                    <div className="h-1.5 rounded bg-ink-faint/15 flex-1" style={{ width: `${w * 100}%` }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Still 2: Booking */}
            <div className="border border-border rounded bg-surface overflow-hidden">
              <div className="flex items-center gap-1 px-2 py-1.5 border-b border-border">
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <div className="w-1.5 h-1.5 rounded-full bg-border" />
                <div className="h-2 w-12 ml-1 bg-border/40 rounded-sm" />
              </div>
              <div className="p-2.5 space-y-1.5">
                <div className="h-1.5 w-14 bg-ink-faint/25 rounded" />
                <div className="h-5 border border-border/60 rounded-sm bg-paper" />
                <div className="h-5 border border-border/60 rounded-sm bg-paper" />
                <div className="h-4 w-14 bg-ink/15 rounded-sm mt-1" />
              </div>
            </div>
          </motion.div>

          <p className="font-body text-[11px] text-ink-faint italic">
            {t(strings.work.moviaCaptionStills)}
          </p>
        </div>

        {/* Domain model */}
        <motion.div
          initial={{ opacity: 0, x: 8 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.18 }}
          aria-label={t({ fr: 'Modèle de domaine Movia', en: 'Movia domain model' })}
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
            <div className="font-mono text-[10px] text-ink-faint">{t(s.designNote)}</div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
