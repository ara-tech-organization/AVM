import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play, X } from 'lucide-react'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SmartImage from '../components/SmartImage'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import videoTestimonials, { youtubeThumb, youtubeEmbed } from '../data/videos'

/** Single video thumbnail with play overlay. `featured` enlarges it. */
function VideoCard({ video, onClick, featured = false }) {
  return (
    <button
      type="button"
      onClick={() => onClick(video)}
      className="group relative block h-full w-full overflow-hidden rounded-3xl text-left shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2"
    >
      <SmartImage
        src={youtubeThumb(video.id)}
        alt={`${video.name} video testimonial`}
        className={`w-full ${featured ? 'aspect-[16/10] lg:h-full' : 'aspect-[16/9]'}`}
        imgClassName="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-900/85 via-brand-900/10 to-transparent" />

      {/* Play */}
      <span
        className={`absolute left-1/2 top-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-brand-700 shadow-float transition-transform duration-300 group-hover:scale-110 ${
          featured ? 'h-20 w-20' : 'h-14 w-14'
        }`}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-white/40" />
        <Play className={`relative ml-0.5 fill-current ${featured ? 'h-8 w-8' : 'h-5 w-5'}`} />
      </span>

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between">
        <div>
          <p className={`font-bold text-white ${featured ? 'text-lg' : 'text-base'}`}>
            {video.name}
          </p>
          <p className="text-sm text-white/75">{video.treatment}</p>
        </div>
        <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
          {video.duration}
        </span>
      </div>
    </button>
  )
}

function Lightbox({ video, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-900/80 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-12 right-0 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="aspect-video overflow-hidden rounded-2xl bg-black shadow-float">
          <iframe
            src={youtubeEmbed(video.id)}
            title={`${video.name} testimonial`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
        <p className="mt-4 text-center text-white">
          <span className="font-semibold">{video.name}</span>{' '}
          <span className="text-white/60">· {video.treatment}</span>
        </p>
      </motion.div>
    </motion.div>
  )
}

export default function VideoTestimonials() {
  const [active, setActive] = useState(null)

  return (
    <Section id="video-testimonials" tone="white">
      <SectionHeading
        eyebrow="In their words"
        title="Hear from Our Happy Patients"
        intro="Real patients share their journey to a healthier, more confident smile at AVM Smiles."
      />

      {/* Asymmetric layout — one feature video + two stacked */}
      <motion.div
        variants={staggerParent(0.12)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-12 grid gap-6 lg:grid-cols-12"
      >
        <motion.div variants={staggerItem} className="lg:col-span-7">
          <VideoCard video={videoTestimonials[0]} onClick={setActive} featured />
        </motion.div>
        <div className="flex flex-col gap-6 lg:col-span-5">
          {videoTestimonials.slice(1, 3).map((v) => (
            <motion.div key={v.id} variants={staggerItem} className="flex-1">
              <VideoCard video={v} onClick={setActive} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {active && <Lightbox video={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </Section>
  )
}
