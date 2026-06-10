import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

/**
 * AVM Smiles brandmark — a tooth glyph in brand purple with a single
 * red accent, paired with the wordmark. `tone="light"` renders white text
 * for use over the hero imagery; `tone="dark"` is the default.
 */
function ToothMark({ className }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="AVM Smiles"
    >
      <rect width="64" height="64" rx="16" fill="#433B9D" />
      <path
        d="M32 16.5c-3.2-2.4-7-3-10.2-1.6-3.7 1.6-5.8 5.5-5.8 10.3 0 4.2 1.1 8.6 2.6 12.9 1 2.9 1.6 5.8 2 8.2.4 2.4 2 3.7 3.6 3.5 1.7-.2 2.6-1.8 3-4.1.5-2.7 1-5.2 2.1-6.7.7-1 1.7-1.5 2.7-1.5s2 .5 2.7 1.5c1.1 1.5 1.6 4 2.1 6.7.4 2.3 1.3 3.9 3 4.1 1.6.2 3.2-1.1 3.6-3.5.4-2.4 1-5.3 2-8.2 1.5-4.3 2.6-8.7 2.6-12.9 0-4.8-2.1-8.7-5.8-10.3C39 13.5 35.2 14.1 32 16.5Z"
        fill="#fff"
      />
      <circle cx="45" cy="22" r="3.5" fill="#ED1C24" />
    </svg>
  )
}

export default function Logo({ tone = 'dark', className, withText = true }) {
  const isLight = tone === 'light'
  return (
    <Link
      to="/"
      aria-label="AVM Smiles — home"
      className={cn('group inline-flex items-center gap-3', className)}
    >
      <ToothMark className="h-10 w-10 shrink-0 rounded-[14px] shadow-sm transition-transform duration-500 group-hover:-rotate-6" />
      {withText && (
        <span className="flex flex-col leading-none">
          <span
            className={cn(
              'font-display text-[1.35rem] font-medium tracking-tight',
              isLight ? 'text-white' : 'text-ink'
            )}
          >
            AVM <span className="text-accent">Smiles</span>
          </span>
          <span
            className={cn(
              'mt-1 text-[0.62rem] font-semibold uppercase tracking-[0.32em]',
              isLight ? 'text-white/70' : 'text-muted'
            )}
          >
            Dental Excellence
          </span>
        </span>
      )}
    </Link>
  )
}
