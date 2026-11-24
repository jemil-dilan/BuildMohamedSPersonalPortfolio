import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'
import TornEdge from './TornEdge'
import TornSheet from './TornSheet'

export default function Intro() {
  const { t } = useLang()
  const s = strings.intro
  const f = s.facts

  const facts = [
    { k: f.since, v: f.sinceVal },
    { k: f.stack, v: f.stackVal },
    { k: f.current, v: f.currentVal },
    { k: f.also, v: f.alsoVal },
  ]

  return (
    <section id="about" className="relative bg-board pb-16 pt-12 text-ink sm:pb-20 sm:pt-16">
      <TornEdge color="var(--color-chalk)" variant="b" className="absolute inset-x-0 top-0 h-10" />
      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="relative">
          <span className="tape absolute -top-3 left-[12%] z-10 h-5 w-24 -rotate-2" aria-hidden="true" />
          <span className="tape absolute -top-2 right-[16%] z-10 h-5 w-16 rotate-1" aria-hidden="true" />

          <TornSheet
            seed={21}
            amp={12}
            innerClassName="bg-chalk px-5 pb-9 pt-7 sm:px-9 sm:pb-10 sm:pt-9"
          >
            <div className="border-b-2 border-ink/25 pb-4">
              <h2
                className="max-w-[19ch] font-display leading-[0.94] tracking-[-0.035em]"
                style={{ fontSize: 'clamp(2rem, 4.6vw, 3.9rem)' }}
              >
                {t(s.heading)}
              </h2>
            </div>

            <div className="mt-7 grid gap-8 md:grid-cols-[0.92fr_1.08fr] md:gap-12">
              <div>
                <TornSheet
                  seed={19}
                  amp={8}
                  className="-rotate-1"
                  innerClassName="bg-red px-5 pb-8 pt-5 text-chalk sm:px-6 sm:pb-9 sm:pt-6"
                >
                  <figure>
                    <blockquote className="font-cond text-[19px] leading-[1.3] tracking-[0.01em] sm:text-[22px]">
                      {t(s.pullQuote)}
                    </blockquote>
                    <figcaption className="mt-4 border-t border-chalk/35 pt-2 font-label text-[9px] uppercase tracking-[0.18em] text-chalk">
                      MNJD · Douala
                    </figcaption>
                  </figure>
                </TornSheet>

                <p className="mt-5 max-w-[36ch] font-label text-[10px] uppercase leading-[1.8] tracking-[0.08em] text-ink-faint">
                  {t({
                    fr: 'Le diplôme avance en même temps que le travail. Le travail nourrit le diplôme.',
                    en: 'The degree moves at the same time as the work. The work feeds the degree.',
                  })}
                </p>
              </div>

              <div className="space-y-4 text-[14.5px] leading-[1.72] text-ink-soft sm:text-[15px]">
                <p className="first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-[50px] first-letter:leading-[0.72] first-letter:text-red">
                  {t(s.p1)}
                </p>
                <p>{t(s.p2)}</p>
                <p>{t(s.p3)}</p>
                <p>{t(s.p4)}</p>
              </div>
            </div>

            <div className="mt-9 border-t border-ink/20 pt-4">
              <p className="font-label text-[9.5px] uppercase tracking-[0.2em] text-ink-faint">
                {t(s.factsKicker)}
              </p>
              <dl className="mt-3 grid gap-px border-t border-ink/15 sm:grid-cols-2 lg:grid-cols-4">
                {facts.map((item, i) => (
                  <div
                    key={t(item.k)}
                    className={`py-3 lg:px-4 ${
                      i > 0 ? 'border-t border-ink/15 lg:border-t-0 lg:border-l' : ''
                    } ${i === 0 ? 'lg:pl-0' : ''}`}
                  >
                    <dt className="font-label text-[9px] uppercase leading-relaxed tracking-[0.14em] text-ink-faint">
                      {t(item.k)}
                    </dt>
                    <dd className="mt-1.5 font-cond text-[16px] leading-[1.15] text-ink">{t(item.v)}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </TornSheet>
        </div>
      </div>
    </section>
  )
}
