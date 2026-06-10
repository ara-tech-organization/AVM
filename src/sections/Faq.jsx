import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus, MessageCircle } from 'lucide-react'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import faqs from '../data/faqs'

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      variants={staggerItem}
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen ? 'border-brand-200 bg-brand-50/50' : 'border-line bg-white'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold text-ink sm:text-lg">{item.q}</span>
        <span
          className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'
          }`}
        >
          <Plus className="h-4 w-4" />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-6 text-[0.95rem] leading-relaxed text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <Section id="faq" tone="surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Left intro */}
        <div className="lg:col-span-4">
          <Eyebrow>Good to know</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-muted">
            Everything you need to know about dental care at AVM Smiles. Can’t find
            your answer? Our team is happy to help.
          </p>
          <div className="mt-7 rounded-3xl border border-line bg-white p-6 shadow-soft">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
              <MessageCircle className="h-5 w-5" />
            </span>
            <p className="mt-4 font-semibold text-ink">Still have questions?</p>
            <p className="mt-1 text-sm text-muted">
              Talk to our friendly team about your dental needs.
            </p>
            <div className="mt-5">
              <Button to="/contact-us" variant="primary">
                Ask a Question
              </Button>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <motion.div
          variants={staggerParent(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col gap-3.5 lg:col-span-8"
        >
          {faqs.map((item, i) => (
            <FaqItem
              key={item.q}
              item={item}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
