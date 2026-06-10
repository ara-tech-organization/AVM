import { cn } from '../lib/cn'
import Container from './Container'

/**
 * Vertical rhythm wrapper for page sections.
 * `tone` controls the background surface; `bare` skips the inner Container.
 */
const TONES = {
  white: 'bg-white',
  surface: 'bg-surface',
  section: 'bg-section',
  brand: 'bg-brand-600 text-white',
}

export default function Section({
  id,
  tone = 'white',
  className,
  containerClassName,
  bare = false,
  children,
}) {
  return (
    <section
      id={id}
      className={cn('relative py-20 sm:py-24 lg:py-32', TONES[tone], className)}
    >
      {bare ? children : <Container className={containerClassName}>{children}</Container>}
    </section>
  )
}
