import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, CalendarDays, Menu, X } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import Button from './Button'
import { cn } from '../lib/cn'
import { navLinks, site } from '../data/site'

/**
 * Sticky header. Transparent over the hero, turns into a frosted-white bar on
 * scroll. Collapses into an animated drawer on mobile.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Pages without a dark hero behind the header always show the solid bar.
  const overHero = pathname === '/'
  const solid = scrolled || !overHero || open

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)
  const linkTone = solid ? 'text-ink/80' : 'text-white/85'

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        solid
          ? 'border-b border-line/70 bg-white/85 py-3 backdrop-blur-xl shadow-[0_8px_30px_-18px_rgba(40,36,89,0.25)]'
          : 'border-b border-transparent py-5'
      )}
    >
      <Container className="flex items-center justify-between gap-4">
        <Logo tone={solid ? 'dark' : 'light'} />

        {/* Center nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                cn(
                  'relative rounded-full px-4 py-2 text-[0.95rem] font-medium transition-colors duration-300',
                  isActive
                    ? solid
                      ? 'text-brand-700'
                      : 'text-white'
                    : cn(linkTone, solid ? 'hover:text-brand-700' : 'hover:text-white')
                )
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className={cn(
                        'absolute inset-0 -z-10 rounded-full',
                        solid ? 'bg-brand-50' : 'bg-white/15'
                      )}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            href={site.phoneHref}
            variant={solid ? 'outline' : 'light'}
            size="sm"
            icon={Phone}
            iconRight={false}
          >
            Call Now
          </Button>
          <Button to="/contact-us" variant="accent" size="sm" icon={CalendarDays} iconRight={false}>
            Book Appointment
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-full border transition-colors lg:hidden',
            solid
              ? 'border-line bg-white text-ink'
              : 'border-white/30 bg-white/10 text-white'
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden"
          >
            <Container className="pb-6 pt-4">
              <nav className="flex flex-col gap-1 rounded-3xl border border-line bg-white p-3 shadow-card">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      cn(
                        'rounded-2xl px-4 py-3 text-base font-medium transition-colors',
                        isActive
                          ? 'bg-brand-50 text-brand-700'
                          : 'text-ink/80 hover:bg-surface'
                      )
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-2 grid grid-cols-2 gap-2.5 p-1">
                  <Button href={site.phoneHref} variant="outline" size="sm" icon={Phone} iconRight={false} onClick={closeMenu}>
                    Call
                  </Button>
                  <Button to="/contact-us" variant="accent" size="sm" icon={CalendarDays} iconRight={false} onClick={closeMenu}>
                    Book
                  </Button>
                </div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
