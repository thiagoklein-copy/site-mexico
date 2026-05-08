import { useMemo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function LogoMarquee({ logos }) {
  const shouldReduceMotion = useReducedMotion()
  const doubled = useMemo(() => [...logos, ...logos], [logos])
  const renderLogo = (logo) => {
    if (logo === 'logo_acp') {
      return <img src="/logo_acp.png" alt="Logo Corporativo ACP" className="mx-auto h-10 w-auto object-contain" />
    }
    return logo
  }

  if (shouldReduceMotion) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {logos.map((logo) => (
          <div
            key={logo}
            className="rounded-2xl border border-white/20 bg-white/5 p-6 text-center font-semibold text-white"
          >
            {renderLogo(logo)}
          </div>
        ))}
      </div>
    )
  }

  return (
    <div
      className="somos-marquee group overflow-hidden"
      style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
    >
      <motion.div className="somos-marquee-track group-hover:[animation-play-state:paused]">
        {doubled.map((logo, index) => (
          <div
            key={`${logo}-${index}`}
            className="mx-3 min-w-[220px] rounded-2xl border border-white/20 bg-white/5 p-6 text-center font-semibold text-white"
          >
            {renderLogo(logo)}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
