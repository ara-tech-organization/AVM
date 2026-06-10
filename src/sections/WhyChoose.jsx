import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import SmartImage from '../components/SmartImage'
import Button from '../components/Button'
import { fadeRight, staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { whyChoose } from '../data/whyChoose'
import images from '../data/images'

/**
 * Split-screen editorial layout — a sticky visual statement on the left, an
 * alternating numbered feature list on the right (deliberately not a card grid).
 */
export default function WhyChoose() {
  return (
    <Section id="why-choose" tone="white">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — sticky statement + image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5"
        >
          <div className="lg:sticky lg:top-28">
            <Eyebrow>Why AVM Smiles</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">
              A higher standard of dental care
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Everything we do is built around precision, comfort and trust — so
              every visit leaves you with a healthier, more confident smile.
            </p>

            <div className="relative mt-8 overflow-hidden rounded-[2rem] shadow-card">
              <SmartImage
                src={images.whyEnvironment}
                alt="Calm, modern treatment room at AVM Smiles"
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6 text-white">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur">
                  <ShieldCheck className="h-3.5 w-3.5" /> Trusted by 25,000+ patients
                </span>
                <h3 className="mt-3 font-display text-2xl font-medium">
                  Where comfort meets clinical excellence
                </h3>
              </div>
            </div>

            <div className="mt-8 hidden lg:block">
              <Button to="/contact-us" variant="primary" icon={ArrowRight}>
                Book a Consultation
              </Button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT — numbered feature list */}
        <motion.ul
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-7"
        >
          {whyChoose.map((item, i) => (
            <motion.li
              key={item.title}
              variants={staggerItem}
              className="group flex items-start gap-5 border-t border-line py-7 last:border-b sm:gap-7"
            >
              {/* Index */}
              <span className="font-display text-xl font-medium text-brand-200 tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Icon */}
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white">
                <item.icon className="h-6 w-6" />
              </span>

              {/* Copy */}
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.desc}</p>
              </div>

              {/* Stat */}
              <div className="hidden shrink-0 pl-4 text-right sm:block">
                <p className="text-2xl font-extrabold leading-none text-brand-700">{item.stat}</p>
                <p className="mt-1 text-[0.68rem] font-medium uppercase tracking-wide text-muted">
                  {item.statLabel}
                </p>
              </div>
            </motion.li>
          ))}

          <li className="mt-8 lg:hidden">
            <Button to="/contact-us" variant="primary" icon={ArrowRight} className="w-full">
              Book a Consultation
            </Button>
          </li>
        </motion.ul>
      </div>
    </Section>
  )
}
