import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { strings } from '../../data/i18n'
import RequestFlow, { type FlowNode } from '../RequestFlow'

const expoFlowNodes: FlowNode[] = [
  {
    id: 'auth',
    label: 'Auth',
    type: 'entry',
    tooltip: { fr: 'Authentification et gestion des sessions utilisateur.', en: 'Authentication and user session management.' },
  },
  {
    id: 'session',
    label: 'Exam Session',
    type: 'service',
    tooltip: { fr: "Création et gestion d'une session d'examen simulé.", en: 'Create and manage a simulated exam session.' },
  },
  {
    id: 'delivery',
    label: 'Question Delivery',
    type: 'service',
    tooltip: { fr: 'Distribution des questions selon le niveau CECR cible.', en: 'Deliver questions according to the target CEFR level.' },
  },
  {
    id: 'capture',
    label: 'Answer Capture',
    type: 'service',
    tooltip: { fr: "Enregistrement des réponses de l'utilisateur.", en: 'Record user answers.' },
  },
  {
    id: 'scoring',
    label: 'Scoring',
    type: 'service',
    tooltip: { fr: 'Évaluation des réponses et calcul du score CECR.', en: 'Evaluate answers and compute CEFR score.' },
  },
  {
    id: 'progress',
    label: 'Progress',
    type: 'data',
    tooltip: { fr: 'Suivi de la progression et historique des sessions.', en: 'Track progression and session history.' },
  },
]

export default function ExpoPrepaCard() {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const s = strings.work

  return (
    <div ref={ref} className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition-shadow duration-300">
      {/* Card header */}
      <div className="bg-surface border-b border-border px-7 py-5 flex items-start justify-between gap-4 flex-wrap">
        <div className="flex items-start gap-5">
          {/* Large project number */}
          <span className="font-display text-5xl font-semibold text-border leading-none select-none mt-1">
            01
          </span>
          <div>
            <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider mb-1">
              {t(s.expoprepa.label)}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-ink">
              ExpoPrepa
            </h3>
          </div>
        </div>
        <a
          href="https://expoprepa.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-body text-xs font-medium bg-ink text-paper px-4 py-2 rounded-sm hover:bg-accent transition-colors duration-200 self-center"
        >
          {t(s.viewLive)}
        </a>
      </div>

      {/* Body */}
      <div className="px-7 py-7 grid md:grid-cols-[3fr_2fr] gap-10 items-start">
        <div className="flex flex-col gap-5">
          {/* Role line — leads per §8 */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.08 }}
            className="border-l-2 border-accent pl-4 bg-accent-light -ml-4 py-2 pr-3 rounded-r-sm"
          >
            <p className="font-body text-sm text-ink leading-relaxed">
              {t(s.expoprepa.roleHeadline)}
            </p>
          </motion.div>

          {/* Context */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.16 }}
            className="font-body text-sm text-ink-muted leading-relaxed"
          >
            {t(s.expoprepa.context)}
          </motion.p>

          {/* Journey */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.24 }}
            className="font-body text-sm text-ink-muted leading-relaxed"
          >
            {t(s.expoprepa.journey)}
          </motion.p>

          {/* UI abstraction */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.32 }}
            className="mt-1 border border-border rounded bg-surface overflow-hidden"
          >
            {/* Browser chrome */}
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-border">
              <div className="w-2 h-2 rounded-full bg-border" />
              <div className="w-2 h-2 rounded-full bg-border" />
              <div className="w-2 h-2 rounded-full bg-border" />
              <div className="ml-3 flex-1 h-4 bg-border/40 rounded-sm" />
            </div>
            {/* Mock exam interface */}
            <div className="p-4 space-y-3">
              {/* Progress bar */}
              <div className="flex items-center gap-2 mb-1">
                <div className="h-1.5 flex-1 bg-border rounded-full overflow-hidden">
                  <div className="h-full w-3/5 bg-accent/50 rounded-full" />
                </div>
                <span className="font-mono text-[9px] text-ink-faint">3/5</span>
              </div>
              {/* Question */}
              <div className="space-y-1.5">
                <div className="h-2 w-full bg-ink-faint/20 rounded" />
                <div className="h-2 w-4/5 bg-ink-faint/20 rounded" />
                <div className="h-2 w-2/3 bg-ink-faint/20 rounded" />
              </div>
              {/* Answer choices */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                {['A', 'B', 'C', 'D'].map((opt, i) => (
                  <div
                    key={opt}
                    className={`border rounded-sm px-2.5 py-1.5 flex items-center gap-2 ${
                      i === 1 ? 'border-accent/40 bg-accent-light' : 'border-border bg-paper'
                    }`}
                  >
                    <span className="font-mono text-[9px] text-ink-faint">{opt}</span>
                    <div className="h-1.5 flex-1 bg-ink-faint/20 rounded" />
                  </div>
                ))}
              </div>
            </div>
            <p className="px-4 pb-3 font-body text-[10px] text-ink-faint italic text-center">
              {t(s.screenshotCaption)}
            </p>
          </motion.div>
        </div>

        {/* Flow diagram — second use of motif */}
        <div className="flex flex-col gap-4">
          <div className="font-mono text-[10px] text-ink-faint uppercase tracking-wider">
            {t(s.expoprepa.flowCaption)}
          </div>
          <RequestFlow nodes={expoFlowNodes} entryLabel="ExpoPrepa" />

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mt-2 pt-3 border-t border-border">
            {['Java', 'Spring Boot', 'REST APIs', 'PostgreSQL'].map(tag => (
              <span key={tag} className="font-mono text-[10px] text-ink-muted border border-border rounded-sm px-2 py-0.5">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
