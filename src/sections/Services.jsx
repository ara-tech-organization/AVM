import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import services from '../data/services'

/**
 * Uniform service card. Icon + name aligned on one row, a 2-line clamped
 * description for even heights, and a footer pinned to the bottom (mt-auto)
 * so every card's actions line up across the grid.
 */
function ServiceCard({ service }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex h-full flex-col rounded-3xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card sm:p-7"
    >
      {/* Header row */}
      <div className="flex items-center gap-4">
        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
          <service.icon className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-bold text-ink">{service.name}</h3>
          <p className="mt-0.5 flex items-center gap-1.5 text-xs font-medium text-muted">
            <Clock className="h-3.5 w-3.5" />
            {service.duration}
          </p>
        </div>
      </div>

      {/* Description (uniform 2 lines) */}
      <p className="mt-4 line-clamp-2 text-sm leading-relaxed text-muted">{service.short}</p>

      {/* Footer pinned to bottom */}
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-line/70 pt-4">
        <Link
          to={`/services/${service.slug}`}
          className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700"
        >
          Read More
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
        <Link
          to="/contact-us"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3.5 py-1.5 text-sm font-semibold text-accent-600 transition-colors hover:bg-accent-500 hover:text-white"
        >
          <CalendarDays className="h-3.5 w-3.5" />
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
