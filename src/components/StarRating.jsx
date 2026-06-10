import { Star } from 'lucide-react'
import { cn } from '../lib/cn'

/** Row of filled stars. `value` 1-5, defaults to a full 5. */
export default function StarRating({ value = 5, className, starClassName }) {
  return (
    <div
      className={cn('inline-flex items-center gap-0.5', className)}
      aria-label={`${value} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            'h-4 w-4',
            i < value ? 'fill-amber-400 text-amber-400' : 'fill-line text-line',
            starClassName
          )}
        />
      ))}
    </div>
  )
}
