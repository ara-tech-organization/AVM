/**
 * Shared Framer Motion variants + transitions.
 * Centralised so every section animates with the same elegant cadence.
 */

const EASE = [0.22, 1, 0.36, 1] // matches --ease-premium in index.css

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8, ease: EASE } },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: EASE },
  },
}

export const fadeLeft = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
}

export const fadeRight = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.75, ease: EASE } },
}

/** Parent that staggers its children. Pair with `staggerItem`. */
export const staggerParent = (stagger = 0.1, delayChildren = 0.05) => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
})

export const staggerItem = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

/**
 * Default viewport config used across scroll-reveal sections.
 * `amount: 'some'` triggers as soon as any part of the element enters the
 * viewport. A fixed (not percentage) bottom margin keeps the reveal reliable
 * on mobile, where stacked sections can be several screens tall — a fractional
 * threshold like 0.25 can never be met there, leaving the section invisible.
 */
export const viewportOnce = { once: true, amount: 'some', margin: '0px 0px -80px 0px' }

export const EASE_PREMIUM = EASE
