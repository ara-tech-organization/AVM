import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

/**
 * Drop-in scroll-reveal wrapper.
 * Usage: <Reveal><Card/></Reveal> or <Reveal variant={scaleIn} delay={0.1}>
 */
export default function Reveal({
  children,
  variant = fadeUp,
  delay = 0,
  as = 'div',
  className,
  ...props
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      variants={variant}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
      className={className}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
