import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'

export function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  className = '',
  as = 'div',
}) {
  const shouldReduceMotion = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  if (shouldReduceMotion) {
    const StaticTag = as
    return <StaticTag className={className}>{children}</StaticTag>
  }

  const distanceMap = {
    up: isMobile ? 15 : 30,
    left: isMobile ? 20 : 40,
    right: isMobile ? 20 : 40,
  }

  const initial =
    direction === 'left'
      ? { opacity: 0, x: -distanceMap.left }
      : direction === 'right'
        ? { opacity: 0, x: distanceMap.right }
        : { opacity: 0, y: distanceMap.up }

  const MotionTag = motion[as] ?? motion.div

  return (
    <MotionTag
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  )
}
