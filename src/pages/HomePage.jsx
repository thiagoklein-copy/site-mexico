import { SiteLayout } from '../components/SiteLayout'

const benefits = [
  {
    title: 'Internet de alta velocidad',
    text: '¡Navega sin límites! Contamos con internet rápido y estable para que disfrutes la mejor experiencia.',
  },
  {
    title: 'Cafetería y Snacks',
    text: 'Recarga energías con nuestra barra de café y snacks. ¡Disfruta mientras trabajas o te relajas!',
  },
  {
    title: 'Salas de juntas',
    text: 'Reúnete con éxito en nuestras salas de juntas. ¡Espacios cómodos y equipados para tus necesidades!',
  },
  {
    title: 'Espacios cómodos',
    text: 'Para potenciar tu productividad. ¡Comodidad y funcionalidad en cada espacio!',
  },
  {
    title: 'Atención personalizada',
    text: 'Para brindarte la mejor experiencia. ¡Estamos aquí para ayudarte!',
  },
  {
    title: 'Precios competitivos',
    text: 'Calidad y ahorro en un solo lugar. ¡Ofrecemos precios competitivos para ti!',
  },
]

const locations = [
  {
    title: 'Polanco I (Homero)',
    text: 'Av. Homero 229 Ofi. 501, Colonia Polanco I Sección, Miguel Hidalgo, C.P. 11560',
    services: 'Oficinas Privadas, Oficinas Virtuales, Coworking, TOUR VIRTUAL',
  },
  {
    title: 'Lomas (Periférico)',
    text: 'Blvrd. Manuel Ávila Camacho 235, Piso 2, Polanco V Sección, Miguel Hidalgo, C.P. 11510',
    services: 'Oficinas Privadas, Oficinas Virtuales, Coworking, TOUR VIRTUAL',
  },
  {
    title: 'Mixcoac',
    text: 'Av. Río Mixcoac 39 – 103, Col. Insurgentes Mixcoac, Benito Juárez, C.P. 03920. Junto a Plaza Manacar.',
    services: 'Oficinas Privadas, Oficinas Virtuales, TOUR VIRTUAL',
  },
  {
    title: 'Insurgentes',
    text: 'Av. Insurgentes Sur 1783 – 301, Col. Guadalupe Inn, Álvaro Obregón, C.P. 01020',
  },
  {
    title: 'Juriquilla (Querétaro)',
    text: 'The Village at Juriquilla, Piso 4, Ofi. 409, Blvd. de las Ciencias 3015, C.P. 76230',
  },
  {
    title: 'Anzures',
    text: 'Calz. Gral. Mariano Escobedo 724, Of. 701, Anzures, Miguel Hidalgo, 11590 CDMX',
  },
]

export function HomePage() {
  return (
    <SiteLayout>
      <section
        className="relative flex min-h-[80vh] items-end overflow-hidden bg-black px-6 pb-12 pt-24 md:pb-14 md:pt-32"
        style={{
          backgroundImage:
            "linear-gradient(105deg, rgba(0,0,0,0.58) 8%, rgba(0,0,0,0.34) 48%, rgba(0,0,0,0.22) 100%), url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1920&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-5xl">
            <h1 className="text-[2.7rem] font-bold leading-[0.95] tracking-[-0.03em] text-white sm:text-[3.8rem] lg:text-[4.5rem]">
              En Mi Oficina en, te ofrecemos la dirección, el espacio y el respaldo profesional que necesitas para hacer crecer tu empresa.
            </h1>
            <p className="mt-6 max-w-[56ch] text-base leading-relaxed text-white/92 md:text-lg">
              Tú te enfocas en tu negocio, nosotros en darte el espacio ideal.
            </p>
            <button className="btn-primary mt-6">Agenda una visita</button>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="card">
              <h2 className="text-2xl font-semibold">{benefit.title}</h2>
              <p className="mt-3 text-[#6B7280]">{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f9f9f9] px-6 py-20">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <article key={location.title} className="card">
                <h2 className="text-2xl font-semibold">{location.title}</h2>
                <p className="mt-3 text-[#6B7280]">{location.text}</p>
                {location.services ? <p className="mt-4 text-sm font-medium">{location.services}</p> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#c9d42b] p-10 text-[#1a1a1a] lg:p-14">
          <h2 className="text-4xl font-semibold md:text-5xl">
            Contáctanos hoy mismo y descubre por qué somos la mejor opción en la Ciudad de México.
          </h2>
          <p className="mt-5 text-[#1a1a1a]/80">
            ¡Agenda una visita y encuentra el espacio perfecto para ti!
          </p>
          <button className="btn-ghost mt-8">Contáctanos</button>
        </div>
      </section>
    </SiteLayout>
  )
}
