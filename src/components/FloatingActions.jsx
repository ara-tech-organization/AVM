import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Phone, ArrowUp } from 'lucide-react'
import { WhatsappIcon } from './SocialIcons'
import { site } from '../data/site'

/** Sticky bottom-right quick actions: WhatsApp, Call, Back-to-top. */
export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            aria-label="Back to top"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-brand-700 shadow-card transition-colors hover:bg-brand-50"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={site.phoneHref}
        aria-label="Call AVM Smiles"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-float transition-transform hover:scale-105"
      >
        <Phone className="h-5 w-5" />
      </a>

      <a
        href={site.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-float transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsappIcon className="relative h-7 w-7" />
      </a>
    </div>
  )
}
