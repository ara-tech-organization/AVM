import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SmartImage from '../components/SmartImage'
import Button from '../components/Button'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { aboutTiles } from '../data/about'
import images from '../data/images'

const [philosophy, ...rest] = aboutTiles

export default function About() {
  return (
    <Section id="about" tone="white">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
        <SectionHeading
          align="left"
          className="lg:col-span-7"
          eyebrow="About AVM Smiles"
          title="Your Trusted Partner for Complete Dental Care"
          intro="At AVM Smiles, we are focused on delivering the best dental clinic services in Chennai with modern dental treatments, caring service, and excellent patient experiences."
        />
        <div className="lg:col-span-5 lg:pb-2 lg:text-right">
          <Button to="/about-us" variant="outline" icon={ArrowRight}>
            More About Our Clinic
          </Button>
        </div>
      </div>

      {/* Bento */}
      <motion.div
        variants={staggerParent(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid auto-rows-[185px] grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4"
      >
        {/* Large brand tile — Patient Care Philosophy */}
        <motion.article
          variants={staggerItem}
          className="group relative col-span-2 row-span-2 flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-600 p-7 text-white shadow-card"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-2xl transition-transform duration-700 group-hover:scale-125"
          />
          <div className="relative">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/20">
              <philosophy.icon className="h-6 w-6" />
            </span>
          </div>
          <div className="relative">
            <h3 className="font-display text-2xl font-medium sm:text-[1.75rem]">
              {philosophy.title}
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
              {philosophy.desc}
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-white/90 transition-transform duration-300 group-hover:translate-x-1">
              Care that feels personal
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </motion.article>

        {/* Image tile */}
        <motion.div
          variants={staggerItem}
          className="relative col-span-2 overflow-hidden rounded-3xl shadow-card"
        >
          <SmartImage
            src={images.aboutCare}
            alt="Dentist caring for a patient at AVM Smiles"
            className="h-full w-full"
            imgClassName="transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-brand-900/5 to-transparent" />
          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
              Inside the clinic
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              Comfort-first dental care
            </p>
          </div>
        </motion.div>

        {/* Remaining content tiles */}
        {rest.map((tile, i) => (
          <motion.article
            key={tile.title}
            variants={staggerItem}
            className={`group flex flex-col justify-between overflow-hidden rounded-3xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card ${
              i === rest.length - 1 ? 'col-span-2' : ''
            }`}
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft ring-1 ring-line transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
              <tile.icon className="h-5 w-5" />
            </span>
            <div className="mt-4">
              <h3 className="text-base font-bold text-ink">{tile.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{tile.desc}</p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </Section>
  )
}
