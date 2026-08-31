import { useRef } from 'react'
import { motion, useInView } from 'motion/react'
import { useLang } from '../context/LanguageContext'
import { strings } from '../data/i18n'

export default function Intro() {
  const { t } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const s = strings.intro

  return (
    <section ref={ref} id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-16 items-start">
        {/* Sticky heading */}
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[10px] text-ink-faint uppercase tracking-widest">
            {t({ fr: '// à propos', en: '// about' })}
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="font-display text-3xl md:text-4xl font-semibold text-ink leading-tight sticky top-28"
          >
            {t(s.heading)}
          </motion.h2>
        </div>

        {/* Copy */}
        <div className="flex flex-col gap-6">
          {[s.p1, s.p2, s.p3].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.35 }}
              className="font-body text-[15px] text-ink-muted leading-[1.8]"
            >
              {t(para)}
            </motion.p>
          ))}

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.44, duration: 0.35 }}
            className="border-l-2 border-accent pl-5 py-1 my-2"
          >
            <p className="font-display text-lg md:text-xl text-ink font-light italic leading-snug">
              "{t(s.p4)}"
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  )
}
