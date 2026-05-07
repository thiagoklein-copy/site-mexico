import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

function CountUp({ end, prefix = '', suffix = '', duration = 1400 }) {
  const [value, setValue] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!hasStarted) return

    const start = performance.now()
    let frameId = 0

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      setValue(Math.floor(progress * end))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }

    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [duration, end, hasStarted])

  return (
    <p ref={ref} className="text-5xl font-bold text-[#c9d42b]">
      {prefix}
      {value.toLocaleString('es-MX')}
      {suffix}
    </p>
  )
}

export function SomosPage() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a]">
      <header className="fixed top-0 z-40 w-full border-b border-black/5 bg-white/95 backdrop-blur">
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
          <Link to="/contacto" className="btn-ghost px-6 py-2 text-sm">
            Contáctanos
          </Link>
        </div>
      </header>

      <main className="pt-[60px]">
        <section
          className="relative overflow-hidden px-6 py-24 text-white md:py-28"
          style={{
            backgroundImage:
              "linear-gradient(110deg, rgba(7,27,70,0.82) 0%, rgba(7,27,70,0.62) 50%, rgba(7,27,70,0.72) 100%), url('/foto_Somos_hero.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center text-center">
            <p className="section-label !text-[#c9d42b]">Conoce nuestra historia</p>
            <h1 className="mt-4 text-6xl font-bold leading-none md:text-7xl">Somos</h1>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-14">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card flex flex-col justify-center">
              <h2 className="text-3xl font-semibold md:text-4xl">Una Gran Idea</h2>
              <p className="mt-6 text-[#6B7280]">
                Pensada por Rafael Ramirez Palma en el año 2001, la idea surgió después de rentar un espacio de más de 100 m que sirviera para organizar el crecimiento de lo que para ese entonces era su primera iniciativa empresarial (Corporativo ACP).
              </p>
            </article>
            <img
              src="/foto_Somos_interior_1.png"
              alt="foto_Somos_interior_1"
              className="h-[300px] w-full rounded-2xl object-cover"
            />
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <img
              src="/foto_Somos_interior_2.png"
              alt="foto_Somos_interior_2"
              className="h-[300px] w-full rounded-2xl object-cover"
            />
            <article className="card flex flex-col justify-center">
              <h2 className="text-4xl font-semibold">Asistencia Empresarial</h2>
              <p className="mt-4 text-[#6B7280]">
                Nuestro objetivo es ofrecer espacios de trabajo a empresas emergentes, pequeñas, medianas y grandes de todos los sectores y a profesionales que trabajan de manera independiente.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-white px-6 py-20">
          <div className="mx-auto w-full max-w-7xl">
            <h2 className="text-4xl font-semibold">A través de estos años tenemos...</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <article className="card">
                <p className="font-semibold text-[#6B7280]">Años de Experiencia</p>
                <CountUp end={25} />
              </article>
              <article className="card">
                <p className="font-semibold text-[#6B7280]">Clientes Satisfechos</p>
                <CountUp end={5000} prefix="+" />
              </article>
              <article className="card">
                <p className="font-semibold text-[#6B7280]">Ubicaciones</p>
                <CountUp end={6} />
              </article>
              <article className="card">
                <p className="font-semibold text-[#6B7280]">Soluciones Empresariales</p>
                <CountUp end={15} prefix="+" />
              </article>
            </div>
          </div>
        </section>

        <section className="px-6 py-20">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#071b46] p-10 text-white">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 text-center font-semibold">
                logo_HagoMKT
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 text-center font-semibold">
                logo_HagoMKT_tour
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 text-center font-semibold">
                logo_acp
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-6 text-center font-semibold">
                logo_MOE
              </div>
            </div>
            {/* TEXTO PENDENTE */}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#c9d42b] p-10 text-[#1a1a1a]">
            <p className="text-lg font-medium">
              Av. Homero 229-501, Polanco I Sección, Miguel Hidalgo, C.P. 11560, CDMX
            </p>
            <div className="mt-6 grid gap-4 text-sm font-semibold md:grid-cols-2">
              <p>Facebook-f Instagram Linkedin-in</p>
              <p>info@mioficinaen.com</p>
              <p>55-5254-2235</p>
              <p>Aviso de Privacidad</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
