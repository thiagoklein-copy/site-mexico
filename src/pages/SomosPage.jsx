import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { FadeIn } from '../components/FadeIn'
import { LogoMarquee } from '../components/LogoMarquee'

export function SomosPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const logos = ['logo_HagoMKT', 'logo_HagoMKT_tour', 'logo_acp', 'logo_MOE']

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a]">
      <header
        className={`fixed top-0 z-40 w-full border-b border-black/5 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md' : 'bg-white/95 backdrop-blur'}`}
      >
        <div className="mx-auto flex min-h-[60px] w-full max-w-7xl flex-wrap items-center gap-4 px-6 py-1">
          <Link to="/inicio" className="flex items-center">
            <img src="/logo-moe.png" alt="Mi Oficina En" className="h-16 w-auto rounded-sm object-contain" />
          </Link>
          <nav className="flex flex-1 flex-wrap items-center justify-center gap-2 text-sm sm:gap-3">
            <Link to="/inicio" className="nav-item">
              Inicio
            </Link>
            <Link to="/somos" className="nav-item">
              Somos
            </Link>
            <Link to="/espacios" className="nav-item">
              Espacios
            </Link>
            <Link to="/servicios" className="nav-item">
              Servicios
            </Link>
            <Link to="/contacto" className="nav-item">
              Contacto
            </Link>
          </nav>
          <Link
            to="/contacto"
            className="btn-ghost px-6 py-2 text-sm transition-all duration-300 hover:scale-[1.03] hover:bg-[#C5E000] hover:text-[#0F1A3A]"
          >
            Contáctanos
          </Link>
        </div>
      </header>

      <main className="pt-[60px]">
        <section className="relative overflow-hidden px-6 py-24 text-white md:py-28">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(110deg, rgba(7,27,70,0.82) 0%, rgba(7,27,70,0.62) 50%, rgba(7,27,70,0.72) 100%), url('/foto_Somos_hero.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.08, 1] }}
            transition={shouldReduceMotion ? undefined : { duration: 20, ease: 'linear', repeat: Infinity }}
          />
          <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center text-center">
            <motion.p
              className="section-label !text-[#C5E000]"
              initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Conoce nuestra historia
            </motion.p>
            <motion.h1
              className="mt-4 text-6xl font-bold leading-none md:text-7xl"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Somos
            </motion.h1>
            <motion.div
              className="mt-4 h-[2px] bg-[#C5E000]"
              initial={shouldReduceMotion ? false : { width: 0 }}
              whileInView={shouldReduceMotion ? undefined : { width: 80 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-14">
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
            <FadeIn direction="left" delay={0}>
              <article className="card flex h-[300px] flex-col justify-center rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <h2 className="text-3xl font-semibold md:text-4xl">Una Gran Idea</h2>
                <p className="mt-6 text-base leading-relaxed text-[#6B7280]">
                  Pensada por Rafael Ramirez Palma en el año 2001, la idea surgió después de rentar un espacio de más de 100 m que sirviera para organizar el crecimiento de lo que para ese entonces era su primera iniciativa empresarial (Corporativo ACP).
                </p>
              </article>
            </FadeIn>
            <FadeIn direction="right" delay={0.12}>
              <div className="overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl">
                <img
                  src="/foto_Somos_interior_1.png"
                  alt="foto_Somos_interior_1"
                  className="h-[300px] w-full rounded-2xl object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-stretch">
            <FadeIn direction="right" delay={0.24}>
              <div className="overflow-hidden rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl">
                <img
                  src="/foto_Somos_interior_2.png"
                  alt="foto_Somos_interior_2"
                  className="h-[300px] w-full rounded-2xl object-cover object-[center_62%] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.36}>
              <article className="card flex h-[300px] flex-col justify-center rounded-2xl shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
                <h2 className="text-4xl font-semibold">Asistencia Empresarial</h2>
                <p className="mt-4 text-base leading-relaxed text-[#6B7280]">
                  Nuestro objetivo es ofrecer espacios de trabajo a empresas emergentes, pequeñas, medianas y grandes de todos los sectores y a profesionales que trabajan de manera independiente.
                </p>
              </article>
            </FadeIn>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <FadeIn direction="up" delay={0}>
              <h2 className="text-4xl font-semibold">A través de estos años tenemos...</h2>
            </FadeIn>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <FadeIn direction="up" delay={0}>
                <article className="group relative card rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl">
                  <p className="font-semibold text-[#6B7280]">Años de Experiencia</p>
                  <AnimatedCounter value={25} duration={1.8} className="text-5xl font-extrabold text-[#C5E000]" />
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C5E000] transition-all duration-400 group-hover:w-full" />
                </article>
              </FadeIn>
              <FadeIn direction="up" delay={0.15}>
                <article className="group relative card rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl">
                  <p className="font-semibold text-[#6B7280]">Clientes Satisfechos</p>
                  <AnimatedCounter
                    value={5000}
                    prefix="+"
                    duration={1.8}
                    className="text-5xl font-extrabold text-[#C5E000]"
                  />
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C5E000] transition-all duration-400 group-hover:w-full" />
                </article>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <article className="group relative card rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl">
                  <p className="font-semibold text-[#6B7280]">Ubicaciones</p>
                  <AnimatedCounter value={6} duration={1.8} className="text-5xl font-extrabold text-[#C5E000]" />
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C5E000] transition-all duration-400 group-hover:w-full" />
                </article>
              </FadeIn>
              <FadeIn direction="up" delay={0.45}>
                <article className="group relative card rounded-2xl shadow-sm transition-shadow duration-500 hover:shadow-xl">
                  <p className="font-semibold text-[#6B7280]">Soluciones Empresariales</p>
                  <AnimatedCounter
                    value={15}
                    prefix="+"
                    duration={1.8}
                    className="text-5xl font-extrabold text-[#C5E000]"
                  />
                  <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#C5E000] transition-all duration-400 group-hover:w-full" />
                </article>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <FadeIn direction="up" delay={0}>
            <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#071b46] p-10 text-white">
              <LogoMarquee logos={logos} />
              {/* TEXTO PENDENTE */}
            </div>
          </FadeIn>
        </section>

        <section className="px-6 pb-24">
          <motion.div
            className="mx-auto w-full max-w-7xl rounded-3xl bg-[#c9d42b] p-10 text-[#1a1a1a]"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <FadeIn direction="up" delay={0.05}>
              <p className="text-lg font-medium">
                Av. Homero 229-501, Polanco I Sección, Miguel Hidalgo, C.P. 11560, CDMX
              </p>
            </FadeIn>
            <div className="mt-6 grid gap-4 text-sm font-semibold md:grid-cols-2">
              <FadeIn direction="up" delay={0.15}>
                <p>Facebook-f Instagram Linkedin-in</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.25}>
                <p>info@mioficinaen.com</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.35}>
                <p>55-5254-2235</p>
              </FadeIn>
              <FadeIn direction="up" delay={0.45}>
                <p>Aviso de Privacidad</p>
              </FadeIn>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
