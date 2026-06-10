import { motion } from 'framer-motion'
import Container from '../components/Container'
import Counter from '../components/Counter'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { trustStats } from '../data/stats'

/** Horizontal trust strip sitting directly under the hero. */
export default function TrustBar() {
  return (
    <div className="relative z-10 -mt-px border-b border-line bg-white">
      <Container>
        <motion.div
          variants={staggerParent(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 divide-line lg:grid-cols-4 lg:divide-x"
        >
          {trustStats.map((s) => (
            <motion.div
              key={s.label}
              variants={staggerItem}
              className="flex items-center gap-4 px-2 py-7 sm:px-6 lg:justify-center"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                <s.icon className="h-6 w-6" />
              </span>
              <div className="leading-tight">
                <p className="text-xl font-extrabold text-ink sm:text-2xl">
                  {s.value != null ? (
                    <Counter value={s.value} suffix={s.suffix} />
                  ) : (
                    s.text
                  )}
                </p>
                <p className="text-sm font-medium text-muted">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </div>
  )
}
