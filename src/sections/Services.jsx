import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, CalendarDays, Clock } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SmartImage from '../components/SmartImage'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import services from '../data/services'
import { treatmentImages } from '../data/treatmentImages'

/**
 * Service card with real treatment photography. Image banner up top (icon +
 * duration overlaid), uniform 2-line description, and a footer pinned to the
 * bottom so every card's actions line up across the grid.
 */
function ServiceCard({ service }) {
  return (
    <motion.article
      variants={staggerItem}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
    >
      {/* Image banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <SmartImage
          src={treatmentImages[service.slug]}
          alt={service.name}
          className="absolute inset-0 h-full w-full"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-900/55 via-brand-900/5 to-transparent" />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-brand-700 backdrop-blur">
          <Clock className="h-3.5 w-3.5" />
          {service.duration}
        </span>
        <span className="absolute -bottom-6 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600 text-white shadow-[0_10px_24px_-10px_rgba(67,59,157,0.7)] ring-4 ring-white transition-transform duration-500 group-hover:scale-110">
          <service.icon className="h-6 w-6" />
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-9">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-500">
          {service.tagline}
        </p>
        <h3 className="mt-1.5 text-lg font-bold text-ink">{service.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{service.short}</p>

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
