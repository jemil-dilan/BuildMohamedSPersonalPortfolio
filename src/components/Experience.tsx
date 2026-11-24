import { useLang } from "../context/LanguageContext"
import { strings } from "../data/i18n"
import TornSheet from "./TornSheet"

interface RoleProps {
  seed: number
  tone: "blue" | "chalk" | "chalk-2"
  company: string
  title: string
  period: string
  bullets: readonly string[]
  tag?: string
  note?: string
  width: string
  offset: string
  z: string
  tilt: string
}

function RoleSheet({
  seed,
  tone,
  company,
  title,
  period,
  bullets,
  tag,
  note,
  width,
  offset,
  z,
  tilt,
}: RoleProps) {
  const isBlue = tone === "blue"
  const text = isBlue ? "text-chalk" : "text-ink"
  const soft = isBlue ? "text-chalk" : "text-ink-soft"
  const rule = isBlue ? "border-chalk/35" : "border-ink/25"
  const mark = isBlue ? "text-chalk" : "text-red"
  const bg = isBlue ? "bg-blue" : tone === "chalk-2" ? "bg-chalk-2" : "bg-chalk"

  return (
    <div className={`relative ${z} ${width} ${offset} ${tilt}`}>
      <TornSheet
        seed={seed}
        amp={10}
        innerClassName={`${bg} ${text} px-5 pb-8 pt-7 sm:px-7 sm:pb-9 sm:pt-8`}
      >
        <div
          className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b pb-3 ${rule}`}
        >
          <div>
            <p
              className={`font-label text-[9px] uppercase tracking-[0.18em] ${soft}`}
            >
              {company}
            </p>
            <h3 className="mt-1 font-display text-[22px] leading-[0.95] tracking-[-0.025em] sm:text-[26px]">
              {title}
            </h3>
          </div>
          <div className="text-right">
            <p
              className={`font-label text-[10px] uppercase tracking-[0.08em] ${soft}`}
            >
              {period}
            </p>
            {tag && (
              <span
                className={`mt-1.5 inline-block border px-1.5 py-0.5 font-label text-[8.5px] uppercase tracking-[0.12em] ${
                  isBlue ? "border-chalk text-chalk" : "border-red text-red"
                }`}
              >
                {tag}
              </span>
            )}
          </div>
        </div>

        {note && (
          <p
            className={`mt-2.5 font-label text-[9.5px] uppercase tracking-[0.1em] ${mark}`}
          >
            {note}
          </p>
        )}

        <ul className="mt-3 grid gap-x-8 gap-y-2 md:grid-cols-2">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className={`mt-[7px] h-px w-3 shrink-0 ${
                  isBlue ? "bg-chalk" : "bg-red"
                }`}
              />
              <span className={`text-[12.5px] leading-[1.55] ${soft}`}>
                {b}
              </span>
            </li>
          ))}
        </ul>
      </TornSheet>
    </div>
  )
}

export default function Experience() {
  const { lang, t } = useLang()
  const s = strings.experience

  return (
    <section
      id="experience"
      className="relative bg-board pb-20 pt-14 text-ink sm:pt-16"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <header className="flex flex-col gap-4 border-b-2 border-ink/30 pb-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2
            className="max-w-[18ch] font-display leading-[0.94] tracking-[-0.035em]"
            style={{ fontSize: "clamp(2rem, 4.8vw, 4rem)" }}
          >
            {t(s.heading)}
          </h2>
          <div className="md:text-right">
            <span className="-rotate-2 inline-block border border-red px-2 py-1 font-label text-[9px] uppercase tracking-[0.12em] text-ink">
              {t(s.concurrent)} · {t(strings.hero.balanceBDate)}
            </span>
          </div>
        </header>

        <div className="relative mt-9">
          <RoleSheet
            seed={97}
            tone="blue"
            company={t(s.logiaspace.company)}
            title={t(s.logiaspace.title)}
            period={t(s.logiaspace.period)}
            bullets={s.logiaspace.bullets[lang]}
            tag={t(s.remote)}
            width="md:w-[91%]"
            offset="md:ml-auto"
            z="z-30"
            tilt="md:rotate-[0.35deg]"
          />

          <RoleSheet
            seed={103}
            tone="chalk"
            company={t(s.laoJunior.company)}
            title={t(s.laoJunior.title)}
            period={t(s.laoJunior.period)}
            bullets={s.laoJunior.bullets[lang]}
            note={t(s.promotion)}
            width="md:w-[92%]"
            offset="mt-[-12px] md:mt-[-16px]"
            z="z-20"
            tilt="md:-rotate-[0.3deg]"
          />

          <RoleSheet
            seed={109}
            tone="chalk-2"
            company={t(s.laoIntern.company)}
            title={t(s.laoIntern.title)}
            period={t(s.laoIntern.period)}
            bullets={s.laoIntern.bullets[lang]}
            width="md:w-[82%]"
            offset="mt-[-10px] md:mt-[-14px] md:ml-[3%]"
            z="z-10"
            tilt="md:rotate-[0.5deg]"
          />
        </div>
      </div>
    </section>
  )
}
