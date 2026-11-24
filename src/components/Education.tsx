import { useLang } from "../context/LanguageContext"
import { strings } from "../data/i18n"
import TornEdge from "./TornEdge"
import TornSheet from "./TornSheet"

export default function Education() {
  const { t } = useLang()
  const s = strings.education

  return (
    <section
      id="education"
      className="relative bg-board pb-20 pt-14 text-ink sm:pt-16"
    >
      <TornEdge
        color="var(--color-blue)"
        variant="c"
        className="absolute inset-x-0 top-0 h-10"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <header className="flex flex-wrap items-end justify-between gap-4 border-b-2 border-ink/30 pb-4">
          <h2
            className="font-display leading-[0.94] tracking-[-0.035em]"
            style={{ fontSize: "clamp(2rem, 4.8vw, 4rem)" }}
          >
            {t(s.heading)}
          </h2>
          <span className="-rotate-1 border border-ink/40 px-2.5 py-1.5 font-label text-[9px] uppercase tracking-[0.12em] text-ink">
            {t(s.languages)}
          </span>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-[1.45fr_0.55fr] md:items-start md:gap-8">
          <TornSheet
            seed={149}
            amp={10}
            innerClassName="bg-chalk px-5 pb-8 pt-5 sm:px-7 sm:pb-9 sm:pt-6"
          >
            <div className="grid gap-6 sm:grid-cols-2 sm:gap-0">
              <div className="sm:pr-6">
                <p className="font-label text-[9px] uppercase tracking-[0.16em] text-ink-faint">
                  {t(s.ubea.school)}
                </p>
                <h3 className="mt-2 font-display text-[21px] leading-[1.02] tracking-[-0.025em] sm:text-[23px]">
                  {t(s.ubea.degree)}
                </h3>
                <p className="mt-2 font-label text-[10px] uppercase tracking-[0.08em] text-ink-soft">
                  {t(s.ubea.period)}
                </p>
                <span className="mt-3 inline-block -rotate-1 border border-red px-1.5 py-0.5 font-label text-[8.5px] uppercase leading-[1.4] tracking-[0.1em] text-red">
                  {t(s.ubea.note)}
                </span>
              </div>

              <div className="border-t border-ink/20 pt-5 sm:border-t-0 sm:border-l sm:pl-6 sm:pt-0">
                <p className="font-label text-[9px] uppercase tracking-[0.16em] text-ink-faint">
                  {t(s.ceti.school)}
                </p>
                <h3 className="mt-2 font-display text-[21px] leading-[1.02] tracking-[-0.025em] sm:text-[23px]">
                  {t(s.ceti.degree)}
                </h3>
                <p className="mt-2 font-label text-[10px] uppercase tracking-[0.08em] text-ink-soft">
                  {t(s.ceti.period)}
                </p>
              </div>
            </div>
          </TornSheet>

          <div className="relative md:-rotate-1">
            <TornSheet
              seed={157}
              amp={8}
              innerClassName="bg-red px-4 pb-7 pt-4 text-chalk"
            >
              <p className="font-cond text-[16px] leading-[1.3] tracking-[0.01em]">
                {t(s.switchNote)}
              </p>
            </TornSheet>
            <span
              className="tape absolute -top-2 left-6 h-4 w-12 rotate-2"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
