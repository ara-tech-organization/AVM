import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import SmartImage from '../components/SmartImage'
import { fadeUp, viewportOnce } from '../lib/motion'
import services from '../data/services'
import images from '../data/images'

/**
 * Editorial "services index" — a magazine-style split layout.
 * Left: a sticky pane whose image + label track the hovered row.
 * Right: a full-width list of services with alternating tones (no card grid).
 */
export default function Services() {
  const [active, setActive] = useState(0)
  const current = services[active]

  return (
    <Section id="services" tone="surface">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — sticky visual pane */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">
              Our Dental Services
            </h2>
            <p className="mt-4 max-w-md text-muted">
              From routine care to advanced restorations — explore each treatment
              and book the care that’s right for you.
            </p>

            {/* Reactive preview image */}
            <div className="relative mt-8 hidden overflow-hidden rounded-[2rem] shadow-card lg:block">
              <div className="aspect-[4/3] w-full">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <SmartImage
                      src={images.serviceImages[active]}
                      alt={current.name}
                      className="absolute inset-0 h-full w-full"
                    />
                  </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/10 to-transparent" />
                <div className="absolute inset-x-6 bottom-6 text-white">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
                    <current.icon className="h-3.5 w-3.5" />
                    {current.tagline}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-medium">{current.name}</h3>
                </div>
              </div>
            </div>

            <div className="mt-8 hidden lg:block">
              <Button to="/services" variant="outline" icon={ArrowUpRight}>
                View All Services
              </Button>
            </div>
          </div>
        </div>

        {/* RIGHT — editorial list */}
        <motion.ul
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          {services.map((service, i) => {
            const isActive = i === active
            return (
              <li
                key={service.slug}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group relative border-t border-line transition-colors duration-300 last:border-b ${
                  isActive ? 'bg-white' : 'bg-transparent hover:bg-white/60'
                }`}
              >
                {/* Active accent bar */}
                <span
                  className={`absolute left-0 top-0 h-full w-0.5 bg-accent-500 transition-transform duration-300 ${
                    isActive ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />
                <div className="flex flex-col gap-4 px-2 py-6 sm:flex-row sm:items-center sm:gap-6 sm:px-5 sm:py-7">
                  {/* Index */}
                  <span
                    className={`font-display text-2xl font-medium tabular-nums transition-colors duration-300 ${
                      isActive ? 'text-accent-500' : 'text-brand-200'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Icon */}
                  <span
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-600 text-white shadow-[0_10px_24px_-10px_rgba(67,59,157,0.7)]'
                        : 'bg-brand-50 text-brand-600'
                    }`}
                  >
                    <service.icon className="h-6 w-6" />
                  </span>

                  {/* Name + desc */}
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <Link
                        to={`/services/${service.slug}`}
                        className="text-lg font-bold text-ink transition-colors group-hover:text-brand-700"
                      >
                        {service.name}
                      </Link>
                      <span className="hidden rounded-full border border-line bg-surface px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted sm:inline">
                        {service.duration}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{service.short}</p>
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end lg:flex-row lg:items-center">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <Link
                      to="/contact-us"
                      className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3.5 py-2 text-sm font-semibold text-accent-600 transition-colors hover:bg-accent-500 hover:text-white"
                    >
                      <CalendarDays className="h-4 w-4" />
                      Book
                    </Link>
                  </div>
                </div>
              </li>
            )
          })}

          {/* Mobile CTA */}
          <li className="mt-8 lg:hidden">
            <Button to="/services" variant="outline" icon={ArrowUpRight} className="w-full">
              View All Services
            </Button>
          </li>
        </motion.ul>
      </div>
    </Section>
  )
}
