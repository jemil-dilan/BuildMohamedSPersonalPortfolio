import { useId, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { useLang } from '../../context/LanguageContext'
import { strings } from '../../data/i18n'
import type { Project } from '../../data/projects'
import { tearPolygon } from '../../lib/tear'

const tones = {
  blue: {
    bg: 'bg-blue text-chalk',
    rule: 'border-chalk/35',
    chip: 'border-chalk/45 text-chalk',
    stamp: 'border-chalk text-chalk',
    muted: 'text-chalk',
    link: 'text-chalk',
    tape: 'opacity-80',
    seed: 31,
  },
  chalk: {
    bg: 'bg-chalk text-ink',
    rule: 'border-ink/25',
    chip: 'border-ink/35 text-ink',
    stamp: 'border-red text-red',
    muted: 'text-ink-faint',
    link: 'text-ink',
    tape: 'opacity-90',
    seed: 41,
  },
  red: {
    bg: 'bg-red text-chalk',
    rule: 'border-chalk/35',
    chip: 'border-chalk/45 text-chalk',
    stamp: 'border-chalk text-chalk',
    muted: 'text-chalk',
    link: 'text-chalk',
    tape: 'opacity-80',
    seed: 53,
  },
  board: {
    bg: 'bg-board-deep text-ink',
    rule: 'border-ink/30',
    chip: 'border-ink/40 text-ink',
    stamp: 'border-ink text-ink',
    muted: 'text-ink-soft',
    link: 'text-ink',
    tape: 'opacity-90',
    seed: 67,
  },
}

export default function ProjectSheet({
  project,
  defaultOpen = false,
}: {
  project: Project
  defaultOpen?: boolean
}) {
  const { t } = useLang()
  const [open, setOpen] = useState(defaultOpen)
  const panelId = useId()
  const tone = tones[project.tone]
  const w = strings.work
  const linkLabel = project.linkLabel ? w[project.linkLabel] : null

  return (
    <article className="torn-sheet relative">
      <span
        aria-hidden="true"
        className={`tape absolute -top-2.5 left-8 z-10 h-4 w-20 -rotate-2 ${tone.tape}`}
      />
      <div
        className={`relative px-5 pb-8 pt-7 sm:px-7 sm:pb-9 sm:pt-8 ${tone.bg}`}
        style={{ clipPath: tearPolygon(tone.seed, 11) }}
      >
        <div className="flex flex-wrap items-start justify-between gap-x-5 gap-y-3">
          <div className="min-w-0">
            <div className="flex items-baseline gap-2.5 font-label text-[9px] uppercase tracking-[0.18em]">
              <span>{project.num}</span>
              <span>{t(project.category)}</span>
            </div>
            <h3
              className="mt-2 font-display leading-[0.86] tracking-[-0.035em]"
              style={{ fontSize: 'clamp(2.1rem, 4.8vw, 3.9rem)' }}
            >
              {project.name}
            </h3>
          </div>

          <div className="flex shrink-0 flex-wrap items-start gap-3">
            {project.link && linkLabel ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`rule-link mt-1 font-label text-[9.5px] uppercase tracking-[0.14em] ${tone.link}`}
              >
                {t(linkLabel)} ↗
              </a>
            ) : null}
            <span
              className={`-rotate-2 border px-2 py-1 font-label text-[9px] uppercase tracking-[0.14em] ${tone.stamp}`}
            >
              {t(project.status)}
            </span>
          </div>
        </div>

        <p className="mt-4 max-w-[46ch] font-cond text-[19px] leading-[1.25] tracking-[0.01em] sm:text-[22px]">
          {t(project.problem)}
        </p>

        <div className={`mt-5 border-t pt-3.5 ${tone.rule}`}>
          <p className={`font-label text-[9px] uppercase tracking-[0.18em] ${tone.muted}`}>
            {t(w.roleLabel)}
          </p>
          <p className="mt-1.5 max-w-[74ch] text-[13.5px] leading-[1.65]">{t(project.role)}</p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(v => !v)}
          aria-expanded={open}
          aria-controls={panelId}
          className={`mt-4 flex w-full items-center justify-between gap-4 border-t pt-3 text-left ${tone.rule}`}
        >
          <span className="font-label text-[9.5px] uppercase tracking-[0.16em]">
            {open ? t(w.closeLabel) : t(w.openLabel)}
          </span>
          <span
            aria-hidden="true"
            className={`flap relative grid h-9 w-9 shrink-0 place-items-center transition-transform duration-300 ${
              open ? 'translate-x-0.5 translate-y-0.5' : ''
            }`}
          >
            <span className="relative font-label text-[16px] leading-none">{open ? '−' : '+'}</span>
          </span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              id={panelId}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.9, 0.1, 1] }}
              className="overflow-hidden"
            >
              <div className={`mt-4 grid gap-6 border-t pt-4 md:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] ${tone.rule}`}>
                <div className="space-y-3 text-[13.5px] leading-[1.7]">
                  <p>{t(project.body)}</p>
                  {project.extra && <p>{t(project.extra)}</p>}
                  {project.concept && (
                    <p className="font-label text-[10px] uppercase leading-relaxed tracking-[0.1em]">
                      {t(w.conceptNote)}
                    </p>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <p className={`font-label text-[9px] uppercase tracking-[0.18em] ${tone.muted}`}>
                      {t(w.stackLabel)}
                    </p>
                    {project.stack.length > 0 ? (
                      <ul className="mt-2 flex flex-wrap gap-1.5">
                        {project.stack.map(item => (
                          <li
                            key={item}
                            className={`border px-2 py-1 font-label text-[9.5px] uppercase tracking-[0.05em] ${tone.chip}`}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    {project.stackNote && (
                      <p className={`mt-2 font-label text-[9.5px] leading-relaxed ${tone.muted}`}>
                        {t(project.stackNote)}
                      </p>
                    )}
                  </div>

                  {!project.link && (
                    <p className={`font-label text-[9.5px] uppercase tracking-[0.12em] ${tone.muted}`}>
                      {t(w.noLink)}
                    </p>
                  )}

                  {project.concept && (
                    <p className={`font-label text-[9px] uppercase leading-relaxed tracking-[0.1em] ${tone.muted}`}>
                      {t(w.screenshotNote)}
                    </p>
                  )}
                </div>
              </div>

              {project.path && (
                <div className={`mt-5 border-t pt-4 ${tone.rule}`}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-label text-[9px] uppercase tracking-[0.18em]">
                      {t(w.lifekoraPathTitle)}
                    </p>
                    <p className={`font-label text-[9px] tracking-[0.03em] ${tone.muted}`}>
                      {t(w.lifekoraPathCaption)}
                    </p>
                  </div>
                  <ol className="mt-3 grid gap-1.5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-2">
                    {project.path.map((node, i) => (
                      <li key={node.label} className={`border px-2 py-2 ${tone.chip}`}>
                        <span className="block font-label text-[8px] uppercase tracking-[0.16em] opacity-70">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <span className="mt-1 block font-label text-[10px] leading-tight tracking-[0.02em]">
                          {node.label}
                        </span>
                        <span className="mt-1 block font-label text-[8.5px] leading-tight opacity-80">
                          {t(node.sub)}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </article>
  )
}
