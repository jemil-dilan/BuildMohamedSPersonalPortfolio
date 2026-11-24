import type { CSSProperties, ElementType, ReactNode } from 'react'
import { tearPolygon } from '../lib/tear'

interface Props {
  children: ReactNode
  seed?: number
  amp?: number
  className?: string
  innerClassName?: string
  innerStyle?: CSSProperties
  as?: ElementType
}

/**
 * A sheet pasted on the wall: straight top edge, hand-torn bottom edge, and a
 * soft cast shadow that follows the tear rather than a rounded rectangle.
 */
export default function TornSheet({
  children,
  seed = 7,
  amp = 10,
  className = '',
  innerClassName = '',
  innerStyle,
  as: Tag = 'div',
}: Props) {
  return (
    <Tag className={`torn-sheet ${className}`}>
      <div
        className={`relative ${innerClassName}`}
        style={{ clipPath: tearPolygon(seed, amp), ...innerStyle }}
      >
        {children}
      </div>
    </Tag>
  )
}
