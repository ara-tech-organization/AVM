import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import Section from '../components/Section'
import Eyebrow from '../components/Eyebrow'
import Button from '../components/Button'
import SmartImage from '../components/SmartImage'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import { fadeLeft, viewportOnce } from '../lib/motion'
import transformations from '../data/gallery'

/**
 * Split-screen showcase: a single large drag-to-reveal slider on the left,
 * editorial copy and a thumbnail case selector on the right.
 */
export default function BeforeAfter() {
  const [active, setActive] = useState(0)
  const current = transformations[active]

  return (
    <Section id="gallery" tone="section">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — featured slider */}
        <motion.div
          key={current.id}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <BeforeAfterSlider
            before={current.before}
            after={current.after}
            alt={current.title}
            className="aspect-[16/12] sm:aspect-[16/11]"
          />
        </motion.div>

        {/* RIGHT — editorial copy + selector */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="lg:col-span-5"
        >
          <Eyebrow>Real Patient Transformations</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-[2.85rem]">
            Before &amp; After Smile Gallery
          </h2>

          <div className="relative mt-6 min-h-[7rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-accent-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-600">
                  <Sparkles className="h-3.5 w-3.5" />
                  {current.treatment}
                </span>
                <h3 className="mt-4 text-xl font-bold text-ink">{current.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{current.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Case selector (only when there are multiple cases) */}
          {transformations.length > 1 && (
            <>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-muted">
                Browse cases
              </p>
              <div className="mt-3 flex gap-3">
                {transformations.map((t, i) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`View ${t.title}`}
                    aria-pressed={i === active}
                    className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-xl ring-2 ring-offset-2 transition-all duration-300 ${
                      i === active ? 'ring-brand-500' : 'ring-transparent hover:ring-brand-200'
                    }`}
                  >
                    <SmartImage src={t.after} alt={t.title} className="absolute inset-0 h-full w-full" />
                    {i !== active && <span className="absolute inset-0 bg-white/40" />}
                  </button>
                ))}
              </div>
            </>
          )}

          <div className="mt-9 flex items-center gap-4">
            <Button to="/gallery" variant="primary" size="lg" icon={ArrowRight}>
              View Full Gallery
            </Button>
            <span className="text-sm text-muted">Drag the slider to reveal →</span>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
