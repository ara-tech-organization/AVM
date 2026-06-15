import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'
import logo from '../assets/logo.png'

/**
 * AVM Smiles brand logo. Uses the official lockup image.
 * `tone` is accepted for API compatibility with the header (which used to
 * swap a light/dark wordmark) but the single colour logo reads on both.
 */
export default function Logo({ className, imgClassName }) {
  return (
    <Link
      to="/"
      aria-label="AVM Smiles — Dental Wellness, home"
      className={cn('inline-flex items-center', className)}
    >
      <img
        src={logo}
        alt="AVM Smiles — Dental Wellness"
        className={cn('h-12 w-auto select-none sm:h-14', imgClassName)}
        draggable="false"
      />
    </Link>
  )
}
