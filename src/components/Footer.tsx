import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'
import TornEdge from './TornEdge'

export default function Footer() {
  const { t } = useLang()
  const s = strings.footer
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-ink pb-10 pt-14 text-chalk sm:pt-16">
      <TornEdge color="var(--color-red)" variant="a" className="absolute inset-x-0 top-0 h-10" />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-start md:gap-12">
          <div>
            <p className="max-w-[24ch] font-display text-[26px] leading-[0.98] tracking-[-0.03em] sm:text-[34px]">
              {t(s.closing)}
            </p>
            <a
              href="mailto:nfonkmohamed@gmail.com"
              className="mt-5 inline-flex items-center gap-2 border-b border-chalk/50 pb-1 font-cond text-[14px] uppercase tracking-[0.12em] text-chalk transition-colors duration-200 hover:border-chalk"
            >
              {t(s.cta)}
            </a>
          </div>

          <div className="flex flex-col gap-1 font-label text-[9.5px] uppercase leading-[1.8] tracking-[0.1em] text-chalk md:text-right">
            <span className="font-display text-[14px] tracking-[-0.02em]">MNJD</span>
            <span>{t(s.location)}</span>
            <span>{t(s.languages)}</span>
            <span>© {year}</span>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-chalk/25 pt-4">
          <p className="font-label text-[9px] uppercase tracking-[0.1em] text-chalk">{t(s.rights)}</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jemil-dilan"
              target="_blank"
              rel="noopener noreferrer"
              className="rule-link font-label text-[9.5px] uppercase tracking-[0.1em] text-chalk"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/njoupouandom-nfonka-mohamed-jemil-dilan-a5204a3a2"
              target="_blank"
              rel="noopener noreferrer"
              className="rule-link font-label text-[9.5px] uppercase tracking-[0.1em] text-chalk"
            >
              LinkedIn
            </a>
            <span className="font-label text-[9px] uppercase tracking-[0.08em] text-chalk">
              Java · Spring Boot · MySQL
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
