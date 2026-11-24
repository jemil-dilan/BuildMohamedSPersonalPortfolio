import { useLang } from '../../context/LanguageContext'
import { strings } from '../../data/i18n'
import { projects } from '../../data/projects'
import ProjectSheet from './ProjectSheet'

export default function WorkSection() {
  const { t } = useLang()

  return (
    <section id="work" className="relative bg-board pb-20 pt-14 text-ink sm:pt-16">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        <header className="flex flex-col gap-4 border-b-2 border-ink/30 pb-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2
            className="max-w-[22ch] font-display leading-[0.94] tracking-[-0.035em]"
            style={{ fontSize: 'clamp(2rem, 4.8vw, 4rem)' }}
          >
            {t(strings.work.heading)}
          </h2>
          <p className="max-w-[38ch] font-cond text-[15px] uppercase leading-[1.45] tracking-[0.05em] text-ink-soft md:text-right">
            {t(strings.work.intro)}
          </p>
        </header>

        <div className="mt-10 flex flex-col gap-8">
          {projects.map((project, i) => (
            <div key={project.id} className={i % 2 ? 'md:ml-[5%]' : 'md:mr-[5%]'}>
              <ProjectSheet project={project} defaultOpen={i === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
