import { motion } from 'framer-motion'
import Seo from '../components/Seo'
import PageHeader from '../components/PageHeader'
import Section from '../components/Section'
import SectionHeading from '../components/SectionHeading'
import SmartImage from '../components/SmartImage'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import { staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import { FinalCta } from '../sections'
import transformations from '../data/gallery'
import images from '../data/images'

// Varied spans for an asymmetrical masonry grid.
const tileSpans = [
  'sm:col-span-2 sm:row-span-2',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-1',
  'sm:col-span-2',
]

export default function Gallery() {
  return (
    <>
      <Seo
        title="Gallery | AVM Smiles"
        description="Explore the AVM Smiles gallery featuring our modern dental clinic, advanced technology, treatment facilities, and patient care environment."
        keywords="AVM Smiles gallery, dental clinic photos, dental treatment Chennai, modern dental clinic, dental care facilities, dentist Chennai"
        path="/gallery"
      />
      <PageHeader
        eyebrow="Gallery"
        title="Explore Our Clinic"
        intro="Welcome to the AVM Smiles gallery, where you can take a closer look at our modern dental facility, advanced treatment rooms, state-of-the-art technology and patient-friendly environment."
        crumbs={[{ label: 'Gallery' }]}
      />

      {/* Before / after sliders */}
      <Section tone="white">
        <SectionHeading
          align="left"
          eyebrow="Before & After"
          title="Drag to reveal the difference"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {transformations.map((t) => (
            <figure key={t.id}>
              <BeforeAfterSlider
                before={t.before}
                after={t.after}
                alt={t.title}
                className="aspect-[16/11]"
              />
              <figcaption className="mt-3 flex items-center justify-between">
                <div>
                  <p className="font-bold text-ink">{t.title}</p>
                  <p className="text-sm text-muted">{t.treatment}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* Masonry image grid */}
      <Section tone="surface">
        <SectionHeading
          align="left"
          eyebrow="Our clinic & patients"
          title="A closer look at AVM Smiles"
        />
        <motion.div
          variants={staggerParent(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5"
        >
          {images.gallery.map((src, i) => (
            <motion.div
              key={src}
              variants={staggerItem}
              className={`group relative overflow-hidden rounded-3xl shadow-soft ${tileSpans[i % tileSpans.length]}`}
            >
              <SmartImage
                src={src}
                alt={`AVM Smiles gallery image ${i + 1}`}
                className="h-full w-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-900/0 transition-colors duration-500 group-hover:bg-brand-900/20" />
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <FinalCta />
    </>
  )
}
