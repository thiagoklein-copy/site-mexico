import { motion, useReducedMotion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedCounter } from '../components/AnimatedCounter'
import { FadeIn } from '../components/FadeIn'
import { LogoMarquee } from '../components/LogoMarquee'
import { SiteFooter } from '../components/SiteFooter'

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

      <main className="bg-[#edf0f3] pt-[60px]">
        <section className="px-6 py-12 md:py-16">
          <div className="mx-auto w-full max-w-7xl rounded-[32px] bg-[#071b46] px-8 py-14 text-white md:px-14">
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
              className="mt-4 max-w-2xl text-5xl font-bold leading-[0.98] md:text-7xl"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              Somos
            </motion.h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
              Nuestro objetivo es ofrecer espacios de trabajo a empresas emergentes, pequeñas, medianas y grandes de todos
              los sectores y a profesionales que trabajan de manera independiente.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-6 text-[#071b46]">
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#6B7280]">Años de Experiencia</p>
                <AnimatedCounter value={25} duration={1.8} className="mt-2 text-4xl font-extrabold text-[#071b46]" />
              </div>
              <div className="rounded-2xl bg-white p-6 text-[#071b46]">
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#6B7280]">Clientes Satisfechos</p>
                <AnimatedCounter value={5000} prefix="+" duration={1.8} className="mt-2 text-4xl font-extrabold text-[#071b46]" />
              </div>
              <div className="rounded-2xl bg-white p-6 text-[#071b46]">
                <p className="text-xs font-semibold uppercase tracking-[0.06em] text-[#6B7280]">Ubicaciones</p>
                <AnimatedCounter value={6} duration={1.8} className="mt-2 text-4xl font-extrabold text-[#071b46]" />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-8 pt-2">
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
            <FadeIn direction="left" delay={0}>
              <article className="flex h-[320px] flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_18px_45px_rgba(10,20,40,0.08)]">
                <h2 className="text-4xl font-semibold text-[#0d172e]">Una Gran Idea</h2>
                <p className="text-base leading-relaxed text-[#5c687e]">
                  Pensada por Rafael Ramirez Palma en el año 2001, la idea surgió después de rentar un espacio de más de 100 m que sirviera para organizar el crecimiento de lo que para ese entonces era su primera iniciativa empresarial (Corporativo ACP).
                </p>
              </article>
            </FadeIn>
            <FadeIn direction="right" delay={0.12}>
              <div className="overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(10,20,40,0.08)]">
                <img
                  src="/foto_Somos_interior_1.png"
                  alt="foto_Somos_interior_1"
                  className="h-[320px] w-full rounded-3xl object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2 md:items-stretch">
            <FadeIn direction="right" delay={0.24}>
              <div className="overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(10,20,40,0.08)]">
                <img
                  src="/foto_Somos_interior_2.png"
                  alt="foto_Somos_interior_2"
                  className="h-[320px] w-full rounded-3xl object-cover object-[center_62%] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.36}>
              <article className="flex h-[320px] flex-col justify-between rounded-3xl bg-white p-8 shadow-[0_18px_45px_rgba(10,20,40,0.08)]">
                <h2 className="text-4xl font-semibold text-[#0d172e]">Asistencia Empresarial</h2>
                <p className="text-base leading-relaxed text-[#5c687e]">
                  Nuestro objetivo es ofrecer espacios de trabajo a empresas emergentes, pequeñas, medianas y grandes de todos los sectores y a profesionales que trabajan de manera independiente.
                </p>
              </article>
            </FadeIn>
          </div>
        </section>

        <section className="px-6 py-14">
          <div className="mx-auto w-full max-w-7xl rounded-[28px] bg-white p-8 md:p-12">
            <FadeIn direction="up" delay={0}>
              <h2 className="text-center text-4xl font-semibold text-[#0d172e]">A través de estos años tenemos...</h2>
            </FadeIn>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <FadeIn direction="up" delay={0}>
                <article className="rounded-2xl border border-[#e2e7f0] bg-[#f8fafc] p-6">
                  <p className="font-semibold text-[#6B7280]">Años de Experiencia</p>
                  <AnimatedCounter value={25} duration={1.8} className="mt-2 text-5xl font-extrabold text-[#071b46]" />
                </article>
              </FadeIn>
              <FadeIn direction="up" delay={0.15}>
                <article className="rounded-2xl border border-[#e2e7f0] bg-[#f8fafc] p-6">
                  <p className="font-semibold text-[#6B7280]">Clientes Satisfechos</p>
                  <AnimatedCounter value={5000} prefix="+" duration={1.8} className="mt-2 text-5xl font-extrabold text-[#071b46]" />
                </article>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <article className="rounded-2xl border border-[#e2e7f0] bg-[#f8fafc] p-6">
                  <p className="font-semibold text-[#6B7280]">Ubicaciones</p>
                  <AnimatedCounter value={6} duration={1.8} className="mt-2 text-5xl font-extrabold text-[#071b46]" />
                </article>
              </FadeIn>
              <FadeIn direction="up" delay={0.45}>
                <article className="rounded-2xl border border-[#e2e7f0] bg-[#f8fafc] p-6">
                  <p className="font-semibold text-[#6B7280]">Soluciones Empresariales</p>
                  <AnimatedCounter value={15} prefix="+" duration={1.8} className="mt-2 text-5xl font-extrabold text-[#071b46]" />
                </article>
              </FadeIn>
            </div>
          </div>
        </section>

        <section className="px-6 pb-10">
          <FadeIn direction="up" delay={0}>
            <div className="mx-auto w-full max-w-7xl rounded-[28px] bg-[#071b46] p-8 text-white md:p-10">
              <LogoMarquee logos={logos} />
            </div>
          </FadeIn>
        </section>

        <section className="px-6 pb-24">
          <motion.div
            className="mx-auto w-full max-w-7xl rounded-[28px] bg-white p-8 text-[#1a1a1a] md:p-10"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <FadeIn direction="up" delay={0.05}>
              <p className="text-lg font-semibold text-[#0d172e]">
                Av. Homero 229-501, Polanco I Sección, Miguel Hidalgo, C.P. 11560, CDMX
              </p>
            </FadeIn>
            <div className="mt-6 grid gap-4 text-sm font-semibold text-[#5c687e] md:grid-cols-2">
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
      <SiteFooter />
    </div>
  )
}
