import { useEffect, useState } from 'react'
import L from 'leaflet'
import { MapContainer, Marker, TileLayer, useMap } from 'react-leaflet'
import { Link } from 'react-router-dom'

const badges = ['Oficinas privadas', 'Coworking', 'Oficina virtual', 'Salas de juntas', 'Podcast room']
const marqueeBadges = [...badges, ...badges, ...badges]

const services = [
  {
    title: 'Oficina Privada',
    text: 'Espacios listos para operar con imagen profesional y todo lo necesario para tu equipo.',
    features: ['Espacios equipados', 'Privacidad total', 'Imagen corporativa'],
  },
  {
    title: 'Oficina Virtual',
    text: 'Domicilio comercial, recepción de correspondencia y soporte administrativo para tu marca.',
    features: ['Dirección fiscal', 'Atención de llamadas', 'Presencia inmediata'],
  },
  {
    title: 'Coworking',
    text: 'Áreas colaborativas flexibles para trabajar, conectar y crecer en comunidad.',
    features: ['Planes flexibles', 'Networking diario', 'Comodidad premium'],
  },
]

const testimonials = [
  {
    quote:
      'Gracias a Mi Oficina En encontramos una sede profesional, flexible y lista para recibir clientes desde el primer día.',
    author: 'Ana Martínez',
    role: 'Directora de Operaciones',
    avatar: 'https://i.pravatar.cc/80?img=11',
  },
  {
    quote:
      'Pasamos de trabajar en cafés a tener una oficina con imagen corporativa en menos de una semana. El cambio fue total.',
    author: 'Luis Herrera',
    role: 'Co-fundador de startup',
    avatar: 'https://i.pravatar.cc/80?img=32',
  },
  {
    quote:
      'La atención del equipo y la flexibilidad de planes nos permitieron crecer sin frenar operaciones ni afectar a nuestros clientes.',
    author: 'Mariana Solís',
    role: 'Gerente Administrativa',
    avatar: 'https://i.pravatar.cc/80?img=21',
  },
  {
    quote:
      'Necesitábamos salas para juntas y una dirección comercial formal. Aquí resolvimos todo en un solo lugar y con excelente servicio.',
    author: 'Carlos Méndez',
    role: 'Director Comercial',
    avatar: 'https://i.pravatar.cc/80?img=45',
  },
  {
    quote:
      'La ubicación en Polanco nos ayudó a transmitir más confianza a nuestros clientes y cerrar negocios con mayor facilidad.',
    author: 'Fernanda Reyes',
    role: 'Consultora Senior',
    avatar: 'https://i.pravatar.cc/80?img=28',
  },
]

