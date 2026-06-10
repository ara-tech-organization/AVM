import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

/**
 * Polymorphic premium button.
 * - `to`   → React Router <Link>
 * - `href` → native <a>
 * - else   → <button>
 *
 * Variants: primary | accent | outline | ghost | light
 * Sizes: sm | md | lg
 */
const VARIANTS = {
  primary:
    'bg-brand-600 text-white shadow-[0_10px_30px_-10px_rgba(67,59,157,0.55)] hover:bg-brand-700 hover:shadow-[0_16px_38px_-12px_rgba(67,59,157,0.65)]',
  accent:
    'bg-accent-500 text-white shadow-[0_10px_30px_-10px_rgba(237,28,36,0.5)] hover:bg-accent-600',
  outline:
    'border border-brand-200 bg-white text-brand-700 hover:border-brand-400 hover:bg-brand-50',
  ghost: 'text-brand-700 hover:bg-brand-50',
  light:
    'glass border border-white/40 text-white hover:bg-white/25',
  white:
    'bg-white text-brand-700 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.3)] hover:bg-brand-50',
}

const SIZES = {
  sm: 'h-10 px-4 text-sm gap-1.5',
  md: 'h-12 px-6 text-[0.95rem] gap-2',
  lg: 'h-[3.4rem] px-8 text-base gap-2.5',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  children,
  icon: Icon,
  iconRight = true,
  ...props
}) {
  const classes = cn(
    'group relative inline-flex select-none items-center justify-center rounded-full font-semibold tracking-tight transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60',
    VARIANTS[variant],
    SIZES[size],
    className
  )

  const content = (
    <>
      {Icon && !iconRight && (
        <Icon className="h-[1.15em] w-[1.15em] transition-transform duration-300 group-hover:-translate-x-0.5" />
      )}
      <span>{children}</span>
      {Icon && iconRight && (
        <Icon className="h-[1.15em] w-[1.15em] transition-transform duration-300 group-hover:translate-x-0.5" />
      )}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}
