import { motion } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'
import RequestFlow, { type FlowNode } from './RequestFlow'

const lifekoraNodes: FlowNode[] = [
  {
    id: 'entry',
    label: 'POST /api/appointments',
    type: 'entry',
    tooltip: { fr: 'Le client envoie la requête HTTP POST avec les détails du rendez-vous.', en: 'The client sends an HTTP POST request with appointment details.' },
  },
  {
    id: 'security',
    label: 'Spring Security',
    sublabel: 'authenticate · authorize',
    type: 'service',
    tooltip: { fr: 'Spring Security authentifie le donneur et vérifie ses autorisations.', en: 'Spring Security authenticates the donor and checks authorization.' },
  },
  {
    id: 'controller',
    label: 'AppointmentController',
    type: 'service',
    tooltip: { fr: "L'AppointmentController valide les données entrantes et orchestre la logique.", en: 'AppointmentController validates incoming data and orchestrates logic.' },
  },
  {
    id: 'matching',
    label: 'DonorMatchingService',
    sublabel: 'blood-type · eligibility window',
    type: 'service',
    tooltip: { fr: "Le service de matching vérifie la compatibilité sanguine et la fenêtre d'éligibilité.", en: "Matching service checks blood-type compatibility and the donor's eligibility window." },
  },
  {
    id: 'jpa',
    label: 'Spring Data JPA',
    type: 'service',
    tooltip: { fr: 'Spring Data JPA traduit la logique domaine en requêtes SQL.', en: 'Spring Data JPA translates domain logic into SQL queries.' },
  },
  {
    id: 'postgres',
    label: 'PostgreSQL',
    sublabel: 'persist appointment',
    type: 'data',
    tooltip: { fr: 'PostgreSQL persiste le rendez-vous confirmé.', en: 'PostgreSQL persists the confirmed appointment.' },
  },
]

export default function Hero() {
  const { t } = useLang()
  const s = strings.hero

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 overflow-hidden">
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.035] rounded-full"
        style={{ background: 'radial-gradient(circle, #2A5744 0%, transparent 70%)', transform: 'translate(30%, -20%)' }}
      />

      <div className="max-w-6xl mx-auto w-full relative">
        <div className="grid md:grid-cols-[1fr_320px] gap-16 lg:gap-24 items-start">
          {/* Left: text */}
          <div className="flex flex-col gap-5 pt-6">
            {/* Section index */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-3"
            >
              <span className="font-mono text-[10px] text-ink-faint tracking-widest uppercase">
                {t(s.eyebrow)}
              </span>
            </motion.div>

            {/* Headline — large Fraunces */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-semibold text-ink leading-[1.06] tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.2rem)' }}
            >
              {t(s.headline)}
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22, ease: 'easeOut' }}
              className="font-body text-[15px] text-ink-muted leading-[1.75] max-w-[520px]"
            >
              {t(s.body)}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.34, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 mt-1"
            >
              <a
                href="#work"
                className="font-body text-sm font-medium bg-ink text-paper px-6 py-2.5 rounded-sm hover:bg-accent transition-colors duration-200"
              >
                {t(s.ctaWork)}
              </a>
              <a
                href="#contact"
                className="font-body text-sm text-ink border border-border px-6 py-2.5 rounded-sm hover:border-ink-muted transition-colors duration-200"
              >
                {t(s.ctaContact)}
              </a>
            </motion.div>

            {/* Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex items-center gap-2.5 mt-1"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <span className="font-body text-xs text-ink-muted">
                {t(s.status).replace('● ', '')}
              </span>
            </motion.div>
          </div>

          {/* Right: request flow diagram */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:block"
          >
            {/* Diagram card */}
            <div className="border border-border rounded bg-surface p-5">
              {/* Card header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-border-light">
                <span className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">
                  {t({ fr: 'Flux de requête · Lifekora', en: 'Request path · Lifekora' })}
                </span>
                <span className="font-mono text-[10px] text-accent border border-accent/25 bg-accent-light rounded-sm px-1.5 py-0.5">
                  live
                </span>
              </div>
              <RequestFlow
                nodes={lifekoraNodes}
                entryLabel="Lifekora"
                caption={s.diagramCaption}
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.4 }}
          className="absolute bottom-0 left-0 hidden lg:flex items-center gap-2 text-ink-faint"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-10 bg-border origin-top"
          />
          <span className="font-mono text-[10px] tracking-widest uppercase">
            {t({ fr: 'Défiler', en: 'Scroll' })}
          </span>
        </motion.div>
      </div>
    </section>
  )
}
