import { cn } from '../lib/cn'

/** Small uppercase label that sits above section headings. */
export default function Eyebrow({ children, tone = 'brand', className }) {
  const palette =
    tone === 'light'
      ? 'text-white/80 before:bg-white/40'
      : 'text-brand-600 before:bg-accent'
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.24em] before:h-px before:w-7 before:content-[""]',
        palette,
        className
      )}
    >
      {children}
    </span>
  )
}
