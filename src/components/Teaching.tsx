import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'
import TornEdge from './TornEdge'
import TornSheet from './TornSheet'

const topicKeys = ['cleanCode', 'git', 'docker', 'agile'] as const
const tilts = ['-1.2deg', '0.9deg', '0.6deg', '-0.8deg']

export default function Teaching() {
  const { t } = useLang()
  const s = strings.teaching

  return (
    <section id="teaching" className="relative overflow-hidden bg-blue pb-20 pt-14 text-chalk sm:pt-16">
      <TornEdge color="var(--color-board)" variant="a" className="absolute inset-x-0 top-0 h-10" />
      <div
        aria-hidden="true"
        className="halftone pointer-events-none absolute inset-0 text-chalk opacity-[0.06]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <header className="grid gap-5 border-b border-chalk/35 pb-4 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-14">
          <h2
            className="max-w-[21ch] font-display leading-[0.94] tracking-[-0.035em]"
            style={{ fontSize: 'clamp(2rem, 4.6vw, 3.8rem)' }}
          >
            {t(s.heading)}
          </h2>
          <p className="max-w-[46ch] text-[13.5px] leading-[1.7] text-chalk md:pb-1.5">
            {t(s.body)}
          </p>
        </header>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {topicKeys.map((key, i) => (
            <div
              key={key}
              className={`relative ${i % 2 === 1 ? 'lg:mt-6' : ''}`}
              style={{ rotate: tilts[i] }}
            >
              <span
                aria-hidden="true"
                className="tape absolute -top-2.5 left-1/2 z-10 h-4 w-14 -translate-x-1/2 -rotate-2"
              />
              <TornSheet
                seed={127 + i * 7}
                amp={9}
                innerClassName="bg-chalk px-4 pb-8 pt-4 text-ink sm:px-5"
              >
                <div className="flex items-baseline justify-between gap-2 border-b border-ink/20 pb-2">
                  <span className="font-label text-[9px] uppercase tracking-[0.16em] text-ink-faint">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-2.5 w-2.5 bg-red" aria-hidden="true" />
                </div>

                <h3
                  className="mt-5 font-display leading-[0.9] tracking-[-0.03em]"
                  style={{ fontSize: 'clamp(1.7rem, 3.4vw, 2.5rem)' }}
                >
                  {t(s.topics[key])}
                </h3>

                <div className="-mx-4 mt-6 bg-red px-4 py-2 sm:-mx-5 sm:px-5">
                  <p className="font-label text-[8.5px] uppercase leading-[1.5] tracking-[0.1em] text-chalk">
                    {t(s.sessionLabel)}
                  </p>
                </div>
              </TornSheet>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
