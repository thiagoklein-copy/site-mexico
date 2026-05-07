import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function AnimatedCounter({
  value,
  prefix = '',
  duration = 1.8,
  className = '',
  locale = 'es-MX',
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.3 })
  const shouldReduceMotion = useReducedMotion()

  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (latest) => Math.round(latest))
  const display = useTransform(rounded, (latest) => `${prefix}${latest.toLocaleString(locale)}`)

  useEffect(() => {
    if (!inView || shouldReduceMotion) return
    const controls = animate(motionValue, value, { duration, ease: 'easeOut' })
    return () => controls.stop()
  }, [inView, motionValue, shouldReduceMotion, value, duration])

  if (shouldReduceMotion) {
    return <p className={className}>{`${prefix}${value.toLocaleString(locale)}`}</p>
  }

  return <motion.p ref={ref} className={className}>{display}</motion.p>
}
