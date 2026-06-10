import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import Container from './Container'
import { fadeUp } from '../lib/motion'

/**
 * Compact inner-page hero with breadcrumb. The header turns solid on these
 * pages, so we add top padding to clear it.
 */
export default function PageHeader({ eyebrow, title, intro, crumbs = [] }) {
  return (
    <section className="relative overflow-hidden bg-brand-900 pb-16 pt-32 sm:pb-20 sm:pt-36">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-10 h-72 w-72 rounded-full bg-brand-600/40 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-accent-600/20 blur-[120px]"
      />

      <Container className="relative">
        <motion.div variants={fadeUp} initial="hidden" animate="show">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-sm text-white/60">
            <Link to="/" className="hover:text-white">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="h-3.5 w-3.5" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-white">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white/90">{c.label}</span>
                )}
              </span>
            ))}
          </nav>

          {eyebrow && (
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.24em] text-accent-400">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
            {title}
          </h1>
          {intro && <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{intro}</p>}
        </motion.div>
      </Container>
    </section>
  )
}
