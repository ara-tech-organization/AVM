import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import services from '../data/services'

/**
 * Services shown as a clean, uniform responsive card grid.
 * Each card: icon, tagline, name, short description, duration + actions.
 */
function ServiceCard({ service }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-line bg-white p-6 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-card sm:p-7"
    >
      {/* Corner glow on hover */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand-200/0 blur-2xl transition-all duration-700 group-hover:bg-brand-200/40"
      />

      <div className="relative flex items-start justify-between gap-4">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-[0_10px_24px_-10px_rgba(67,59,157,0.7)] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
          <service.icon className="h-7 w-7" />
        </span>
        <span className="rounded-full border border-line bg-surface px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-muted">
          {service.duration}
        </span>
      </div>

      <div className="relative mt-5 flex-1">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-500">
          {service.tagline}
        </p>
        <h3 className="mt-2 text-xl font-bold text-ink">{service.name}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted">{service.short}</p>
      </div>

      <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-line/70 pt-4">
        <Link
          to={`/services/${service.slug}`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
        <Link
          to="/contact-us"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3.5 py-2 text-sm font-semibold text-accent-600 transition-colors hover:bg-accent-500 hover:text-white"
        >
          <CalendarDays className="h-4 w-4" />
          Book
        </Link>
      </div>
    </motion.article>
  )
}

export default function Services() {
  return (
    <Section id="services" tone="surface">
      <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          align="left"
          eyebrow="What we do"
          title="Our Dental Services"
          intro="From routine care to advanced restorations, every treatment is delivered with precision, comfort and a personal touch."
          className="lg:max-w-2xl"
        />
        <Link
          to="/services"
          className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-brand-200 bg-white px-5 py-3 text-sm font-semibold text-brand-700 transition-colors hover:border-brand-400 hover:bg-brand-50"
        >
          View All Services
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <motion.div
        variants={staggerParent(0.06)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </motion.div>
    </Section>
  )
}
