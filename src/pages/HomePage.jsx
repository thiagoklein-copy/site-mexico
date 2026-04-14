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

const posts = [
  {
    date: '14 Abr, 2026',
    title: 'Cómo elegir la oficina ideal para una empresa en crecimiento',
    image:
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    date: '11 Abr, 2026',
    title: '5 ventajas de trabajar en coworking para equipos híbridos',
    image:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  },
  {
    date: '08 Abr, 2026',
    title: 'Tu oficina virtual como base para escalar en México',
    image:
      'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80',
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

  const selectedLocation = locations.find((location) => location.id === selectedLocationId) ?? locations[0]

  return (
    <div className="bg-white text-[#1A1A1A]">
      <header
        className={`fixed top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur transition-transform duration-300 ${showNav ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="mx-auto flex min-h-[60px] w-full max-w-7xl flex-wrap items-center gap-4 px-6 py-2">
          <a href="#inicio" className="flex items-center gap-2 text-lg font-semibold">
            <span className="inline-block h-3 w-3 rounded-sm bg-[#1A1A1A]" />
            mi oficina en
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

          <div className="reveal mt-12 flex flex-wrap items-center gap-5">
            <a href="#contacto" className="btn-primary">
              Agendar visita
            </a>
            <div className="flex">
              {[1, 2, 3].map((avatar) => (
                <img
                  key={avatar}
                  className="-ml-3 h-11 w-11 rounded-full border-2 border-white object-cover first:ml-0"
                  src={`https://i.pravatar.cc/80?img=${avatar + 20}`}
                  alt="Cliente"
                />
              ))}
            </div>
          </div>
        </section>

        <section id="soluciones" className="bg-[#f9f9f9] px-6 py-24">
          <div className="mx-auto w-full max-w-7xl text-center">
            <p className="section-label">Espacios y soluciones</p>
            <h2 className="reveal mx-auto mt-4 max-w-3xl text-4xl font-semibold md:text-6xl">
              Nuestra oferta integral para impulsar tu operación
            </h2>
            <a href="#contacto" className="btn-ghost reveal mt-8 inline-flex">
              Ver disponibilidad
            </a>

            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {services.map((service) => (
                <article key={service.title} className="reveal card text-left">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#E84B2A]/10 text-[#E84B2A]">
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
                  <p className="text-5xl font-bold text-[#E84B2A]">{number}</p>
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
            {Array.from({ length: 20 }).map((_, index) => (
              <img
                key={index}
                src={`https://i.pravatar.cc/60?img=${index + 1}`}
                alt="Cliente"
                className="h-12 w-12 rounded-full object-cover"
              />
            ))}
          </div>
          <blockquote className="reveal mx-auto mt-10 max-w-4xl text-3xl font-semibold leading-tight md:text-5xl">
            “Gracias a Mi Oficina En encontramos una sede profesional, flexible y lista para
            recibir clientes desde el primer día.”
          </blockquote>
          <p className="mt-5 text-[#6B7280]">Ana Martínez · Directora de Operaciones</p>
          <div className="mt-6 flex justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#E84B2A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
          </div>
        </section>

        <section id="espacios" className="bg-[#f9f9f9] px-6 py-24">
          <div className="mx-auto w-full max-w-7xl">
            <p className="section-label">Ubicaciones</p>
            <h2 className="reveal mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
              Espacios estratégicos en CDMX y Querétaro
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {locations.map((location) => (
                <article key={location.name} className="reveal card">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#E84B2A]">
                    {location.city}
                  </p>
                  <h3 className="mt-2 text-3xl font-semibold">{location.name}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-[#6B7280]">{location.address}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {location.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-black/10 px-3 py-1 text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
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
                  <p className="text-xs font-semibold uppercase tracking-wide text-[#E84B2A]">
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

        <section id="precios" className="mx-auto w-full max-w-7xl px-6 py-24">
          <p className="section-label">Precios transparentes</p>
          <h2 className="reveal mt-4 max-w-4xl text-4xl font-semibold md:text-6xl">
            Desbloquea valor y flexibilidad para tu negocio
          </h2>
          <a href="#contacto" className="btn-primary reveal mt-8 inline-flex">
            Comenzar ahora
          </a>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              ['Basic', '$10/mes', 'Nuestro plan más popular.'],
              ['Business', '$20/mes', 'Funciones avanzadas y reportes.'],
              ['Enterprise', '$40/mes', 'Todas las funcionalidades sin límites.'],
            ].map(([name, price, description]) => (
              <article key={name} className="reveal card">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="mt-3 text-4xl font-bold text-[#E84B2A]">{price}</p>
                <p className="mt-2 text-[#6B7280]">{description}</p>
                <ul className="mt-6 space-y-2 text-sm text-[#6B7280]">
                  <li>Access to basic features</li>
                  <li>Basic reporting and analytics</li>
                  <li>Up to 10 individual users</li>
                  <li>20GB individual data each user</li>
                  <li>Basic chat and email support</li>
                </ul>
                <button className="btn-primary mt-8 w-full justify-center">Get Started</button>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-24">
          <div className="mx-auto grid w-full max-w-7xl gap-8 rounded-3xl bg-[#E84B2A] p-10 text-white lg:grid-cols-2 lg:p-14">
            <div className="reveal">
              <h2 className="text-4xl font-semibold md:text-5xl">
                Empodera tu empresa con los espacios de Mi Oficina En
              </h2>
              <p className="mt-5 max-w-xl text-white/90">
                Soluciones listas para operar, atención personalizada y ubicaciones estratégicas en
                México.
              </p>
              <a
                href="#contacto"
                className="mt-8 inline-flex rounded-full bg-white px-7 py-3.5 font-semibold text-[#E84B2A] transition hover:bg-[#f5f5f5]"
              >
                Let&apos;s Get Started
              </a>
            </div>
            <img
              className="reveal h-full min-h-[260px] w-full rounded-2xl object-cover"
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80"
              alt="Oficina moderna"
            />
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-24">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="section-label">Blog y noticias</p>
              <h2 className="reveal mt-3 text-4xl font-semibold md:text-6xl">
                Descubre nuestros últimos posts
              </h2>
            </div>
            <a href="#inicio" className="btn-ghost">
              Ver todo
            </a>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="reveal card overflow-hidden p-0">
                <img src={post.image} alt={post.title} className="aspect-video w-full object-cover" />
                <div className="p-6">
                  <p className="text-sm text-[#6B7280]">{post.date}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{post.title}</h3>
                  <button className="btn-ghost mt-6">Leer más</button>
                </div>
              </article>
            ))}
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
              <p className="flex items-center gap-2 text-xl font-semibold">
                <span className="h-3 w-3 rounded-full bg-[#E84B2A]" />
                mi oficina en
              </p>
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
                <span className="rounded-full border border-white/20 px-3 py-1">Facebook</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Instagram</span>
                <span className="rounded-full border border-white/20 px-3 py-1">LinkedIn</span>
              </div>
            </div>
          </div>
          <p className="mt-10 text-center text-sm text-white/50">
            © Mi Oficina En. Diseñado para presentación inicial.
          </p>
        </div>
      </footer>
    </div>
  )
}
