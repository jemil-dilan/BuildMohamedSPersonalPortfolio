import { motion } from "motion/react"
import { useLang } from "../context/LanguageContext"
import { strings } from "../data/i18n"
import TornEdge from "./TornEdge"

export default function Hero() {
  const { t } = useLang()
  const s = strings.hero

  return (
    <section id="top" className="relative overflow-hidden bg-red text-chalk">
      <div
        aria-hidden="true"
        className="halftone pointer-events-none absolute inset-0 text-chalk opacity-[0.07]"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 pb-16 pt-24 sm:px-6 md:pt-28">
        <div className="relative">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1 hidden select-none font-display leading-none tracking-[-0.02em] text-transparent md:block"
            style={{
              fontSize: "clamp(3.5rem, 5vw, 4.8rem)",
              WebkitTextStroke: "1.5px rgba(237,231,216,0.34)",
            }}
          >
            BACKEND
          </span>
          <h1
            className="font-display leading-[0.76] tracking-[-0.04em]"
            style={{ fontSize: "clamp(3.5rem, 11.8vw, 9.2rem)" }}
          >
            <span
              aria-hidden="true"
              className="overprint pointer-events-none absolute inset-0 select-none text-ink/90"
            >
              <span className="block">{t(s.name1)}</span>
              <span className="block">{t(s.name2)}</span>
            </span>
            <span className="relative block">{t(s.name1)}</span>
            <span className="relative block">{t(s.name2)}</span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            <p className="font-cond text-[15px] uppercase leading-[1.15] tracking-[0.13em] text-chalk sm:text-[16px] sm:leading-none sm:tracking-[0.16em]">
              {t(s.role)
                .split(" — ")
                .map((part, i) => (
                  <span key={part}>
                    {i > 0 && <span className="hidden sm:inline"> — </span>}
                    <span className="block sm:inline">{part}</span>
                  </span>
                ))}
            </p>
            <span aria-hidden="true" className="h-2.5 w-2.5 bg-ink" />
            <span className="font-label text-[10px] uppercase leading-none tracking-[0.18em] text-chalk">
              Bonaberi, Douala
            </span>
          </div>

          <motion.p
            initial={{ y: 14 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 inline-block max-w-full bg-ink px-3.5 py-2.5 font-cond text-[16px] uppercase leading-[1.15] tracking-[0.09em] text-chalk sm:px-4 sm:text-[19px]"
          >
            {t(s.thesis)}
          </motion.p>

          <div className="mt-6 grid gap-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-10">
            <p className="max-w-[58ch] text-[14.5px] leading-[1.7] text-chalk">
              {t(s.body)}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
              <a
                href="#work"
                className="bg-chalk px-4 py-2.5 font-cond text-[13px] uppercase leading-none tracking-[0.14em] text-ink transition-transform duration-200 hover:-translate-y-0.5"
              >
                {t(s.ctaWork)}
              </a>
              <a
                href="#contact"
                className="border border-chalk/70 px-4 py-2.5 font-cond text-[13px] uppercase leading-none tracking-[0.14em] text-chalk transition-colors duration-200 hover:bg-chalk hover:text-ink"
              >
                {t(s.ctaContact)}
              </a>
              <span className="flex items-center gap-2 font-label text-[9.5px] uppercase tracking-[0.12em] text-chalk">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-chalk"
                />
                {t(s.status)}
              </span>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-baseline justify-between gap-2 border-t border-chalk/35 pt-3 font-label text-[9.5px] uppercase tracking-[0.24em]">
            <span>{t(s.dateline)}</span>
            <span className="text-chalk">
              FR / EN · Java · Spring Boot · MySQL
            </span>
          </div>
        </div>
      </div>

      <div className="relative bg-chalk text-ink">
        <TornEdge
          color="var(--color-red)"
          variant="a"
          className="absolute inset-x-0 -top-12 h-12"
        />

        <div className="relative mx-auto grid max-w-[1400px] gap-8 px-4 pb-12 pt-12 sm:px-6 md:grid-cols-[1.1fr_0.85fr_auto] md:items-center md:gap-10 md:pt-14">
          <div>
            <div className="flex items-baseline justify-between gap-3 border-b border-ink/30 pb-2 font-label text-[9px] uppercase tracking-[0.2em] text-ink-faint">
              <span>{t(s.bandKicker)}</span>
              <span className="-rotate-3 border border-red px-1.5 py-0.5 text-[8px] font-bold tracking-[0.16em] text-red">
                {t(s.stamp)}
              </span>
            </div>

            <dl className="mt-2 divide-y divide-ink/20">
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <dt className="font-cond text-[15px] leading-tight text-ink">
                  {t(s.balanceA)}
                </dt>
                <dd className="whitespace-nowrap font-label text-[10px] uppercase tracking-[0.08em] text-red">
                  {t(s.balanceADate)}
                </dd>
              </div>
              <div className="flex items-baseline justify-between gap-4 py-2.5">
                <dt className="font-cond text-[15px] leading-tight text-ink">
                  {t(s.balanceB)}
                </dt>
                <dd className="whitespace-nowrap font-label text-[10px] uppercase tracking-[0.08em] text-red">
                  {t(s.balanceBDate)}
                </dd>
              </div>
            </dl>

            <div className="mt-2 flex items-baseline justify-between gap-3 bg-ink px-3 py-2">
              <span className="font-label text-[9px] uppercase tracking-[0.2em] text-chalk">
                Total
              </span>
              <span className="font-cond text-[15px] uppercase tracking-[0.06em] text-chalk">
                {t(s.balanceTotal)}
              </span>
            </div>
            <p className="mt-2 font-label text-[9px] leading-relaxed tracking-[0.05em] text-ink-faint">
              {t(s.bandNote)}
            </p>
          </div>

          <div className="flex items-end justify-start md:justify-center">
            <span
              aria-hidden="true"
              className="font-display leading-none tracking-[-0.03em] text-transparent"
              style={{
                fontSize: "clamp(2.4rem, 4.8vw, 4.2rem)",
                WebkitTextStroke: "1.5px var(--color-board-dark)",
              }}
            >
              {t(s.yearOutline)}
            </span>
          </div>

          <div className="relative md:-mt-24">
            <a
              href="#contact"
              className="block bg-chalk-2 px-5 py-4 shadow-[0_14px_24px_-18px_rgba(26,26,24,0.8)] transition-transform duration-200 hover:-rotate-1 md:-rotate-2"
            >
              <span className="block font-display text-[19px] leading-none tracking-[-0.02em] text-ink">
                {t(strings.nav.cta)} →
              </span>
              <span className="mt-1.5 block font-label text-[8.5px] uppercase tracking-[0.14em] text-ink-faint">
                nfonkmohamed@gmail.com
              </span>
            </a>
            <span
              className="tape absolute -top-2.5 left-5 h-4 w-12 -rotate-3"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
