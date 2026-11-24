import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'
import TornEdge from './TornEdge'
import TornSheet from './TornSheet'

const stageKeys = ['problem', 'domain', 'api', 'data', 'tests', 'review', 'docs', 'ship'] as const

export default function HowIWork() {
  const { t } = useLang()
  const s = strings.howIWork

  return (
    <section id="method" className="relative bg-chalk pb-16 pt-14 text-ink sm:pb-20 sm:pt-16">
      <TornEdge color="var(--color-board)" variant="c" className="absolute inset-x-0 top-0 h-10" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <header className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-14">
          <h2
            className="max-w-[20ch] font-display leading-[0.94] tracking-[-0.035em]"
            style={{ fontSize: 'clamp(2rem, 4.6vw, 3.8rem)' }}
          >
            {t(s.heading)}
          </h2>
          <p className="max-w-[40ch] font-label text-[10.5px] uppercase leading-[1.9] tracking-[0.06em] text-ink-faint md:pb-1.5">
            {t(s.aside)}
          </p>
        </header>

        <ol className="mt-9 border-t border-ink/25">
          {stageKeys.map((key, i) => (
            <li
              key={key}
              className="flex gap-3 border-b border-ink/15 py-3.5 sm:gap-5 sm:py-4"
            >
              <span className="w-6 shrink-0 pt-0.5 font-label text-[10px] tracking-[0.08em] text-red">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-1 flex-col gap-1 md:flex-row md:items-baseline md:gap-6">
                <span className="font-cond text-[15px] uppercase leading-none tracking-[0.1em] text-ink md:w-44 md:shrink-0">
                  {t(s.stages[key])}
                </span>
                <span className="text-[12.5px] leading-[1.55] text-ink-soft">
                  {t(s.descriptions[key])}
                </span>
              </div>
            </li>
          ))}
        </ol>

        <div className="relative mt-10 max-w-[760px]">
          <TornSheet
            seed={83}
            amp={9}
            className="-rotate-1"
            innerClassName="bg-red px-5 pb-8 pt-5 text-chalk sm:px-7 sm:pb-9 sm:pt-6"
          >
            <blockquote className="font-cond text-[19px] leading-[1.3] tracking-[0.01em] sm:text-[23px]">
              {t(s.closing)}
            </blockquote>
          </TornSheet>
          <span className="tape absolute -top-2 left-10 h-4 w-14 rotate-2" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
