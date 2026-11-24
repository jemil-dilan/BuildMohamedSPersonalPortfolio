function rng(seed: number) {
  let s = seed >>> 0
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
}

/**
 * A deterministic hand-torn bottom edge. The top edge stays straight, the way
 * a poster is pasted flat and torn back from the bottom. The tear walks with
 * irregular steps and a wandering depth so it never reads as a sawtooth.
 */
export function tearPolygon(seed: number, amp = 10) {
  const r = rng(seed)
  const pts: string[] = ['0% 0%', '100% 0%']
  let x = 100
  let depth = amp * 0.35

  while (x > 0) {
    const step = 0.6 + r() * 2.6
    x = Math.max(0, x - step)

    const drift = (r() - 0.5) * 0.9
    depth = Math.min(amp, Math.max(amp * 0.08, depth + drift * amp * 0.5))
    if (r() < 0.07) depth = Math.min(amp, depth + amp * 0.55)

    pts.push(`${x.toFixed(2)}% calc(100% - ${depth.toFixed(1)}px)`)
  }

  return `polygon(${pts.join(', ')})`
}
