import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

export default function Footer() {
  const { t } = useLang()
  const s = strings.footer
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-ink py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          {/* Left: closing line */}
          <div className="max-w-md">
            <p className="font-display text-2xl md:text-3xl font-semibold text-paper leading-tight">
              {t(s.closing)}
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 font-body text-sm text-white/60 hover:text-paper transition-colors duration-200 link-hover"
            >
              {t(s.cta)}
            </a>
          </div>

          {/* Right: identity */}
          <div className="flex flex-col gap-1 md:text-right">
            <span className="font-display text-base font-semibold text-paper">MNJD</span>
            <span className="font-body text-xs text-white/50">{t(s.location)}</span>
            <span className="font-mono text-[10px] text-white/40">{t(s.languages)}</span>
            <span className="font-body text-[11px] text-white/30 mt-1">© {year}</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/jemil-dilan"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/njoupouandom-nfonka-mohamed-jemil-dilan-a5204a3a2"
              target="_blank" rel="noopener noreferrer"
              className="font-mono text-[11px] text-white/30 hover:text-white/60 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          <span className="font-mono text-[10px] text-white/20">
            Java · Spring Boot · Douala
          </span>
        </div>
      </div>
    </footer>
  )
}
