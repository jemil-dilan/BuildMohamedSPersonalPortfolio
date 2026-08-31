import { useRef, useState, useEffect } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'
import { useLang } from '../context/LanguageContext'

export interface FlowNode {
  id: string
  label: string
  sublabel?: string
  tooltip: { fr: string; en: string }
  type?: 'entry' | 'service' | 'data'
}

interface RequestFlowProps {
  nodes: FlowNode[]
  entryLabel: string
  caption?: { fr: string; en: string }
}

const typeStyles = {
  entry:   { dot: '#2A5744', border: '#2A5744', bg: '#E9F2EE' },
  service: { dot: '#9B958E', border: '#D8D3C8', bg: 'transparent' },
  data:    { dot: '#5C5850', border: '#5C5850', bg: '#F2EFE9' },
}

export default function RequestFlow({ nodes, entryLabel, caption }: RequestFlowProps) {
  const { t } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [dotProgress, setDotProgress] = useState(0)
  const [dotDone, setDotDone] = useState(false)
  const prefersReduced = useReducedMotion()

  useEffect(() => {
    if (!inView || prefersReduced) {
      setDotProgress(1)
      setDotDone(true)
      return
    }
    let raf: number
    let start: number | null = null
    const duration = 2600
    const delay = nodes.length * 110 + 600

    const run = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      // ease in-out cubic
      const eased = p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2
      setDotProgress(eased)
      if (p < 1) raf = requestAnimationFrame(run)
      else setDotDone(true)
    }

    const timer = setTimeout(() => { raf = requestAnimationFrame(run) }, delay)
    return () => { clearTimeout(timer); cancelAnimationFrame(raf) }
  }, [inView, nodes.length, prefersReduced])

  const NODE_H = 58
  const NODE_W = 260
  const GAP = 18
  const DOT_X = 10
  const totalH = nodes.length * NODE_H + (nodes.length - 1) * GAP + 4

  // Path centre-x for the vertical line (left side, where the dot travels)
  const lineX = DOT_X
  const pathPoints = nodes.map((_, i) => ({
    x: lineX,
    y: i * (NODE_H + GAP) + NODE_H / 2,
  }))
  const dotY = pathPoints.length >= 2
    ? pathPoints[0].y + dotProgress * (pathPoints[pathPoints.length - 1].y - pathPoints[0].y)
    : pathPoints[0]?.y ?? 0

  return (
    <div ref={ref} className="flex flex-col">
      {/* Mobile: clean text list */}
      <div className="flex md:hidden flex-col gap-3">
        {nodes.map((node, i) => {
          const s = typeStyles[node.type ?? 'service']
          return (
            <motion.div
              key={node.id}
              initial={prefersReduced ? false : { opacity: 0, y: 6 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.28 }}
              className="flex items-start gap-3"
            >
              <div
                className="mt-1 w-3 h-3 rounded-full shrink-0 border"
                style={{ borderColor: s.dot, background: s.bg }}
              />
              <div>
                <div className="font-mono text-xs text-ink leading-tight">{node.label}</div>
                {node.sublabel && <div className="font-body text-[11px] text-ink-faint mt-0.5">{node.sublabel}</div>}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Desktop: SVG schematic */}
      <div className="hidden md:block relative select-none" style={{ width: NODE_W, height: totalH }}>
        {/* SVG connector */}
        <svg
          width={NODE_W}
          height={totalH}
          viewBox={`0 0 ${NODE_W} ${totalH}`}
          className="absolute inset-0"
          aria-hidden="true"
        >
          {/* Vertical rail */}
          <motion.line
            x1={lineX} y1={pathPoints[0]?.y ?? 0}
            x2={lineX} y2={pathPoints[pathPoints.length - 1]?.y ?? 0}
            stroke="#D8D3C8"
            strokeWidth={1.5}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: prefersReduced ? 0 : 0.9, ease: 'easeInOut' }}
          />

          {/* Dot connectors from rail to nodes */}
          {nodes.map((_, i) => (
            <motion.line
              key={i}
              x1={lineX + 4} y1={pathPoints[i].y}
              x2={24} y2={pathPoints[i].y}
              stroke="#D8D3C8"
              strokeWidth={1}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={inView ? { opacity: 1, scaleX: 1 } : {}}
              style={{ transformOrigin: `${lineX}px ${pathPoints[i].y}px` }}
              transition={{ delay: prefersReduced ? 0 : i * 0.11 + 0.4, duration: 0.2 }}
            />
          ))}

          {/* Rail nodes */}
          {nodes.map((node, i) => {
            const s = typeStyles[node.type ?? 'service']
            return (
              <motion.circle
                key={node.id}
                cx={lineX} cy={pathPoints[i].y} r={4}
                fill={s.dot}
                initial={{ scale: 0, opacity: 0 }}
                animate={inView ? { scale: 1, opacity: 1 } : {}}
                style={{ transformOrigin: `${lineX}px ${pathPoints[i].y}px` }}
                transition={{ delay: prefersReduced ? 0 : i * 0.11 + 0.35, duration: 0.22, type: 'spring', stiffness: 300 }}
              />
            )
          })}

          {/* Travelling dot */}
          {inView && !prefersReduced && dotProgress > 0 && (
            <g>
              <circle cx={lineX} cy={dotY} r={dotDone ? 5 : 4} fill="#2A5744" opacity={dotDone ? 0 : 0.9}>
                {dotDone && (
                  <animate attributeName="opacity" values="0.9;0;0.9" dur="2s" repeatCount="indefinite" />
                )}
              </circle>
              {!dotDone && (
                <circle cx={lineX} cy={dotY} r={8} fill="#2A5744" opacity={0.15} />
              )}
            </g>
          )}
        </svg>

        {/* Node labels */}
        {nodes.map((node, i) => {
          const s = typeStyles[node.type ?? 'service']
          const y = i * (NODE_H + GAP)
          const isHovered = hoveredNode === node.id
          return (
            <div
              key={node.id}
              style={{ position: 'absolute', top: y, left: 26, right: 0, height: NODE_H }}
              className="flex items-center"
            >
              <motion.button
                initial={prefersReduced ? false : { opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.11 + 0.3, duration: 0.28 }}
                className="text-left group relative"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                aria-label={node.label}
                style={{ outline: 'none' }}
              >
                <div
                  className={`border rounded-sm px-2.5 py-1.5 transition-all duration-150 ${isHovered ? 'shadow-sm' : ''}`}
                  style={{
                    borderColor: isHovered ? s.dot : '#D8D3C8',
                    background: isHovered ? s.bg : 'transparent',
                  }}
                >
                  <div className="font-mono text-[11px] font-medium text-ink leading-tight">
                    {node.label}
                  </div>
                  {node.sublabel && (
                    <div className="font-body text-[10px] text-ink-faint mt-0.5 leading-tight">
                      {node.sublabel}
                    </div>
                  )}
                </div>

                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-full ml-3 top-1/2 -translate-y-1/2 z-20 bg-ink text-paper text-[11px] font-body px-3 py-2 rounded shadow-lg max-w-[200px] leading-snug"
                    style={{ whiteSpace: 'normal' }}
                  >
                    {t(node.tooltip)}
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-ink" />
                  </motion.div>
                )}
              </motion.button>
            </div>
          )
        })}
      </div>

      {caption && (
        <p className="mt-3 font-body text-[11px] text-ink-faint italic">{t(caption)}</p>
      )}
    </div>
  )
}