const locations = [
  {
    id: 'polanco',
    city: 'CDMX',
    name: 'Polanco',
    address: 'Av. Homero 229 Ofi. 501 Colonia Polanco I Sección. Miguel Hidalgo, C.P. 11560',
    tags: ['Oficinas Privadas', 'Oficinas Virtuales', 'Coworking', 'Tour Virtual'],
    mapX: 64,
    mapY: 48,
    mapsUrl: 'https://maps.google.com/?q=Av.+Homero+229+Ofi.+501+Polanco+CDMX',
    coordinates: [19.4329, -99.1961],
    photos: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'periferico-lomas',
    city: 'CDMX',
    name: 'Periférico Lomas',
    address: 'Blvrd. Manuel Ávila Camacho 235, Piso 2, Polanco I Sección. Miguel Hidalgo, C.P. 11510',
    tags: ['Oficinas Privadas', 'Oficinas Virtuales', 'Coworking', 'Tour Virtual'],
    mapX: 62,
    mapY: 46,
    mapsUrl: 'https://maps.google.com/?q=Blvrd.+Manuel+Avila+Camacho+235+Polanco+CDMX',
    coordinates: [19.4365, -99.2095],
    photos: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'insurgentes-mixcoac',
    city: 'CDMX',
    name: 'Insurgentes Mixcoac',
    address: 'Av. Río Mixcoac 39-103, Col. Insurgentes Mixcoac, Benito Juárez C.P. 03920',
    tags: ['Oficinas Privadas', 'Oficinas Virtuales', 'Tour Virtual'],
    mapX: 66,
    mapY: 53,
    mapsUrl: 'https://maps.google.com/?q=Av.+Rio+Mixcoac+39+Benito+Juarez+CDMX',
    coordinates: [19.3702, -99.1868],
    photos: [
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'insurgentes-sur',
    city: 'CDMX',
    name: 'Insurgentes Sur',
    address: 'Av. Insurgentes Sur 1783-301, Col. Guadalupe Inn, Álvaro Obregón, C.P. 01020',
    tags: ['Oficinas Privadas', 'Oficinas Virtuales', 'Coworking', 'Tour Virtual'],
    mapX: 67,
    mapY: 56,
    mapsUrl: 'https://maps.google.com/?q=Av.+Insurgentes+Sur+1783+CDMX',
    coordinates: [19.3599, -99.186],
    photos: [
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'juriquilla',
    city: 'Querétaro',
    name: 'Juriquilla',
    address: 'The Village at Juriquilla Piso 4, ofi. 409, Blvd. de las Ciencias 3015, C.P. 76230',
    tags: ['Oficinas Privadas', 'Oficinas Virtuales', 'Coworking', 'Tour Virtual'],
    mapX: 50,
    mapY: 41,
    mapsUrl: 'https://maps.google.com/?q=The+Village+at+Juriquilla+Queretaro',
    coordinates: [20.7088, -100.4444],
    photos: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=900&q=80',
    ],
  },
  {
    id: 'mariano-escobedo',
    city: 'CDMX',
    name: 'Mariano Escobedo',
    address: 'Calz. Gral. Mariano Escobedo 724 Of. 701, Anzures, Miguel Hidalgo, 11590 CDMX',
    tags: ['Oficinas Virtuales', 'Coworking', 'Sala de Podcast', 'Tour Virtual'],
    mapX: 63,
    mapY: 50,
    mapsUrl: 'https://maps.google.com/?q=Mariano+Escobedo+724+Anzures+CDMX',
    coordinates: [19.4382, -99.1779],
    photos: [
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&w=900&q=80',
    ],
  },
]

function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    const items = document.querySelectorAll('.reveal')
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])
}

const getPinIcon = (isActive) =>
  L.divIcon({
    className: `map-pin-icon-wrapper ${isActive ? 'active' : ''}`,
    html: '<span class="map-pin-icon-dot"></span>',
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  })

function MapRecenter({ coordinates }) {
  const map = useMap()

  useEffect(() => {
    map.flyTo(coordinates, map.getZoom(), { duration: 0.75 })
  }, [coordinates, map])

  return null
}

