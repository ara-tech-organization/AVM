import { useCallback, useRef, useState } from 'react'
import { MoveHorizontal } from 'lucide-react'
import SmartImage from './SmartImage'
import { cn } from '../lib/cn'

/**
 * Drag-to-reveal before/after comparison. The "before" layer is clipped with
 * clip-path so both images stay perfectly aligned at any container size — no
 * ref measurement needed. Works with pointer, touch and keyboard.
 */
export default function BeforeAfterSlider({ before, after, alt = '', className }) {
  const [pos, setPos] = useState(50)
  const containerRef = useRef(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    e.currentTarget.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }
  const onPointerMove = (e) => {
    if (dragging.current) updateFromClientX(e.clientX)
  }
  const onPointerUp = () => {
    dragging.current = false
  }

  return (
    <div
      ref={containerRef}
      className={cn(
        'group relative select-none overflow-hidden rounded-3xl shadow-card',
        className
      )}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* After (base, full) */}
      <SmartImage src={after} alt={`${alt} after`} className="absolute inset-0 h-full w-full" />

      {/* Before (clipped to pos%) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <SmartImage src={before} alt={`${alt} before`} className="absolute inset-0 h-full w-full" />
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-brand-900/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-accent-500/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
        After
      </span>

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]"
        style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
      >
        <button
          type="button"
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') setPos((p) => Math.max(0, p - 4))
            if (e.key === 'ArrowRight') setPos((p) => Math.min(100, p + 4))
          }}
          className="absolute left-1/2 top-1/2 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white text-brand-700 shadow-float transition-transform duration-300 group-hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
        >
          <MoveHorizontal className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
