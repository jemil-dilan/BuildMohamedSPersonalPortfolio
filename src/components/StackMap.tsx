import { useMemo, useState, type CSSProperties } from "react"
import { useLang } from "../context/LanguageContext"
import { strings } from "../data/i18n"
import { stackGroups, stackItems, type StackItem } from "../data/stack"
import TornEdge from "./TornEdge"

const tilts = [-1.2, 0.7, -0.4, 1.1, -0.8, 0.3, 1.4, -1.5, 0.5, -0.9, 1.2, -0.3]

export default function StackMap() {
  const { t } = useLang()
  const [active, setActive] = useState<string | null>(null)
  const s = strings.stack

  const activeItem = stackItems.find((i) => i.name === active) ?? null

  const connected = useMemo(() => {
    if (!active || !activeItem) return new Set<string>()
    const set = new Set<string>(activeItem.connects)
    stackItems.forEach((i) => {
      if (i.connects.includes(active)) set.add(i.name)
    })
    set.delete(active)
    return set
  }, [active, activeItem])

  const dailyByGroup = stackGroups
    .map((group) => ({
      group,
      items: stackItems.filter((i) => i.tier === "daily" && i.group === group),
    }))
    .filter((g) => g.items.length > 0)

  const workingByGroup = stackGroups
    .map((group) => ({
      group,
      items: stackItems.filter(
        (i) => i.tier === "working" && i.group === group,
      ),
    }))
    .filter((g) => g.items.length > 0)

  function renderSticker(item: StackItem, i: number, daily: boolean) {
    const isActive = active === item.name
    const isConnected = connected.has(item.name)
    const base = isActive
      ? "border-red bg-red text-chalk"
      : daily
        ? "border-ink bg-ink text-chalk"
        : "border-ink/45 bg-chalk text-ink"
    const ring = isConnected
      ? "ring-2 ring-red ring-offset-1 ring-offset-board"
      : ""

    return (
      <button
        key={item.name}
        type="button"
        aria-pressed={isActive}
        aria-describedby="stack-readout"
        onMouseEnter={() => setActive(item.name)}
        onMouseLeave={() =>
          setActive((current) => (current === item.name ? null : current))
        }
        onFocus={() => setActive(item.name)}
        onBlur={() =>
          setActive((current) => (current === item.name ? null : current))
        }
        onClick={() =>
          setActive((current) => (current === item.name ? null : item.name))
        }
        className={`sticker inline-flex cursor-pointer items-center border px-2.5 py-1.5 font-label text-[10px] uppercase leading-none tracking-[0.04em] sm:text-[10.5px] ${base} ${ring}`}
        style={{ "--rot": `${tilts[i % tilts.length]}deg` } as CSSProperties}
      >
        {item.name}
      </button>
    )
  }

  return (
    <section
      id="stack"
      className="relative bg-board pb-20 pt-14 text-ink sm:pt-16"
    >
      <TornEdge
        color="var(--color-chalk)"
        variant="b"
        className="absolute inset-x-0 top-0 h-10"
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6">
        <header className="flex flex-col gap-4 border-b-2 border-ink/30 pb-4 md:flex-row md:items-end md:justify-between md:gap-10">
          <h2
            className="max-w-[18ch] font-display leading-[0.94] tracking-[-0.035em]"
            style={{ fontSize: "clamp(2rem, 4.8vw, 4rem)" }}
          >
            {t(s.heading)}
          </h2>
          <p className="max-w-[42ch] font-cond text-[15px] uppercase leading-[1.45] tracking-[0.05em] text-ink-soft md:text-right">
            {t(s.note)}
          </p>
        </header>

        <div className="mt-6 flex min-h-[54px] flex-col gap-1 border-b border-ink/25 py-3 sm:flex-row sm:items-baseline sm:gap-4">
          <span className="shrink-0 font-label text-[9px] uppercase tracking-[0.18em] text-ink-faint">
            {active ? t(s.connects) : t(s.readout)}
          </span>
          <p
            id="stack-readout"
            aria-live="polite"
            className="text-[13px] leading-[1.55] text-ink-soft"
          >
            {active && activeItem
              ? connected.size > 0
                ? Array.from(connected).join(" · ")
                : t(s.noConnects)
              : t(s.hint)}
          </p>
        </div>

        <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-14">
          {[
            {
              key: "daily",
              title: s.daily,
              note: s.dailyNote,
              groups: dailyByGroup,
              daily: true,
            },
            {
              key: "working",
              title: s.working,
              note: s.workingNote,
              groups: workingByGroup,
              daily: false,
            },
          ].map((tier) => (
            <div key={tier.key}>
              <div className="flex flex-col gap-1 border-b border-ink/25 pb-2.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3">
                <h3 className="font-display text-[19px] leading-none tracking-[-0.02em] text-ink">
                  {t(tier.title)}
                </h3>
                <p className="max-w-[38ch] font-label text-[9px] uppercase leading-relaxed tracking-[0.06em] text-ink-faint">
                  {t(tier.note)}
                </p>
              </div>

              <div className="mt-5 space-y-5">
                {tier.groups.map(({ group, items }, gi) => (
                  <div key={group}>
                    <p className="font-label text-[8.5px] uppercase tracking-[0.18em] text-ink-faint">
                      {group}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-x-2 gap-y-2.5">
                      {items.map((item, ii) =>
                        renderSticker(item, gi * 5 + ii, tier.daily),
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink/25 pt-4 font-label text-[9px] uppercase tracking-[0.08em] text-ink-faint">
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-3.5 w-5 border border-ink bg-ink"
            />
            {t(s.daily)}
          </span>
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-3.5 w-5 border border-ink/45 bg-chalk"
            />
            {t(s.working)}
          </span>
          <span className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-3.5 w-5 border border-red bg-red"
            />
            {t(s.legendConnected)}
          </span>
        </div>
      </div>
    </section>
  )
}
