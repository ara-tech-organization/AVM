import { motion } from 'framer-motion'
import { cn } from '../lib/cn'
import { fadeUp, staggerParent, staggerItem, viewportOnce } from '../lib/motion'
import Eyebrow from './Eyebrow'

/**
 * Reusable section header: eyebrow + title + optional intro.
 * Animates in on scroll with a staggered reveal.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'center',
  tone = 'dark',
  className,
  titleClassName,
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  const titleColor = tone === 'light' ? 'text-white' : 'text-ink'
  const introColor = tone === 'light' ? 'text-white/75' : 'text-muted'

  return (
    <motion.div
      variants={staggerParent(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={cn('flex max-w-2xl flex-col gap-5', alignment, className)}
    >
      {eyebrow && (
        <motion.div variants={staggerItem}>
          <Eyebrow tone={tone === 'light' ? 'light' : 'brand'}>{eyebrow}</Eyebrow>
        </motion.div>
      )}
      <motion.h2
        variants={fadeUp}
        className={cn(
          'text-balance text-3xl font-bold leading-[1.08] sm:text-4xl lg:text-[2.85rem]',
          titleColor,
          titleClassName
        )}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={staggerItem}
          className={cn('text-base leading-relaxed sm:text-lg', introColor)}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
