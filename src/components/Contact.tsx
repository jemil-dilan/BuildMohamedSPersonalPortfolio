import { useLang } from "../context/LanguageContext"
import { strings } from "../data/i18n"
import TornEdge from "./TornEdge"
import TornSheet from "./TornSheet"

const EMAIL = ["nfonkmohamed", "@", "gmail", ".", "com"].join("")
const LINKEDIN =
  "https://www.linkedin.com/in/njoupouandom-nfonka-mohamed-jemil-dilan-a5204a3a2"

export default function Contact() {
  const { t } = useLang()
  const s = strings.contact

  const rows = [
    {
      label: t(s.phone),
      value: (
        <a href="tel:+237671018302" className="rule-link text-ink">
          +237 671 01 83 02
        </a>
      ),
    },
    {
      label: t(s.linkedin),
      value: (
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="rule-link break-all text-ink"
        >
          linkedin.com/in/njoupouandom-nfonka-…
        </a>
      ),
    },
    {
      label: t(s.github),
      value: (
        <a
          href="https://github.com/jemil-dilan"
          target="_blank"
          rel="noopener noreferrer"
          className="rule-link text-ink"
        >
          github.com/jemil-dilan
        </a>
      ),
    },
    {
      label: t(s.location),
      value: <span className="text-ink">{t(s.locationVal)}</span>,
    },
  ]

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-red pb-16 pt-14 text-chalk sm:pb-20 sm:pt-16"
    >
      <TornEdge
        color="var(--color-board)"
        variant="b"
        className="absolute inset-x-0 top-0 h-10"
      />
      <div
        aria-hidden="true"
        className="halftone pointer-events-none absolute inset-0 text-chalk opacity-[0.06]"
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 sm:px-6 md:grid-cols-[1.05fr_0.95fr] md:items-start md:gap-14">
        <div>
          <h2
            className="max-w-[15ch] font-display leading-[0.9] tracking-[-0.04em]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
          >
            {t(s.heading)}
          </h2>

          <p className="mt-6 max-w-[46ch] text-[14.5px] leading-[1.7] text-chalk">
            {t(s.body)}
          </p>

          <a
            href={`mailto:${EMAIL}`}
            className="mt-7 inline-block bg-chalk px-5 py-3 font-cond text-[15px] uppercase leading-none tracking-[0.14em] text-ink transition-transform duration-200 hover:-translate-y-0.5"
          >
            {t(s.cta)}
          </a>

          <p className="mt-3 font-label text-[10.5px] tracking-[0.06em] text-chalk">
            {EMAIL}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-chalk/35 pt-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-chalk"
            />
            <span className="font-label text-[9px] uppercase tracking-[0.14em] text-chalk">
              {t(strings.hero.status)}
            </span>
            <span className="font-label text-[9px] uppercase tracking-[0.1em] text-chalk">
              · {t(strings.footer.languages)}
            </span>
          </div>
        </div>

        <div className="relative">
          <span
            aria-hidden="true"
            className="tape absolute -top-2.5 left-1/2 z-10 h-4 w-20 -translate-x-1/2 -rotate-1"
          />
          <TornSheet
            seed={173}
            amp={11}
            innerClassName="bg-chalk px-5 pb-8 pt-5 text-ink sm:px-6 sm:pb-9 sm:pt-6"
          >
            <p className="font-label text-[9px] uppercase tracking-[0.18em] text-ink-faint">
              {t({ fr: "Coordonnées", en: "Details" })}
            </p>

            <dl className="mt-3 divide-y divide-ink/15 border-t border-ink/20">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col gap-0.5 py-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-5"
                >
                  <dt className="shrink-0 font-label text-[9px] uppercase tracking-[0.14em] text-ink-faint">
                    {row.label}
                  </dt>
                  <dd className="break-all text-[13px] leading-[1.5] sm:text-right">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 border-t border-ink/20 pt-3 font-label text-[9px] uppercase leading-[1.7] tracking-[0.08em] text-ink-faint">
              {t(s.cvNote)}
            </p>
          </TornSheet>
        </div>
      </div>
    </section>
  )
}
