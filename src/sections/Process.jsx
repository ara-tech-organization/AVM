import { motion } from 'framer-motion'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { processSteps } from '../data/process'

/**
 * Horizontal connected timeline on desktop; vertical progression on mobile.
 */
export default function Process() {
  return (
    <Section id="process" tone="white">
      <SectionHeading
        eyebrow="How it works"
        title="Simple Steps to a Healthier Smile"
        intro="A clear, comfortable journey from your first consultation to long-term care — with you informed at every step."
      />

      <motion.ol
        variants={staggerParent(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative mt-14"
      >
        {/* Desktop connector line */}
        <div
          aria-hidden="true"
          className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-brand-100 via-brand-300 to-brand-100 lg:block"
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-6">
          {processSteps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={staggerItem}
              className="relative flex gap-5 lg:flex-col lg:gap-0 lg:text-center"
            >
              {/* Mobile vertical connector */}
              {i < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-[2.2rem] top-16 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-brand-200 to-transparent lg:hidden"
                />
              )}

              <div className="relative z-10 shrink-0 lg:mx-auto">
                <div className="relative inline-flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-brand-100 bg-white text-brand-600 shadow-soft">
                  <step.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent-500 text-xs font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                </div>
              </div>

              <div className="pt-1 lg:mt-6 lg:pt-0">
                <h3 className="text-lg font-bold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted lg:mx-auto lg:max-w-[14rem]">
                  {step.desc}
                </p>
              </div>
            </motion.li>
          ))}
        </div>
      </motion.ol>
    </Section>
  )
}
