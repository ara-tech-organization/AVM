import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Counts up to `value` once scrolled into view.
 * `prefix`/`suffix` wrap the number (e.g. "10,000" + "+").
 */
export default function Counter({ value = 0, duration = 1.6, prefix = '', suffix = '', className }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    let start
    const ease = (t) => 1 - Math.pow(1 - t, 3)
    const step = (ts) => {
      if (start === undefined) start = ts
      const progress = Math.min((ts - start) / (duration * 1000), 1)
      setDisplay(Math.floor(ease(progress) * value))
      if (progress < 1) raf = requestAnimationFrame(step)
      else setDisplay(value)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}
