const PATHS = {
  a: 'M0 0 H1440 V19 L1389 12 L1367 25 L1332 26 L1297 29 L1258 22 L1233 26 L1211 30 L1174 30 L1147 28 L1124 31 L1101 36 L1077 30 L1049 34 L1015 24 L972 29 L954 25 L923 26 L900 24 L869 24 L835 43 L815 43 L783 31 L749 26 L716 29 L692 24 L661 25 L642 32 L620 28 L605 23 L581 19 L553 22 L513 29 L476 35 L455 25 L431 19 L413 18 L373 12 L339 12 L314 20 L288 22 L261 29 L223 32 L201 38 L187 32 L159 35 L120 22 L86 24 L46 26 L29 25 L6 26 L0 22 L0 22 Z',
  b: 'M0 0 H1440 V20 L1376 13 L1349 26 L1324 33 L1297 21 L1270 26 L1227 25 L1212 30 L1193 34 L1159 20 L1134 22 L1102 24 L1070 23 L1049 24 L1024 30 L982 32 L947 44 L906 32 L868 29 L843 25 L816 40 L800 38 L776 37 L741 26 L701 29 L683 44 L650 38 L633 30 L591 31 L551 30 L530 33 L516 25 L489 31 L461 31 L442 25 L407 32 L368 39 L346 25 L307 31 L266 42 L229 29 L193 34 L166 39 L128 37 L106 28 L81 31 L55 29 L16 23 L0 23 L0 23 Z',
  c: 'M0 0 H1440 V26 L1388 29 L1364 30 L1341 26 L1325 25 L1284 22 L1248 23 L1233 24 L1217 29 L1175 23 L1138 17 L1115 23 L1092 25 L1061 22 L1037 27 L995 34 L967 22 L934 28 L905 33 L879 20 L842 34 L811 21 L769 23 L742 16 L713 14 L693 16 L656 36 L631 29 L612 30 L579 25 L553 24 L517 21 L488 35 L473 27 L437 32 L406 27 L380 38 L351 38 L316 35 L283 24 L242 27 L223 25 L190 29 L161 33 L139 28 L108 24 L89 21 L75 24 L49 20 L14 18 L0 14 L0 14 Z',
}

/**
 * The tear alone, without the straight top edge and the closing segment, so the
 * chalk lip is drawn along the torn contour only.
 */
function tearLine(d: string) {
  return d.replace(/^M0 0 H1440 V(\d+) /, 'M1440 $1 ').replace(/ L0 \d+ Z$/, '')
}

type Props = {
  /** Fill colour of the paper doing the tearing. */
  color: string
  /** `bottom` = jagged bottom edge. `top` flips the edge for a torn top. */
  side?: 'top' | 'bottom'
  variant?: keyof typeof PATHS
  className?: string
  lip?: boolean
}

export default function TornEdge({
  color,
  side = 'bottom',
  variant = 'a',
  className = '',
  lip = true,
}: Props) {
  return (
    <svg
      viewBox="0 0 1440 56"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`w-full ${className}`}
      style={side === 'top' ? { transform: 'scaleY(-1)' } : undefined}
    >
      <path d={PATHS[variant]} fill={color} />
      {lip && (
        <path
          d={tearLine(PATHS[variant])}
          fill="none"
          stroke="#EDE7D8"
          strokeOpacity="0.28"
          strokeWidth="2.5"
          vectorEffect="non-scaling-stroke"
        />
      )}
    </svg>
  )
}