export function HomePage() {
  const [showNav, setShowNav] = useState(true)
  const [selectedLocationId, setSelectedLocationId] = useState(locations[0].id)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useRevealOnScroll()

  useEffect(() => {
    let lastScroll = 0

    const onScroll = () => {
      const current = window.scrollY
      if (current < 40) {
        setShowNav(true)
      } else {
        setShowNav(current < lastScroll)
      }
      lastScroll = current
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length)
    }, 13000)

    return () => window.clearInterval(intervalId)
  }, [])

  const selectedLocation = locations.find((location) => location.id === selectedLocationId) ?? locations[0]
  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <div className="bg-white text-[#1A1A1A]">
      <header
        className={`fixed top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="mx-auto flex min-h-[60px] w-full max-w-7xl flex-wrap items-center gap-4 px-6 py-1">
          <a href="#inicio" className="flex items-center">
            <img
              src="/logo-moe.png"
              alt="Mi Oficina En"
              className="h-16 w-auto rounded-sm object-contain"
            />
          </a>
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
          id="inicio"
          className="relative flex min-h-[85vh] items-end overflow-hidden bg-black px-6 pb-12 pt-24 md:pb-14 md:pt-32"
          style={{
            backgroundImage:
              "linear-gradient(105deg, rgba(0,0,0,0.58) 8%, rgba(0,0,0,0.34) 48%, rgba(0,0,0,0.22) 100%), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center right',
          }}
        >
          <div className="mx-auto w-full max-w-7xl">
            <div className="reveal max-w-4xl">
              <h1 className="max-w-[12.5ch] text-[2.7rem] font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-[3.8rem] lg:text-[5rem]">
                ¿Listo para llevar tu negocio al siguiente nivel?
              </h1>
              <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/92 md:text-lg">
                En Mi Oficina En te ofrecemos la dirección, el espacio y el respaldo profesional
                que necesitas para hacer crecer tu empresa en México.
              </p>
              <a href="#contacto" className="btn-primary mt-6 inline-flex">
                Empecemos hoy
              </a>
            </div>
            <div className="marquee mt-12">
              <div className="marquee-track">
                <div className="marquee-group">
                  {marqueeBadges.map((badge, index) => (
                    <span key={`a-${badge}-${index}`} className="badge-white">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="marquee-group" aria-hidden="true">
                  {marqueeBadges.map((badge, index) => (
                    <span key={`b-${badge}-${index}`} className="badge-white">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-6 py-24">
          <div className="reveal">
            <p className="section-label">Sobre nosotros</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              <span className="text-[#9CA3AF]">Somos más que oficinas, </span>
              <span className="text-[#1A1A1A]">somos impulso para empresas en movimiento.</span>
            </h2>
            <p className="mt-6 max-w-3xl text-[#6B7280]">
              Tenemos tu espacio. Tú te enfocas en tu negocio, nosotros en darte el ambiente ideal
              para operar con profesionalismo, comodidad y flexibilidad.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="reveal card">
              <h3 className="text-2xl font-semibold">Nuestra misión es clara</h3>
              <p className="mt-3 text-[#6B7280]">
                Facilitar espacios de trabajo listos para operar, con atención cercana y soluciones
                diseñadas para cada etapa de crecimiento.
              </p>
            </article>
            <article className="reveal card">
              <h3 className="text-2xl font-semibold">Nuestro impacto no tiene límites</h3>
              <p className="mt-3 text-[#6B7280]">
                Empresas de diferentes industrias confían en nosotros para proyectar una imagen
                sólida y trabajar de forma más eficiente.
              </p>
            </article>
          </div>

          <div className="reveal mt-12 flex justify-center">
            <a href="#contacto" className="btn-primary">
              Agendar visita
            </a>
          </div>
        </section>

        <section id="soluciones" className="bg-[#f9f9f9] px-6 py-24">
          <div className="mx-auto w-full max-w-7xl text-center">
            <p className="section-label">Espacios y soluciones</p>
            <h2 className="reveal mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">
              Nuestra oferta integral para impulsar tu operación
            </h2>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="reveal card text-left">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#c9d42b]/10 text-[#c9d42b]">
                    ●
                  </span>
                  <h3 className="mt-5 text-3xl font-semibold">{service.title}</h3>
                  <p className="mt-4 text-[#6B7280]">{service.text}</p>
                  <ul className="mt-6 space-y-2 text-sm text-[#1A1A1A]">
                    {service.features.map((feature) => (
                      <li key={feature}>• {feature}</li>
                    ))}
                  </ul>
                  <button className="btn-ghost mt-7">Ver más</button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-10 rounded-3xl bg-[#F5F5F5] p-10 lg:grid-cols-2 lg:p-14">
            <div className="reveal">
              <p className="section-label">Los números hablan por nosotros</p>
              <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
                Mi Oficina En es referencia en espacios corporativos para empresas mexicanas.
              </h2>
              <img
                className="mt-8 h-[300px] w-full rounded-2xl object-cover"
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
                alt="Equipo profesional en oficina"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                ['100+', 'Empresas atendidas'],
                ['95%', 'Satisfacción de clientes'],
                ['30%', 'Ahorro promedio en operación'],
                ['$1B', 'Valor operado por clientes'],
              ].map(([number, text]) => (
                <div key={number} className="reveal rounded-2xl bg-white p-6 shadow-sm">
                  <p className="text-5xl font-bold text-[#c9d42b]">{number}</p>
                  <p className="mt-3 font-semibold">{text}</p>
                  <p className="mt-2 text-sm text-[#6B7280]">
                    Resultados medibles para equipos que buscan crecer con estructura.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-24 text-center">
          <p className="section-label">Testimonios</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.author}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Ver testimonial de ${testimonial.author}`}
                className={`rounded-full transition ${activeTestimonial === index ? 'ring-2 ring-[#c9d42b] ring-offset-2 ring-offset-white' : 'opacity-70 hover:opacity-100'}`}
              >
                <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full object-cover" />
              </button>
            ))}
          </div>
          <blockquote className="reveal mx-auto mt-10 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            “{currentTestimonial.quote}”
          </blockquote>
          <p className="mt-5 text-[#6B7280]">
            {currentTestimonial.author} · {currentTestimonial.role}
          </p>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={`${testimonial.author}-dot`}
                type="button"
                onClick={() => setActiveTestimonial(index)}
                aria-label={`Selecionar testimonial ${index + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition ${activeTestimonial === index ? 'bg-[#c9d42b]' : 'bg-black/20 hover:bg-black/35'}`}
              />
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-24">
          <p className="section-label">Mapa de ubicaciones</p>
          <h2 className="reveal mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            Encuentra tu sede ideal en México
          </h2>
          <p className="reveal mt-5 max-w-3xl text-[#6B7280]">
            Haz clic en cada pin para ver fotos, dirección y servicios disponibles en cada
            inmueble.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="reveal map-shell">
              <MapContainer
                center={[23.6345, -102.5528]}
                zoom={5}
                minZoom={4}
                maxZoom={17}
                className="map-surface"
                scrollWheelZoom={false}
              >
                <MapRecenter coordinates={selectedLocation.coordinates} />
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {locations.map((location) => (
                  <Marker
                    key={location.id}
                    position={location.coordinates}
                    icon={getPinIcon(selectedLocation.id === location.id)}
                    eventHandlers={{ click: () => setSelectedLocationId(location.id) }}
                  />
                ))}
              </MapContainer>
            </div>

            <aside className="reveal card p-5 md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#c9d42b]">
                    {selectedLocation.city}
                  </p>
                  <h3 className="mt-1 text-2xl font-semibold">{selectedLocation.name}</h3>
                </div>
                <a
                  href={selectedLocation.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost px-4 py-2 text-xs"
                >
                  Ver mapa
                </a>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280]">{selectedLocation.address}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedLocation.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {selectedLocation.photos.map((photo, index) => (
                  <img
                    key={`${selectedLocation.id}-${index}`}
                    src={photo}
                    alt={`${selectedLocation.name} foto ${index + 1}`}
                    className="h-28 w-full rounded-xl object-cover"
                  />
                ))}
              </div>
            </aside>
          </div>
        </section>

      </main>

      <footer id="contacto" className="bg-[#111] px-6 py-20 text-white">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 rounded-3xl bg-[#1C1C1C] p-8 md:p-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold md:text-5xl">
                ¿Listo para transformar tu forma de trabajar?
              </h2>
              <p className="mt-5 max-w-xl text-white/75">
                Contáctanos hoy mismo y agenda una visita para encontrar el espacio perfecto para tu
                empresa.
              </p>
              <button className="btn-primary mt-8">Agendar visita</button>
              <p className="mt-5 text-sm text-white/70">...o contáctanos con la información abajo.</p>
              <div className="mt-6 space-y-2 text-sm text-white/85">
                <p>📍 Av. Homero 229-501, Polanco I Sección, Miguel Hidalgo, C.P. 11560, CDMX</p>
                <p>✉ info@mioficinaen.com</p>
                <p>☎ 55-5254-2235</p>
              </div>
            </div>
            <form className="space-y-4">
              <input className="input-field" type="text" placeholder="Nombre" />
              <input className="input-field" type="email" placeholder="Mail" />
              <input className="input-field" type="tel" placeholder="Teléfono" />
              <select className="input-field">
                <option>Oficina Privada</option>
                <option>Oficina Virtual</option>
                <option>Coworking</option>
              </select>
              <button type="submit" className="btn-primary w-full justify-center">
                Enviar
              </button>
            </form>
          </div>

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
            <div>
              <img
                src="/logo-moe.png"
                alt="Mi Oficina En"
                className="h-10 w-auto rounded-sm object-contain"
              />
              <p className="mt-3 text-sm text-white/60">Espacios que impulsan negocios.</p>
            </div>
            <div>
              <p className="font-semibold">Navegación</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>Inicio</li>
                <li>Somos</li>
                <li>Espacios</li>
                <li>Servicios</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Empresa</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>Aviso de Privacidad</li>
                <li>Términos y condiciones</li>
                <li>Tour Virtual</li>
                <li>Contacto</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Redes</p>
              <div className="mt-3 flex gap-3 text-sm text-white/80">
                <a
                  href="https://www.instagram.com/mioficinaen/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram de Mi Oficina En"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#c9d42b] hover:text-[#c9d42b]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.42a4.95 4.95 0 0 1 1.8 1.18c.5.5.9 1.12 1.17 1.8.18.46.37 1.26.43 2.43.05 1.27.06 1.65.06 4.84 0 3.2-.01 3.58-.06 4.85-.06 1.17-.25 1.97-.43 2.43a5.03 5.03 0 0 1-2.97 2.97c-.46.18-1.26.37-2.43.43-1.27.05-1.65.06-4.85.06-3.19 0-3.57-.01-4.84-.06-1.17-.06-1.97-.25-2.43-.43a4.95 4.95 0 0 1-1.8-1.18 4.95 4.95 0 0 1-1.18-1.79c-.18-.47-.37-1.27-.42-2.44A95.7 95.7 0 0 1 2.16 12c0-3.19.01-3.57.07-4.84.05-1.17.24-1.97.42-2.43a4.94 4.94 0 0 1 1.18-1.8 4.97 4.97 0 0 1 1.8-1.18c.46-.18 1.26-.37 2.43-.42 1.27-.06 1.65-.07 4.84-.07Zm0 1.62c-3.15 0-3.52.01-4.76.06-1.14.05-1.76.24-2.18.4-.56.22-.95.47-1.37.9-.42.41-.68.8-.9 1.36-.16.42-.35 1.05-.4 2.18-.05 1.24-.06 1.61-.06 4.76s.01 3.52.06 4.76c.05 1.13.24 1.76.4 2.18.22.56.48.95.9 1.36.42.42.81.68 1.37.9.42.16 1.04.35 2.18.4 1.24.05 1.61.06 4.76.06s3.52-.01 4.76-.06c1.13-.05 1.76-.24 2.18-.4a3.33 3.33 0 0 0 2.27-2.26c.16-.42.35-1.05.4-2.18.05-1.24.06-1.61.06-4.76s-.01-3.52-.06-4.76c-.05-1.13-.24-1.76-.4-2.18a3.32 3.32 0 0 0-.9-1.36c-.42-.43-.81-.68-1.37-.9-.42-.16-1.05-.35-2.18-.4-1.24-.05-1.61-.06-4.76-.06Zm0 3.9A5.32 5.32 0 1 1 6.68 13 5.32 5.32 0 0 1 12 7.67Zm0 8.78A3.46 3.46 0 1 0 8.54 13 3.46 3.46 0 0 0 12 16.45Zm6.77-9.01a1.24 1.24 0 1 1-1.24-1.24 1.24 1.24 0 0 1 1.24 1.24Z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/mioficinapolanco/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn de Mi Oficina En"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:border-[#c9d42b] hover:text-[#c9d42b]"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.03-3.03-1.84-3.03-1.85 0-2.13 1.44-2.13 2.94v5.67H9.36V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
