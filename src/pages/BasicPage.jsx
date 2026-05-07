import { SiteLayout } from '../components/SiteLayout'

const sharedBenefits = [
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

const officeVirtualBenefits = [
  {
    title: 'Imagen empresarial sólida',
    text: 'Proyecta una imagen empresarial sólida con una dirección comercial y fiscal de prestigio, generando confianza entre tus clientes y socios comerciales.',
  },
  {
    title: 'Sin compromisos a largo plazo',
    text: 'Elimina la necesidad de compromisos a largo plazo y costos asociados a una oficina física.',
  },
  {
    title: 'Pagas solo por lo que usas',
    text: 'Utiliza nuestros servicios según tus necesidades y paga lo justo por los servicios que utilizas.',
  },
  {
    title: 'Servicios administrativos completos',
    text: 'Accede a servicios administrativos como recepción de llamadas, gestión de correspondencia y salas de reuniones en CDMX y Querétaro, permitiéndote centrarte en lo más importante: hacer crecer tu negocio.',
  },
  {
    title: 'Trabaja desde donde quieras',
    text: 'Trabaja desde donde quieras, pero con una presencia sólida donde importa.',
  },
]

const coworkingBenefits = [
  { title: 'Ambiente moderno y flexible', text: 'Sin compromisos a largo plazo.' },
  { title: 'Bebidas y Snacks ilimitados', text: 'Disfruta sin preocupaciones mientras trabajas.' },
  { title: 'Internet ultra rápido', text: 'Y áreas de impresión, para que nada te detenga.' },
  { title: 'Networking', text: 'Networking con otros emprendedores y profesionales.' },
  { title: 'Salas de juntas', text: 'Acceso a salas de juntas en CDMX y QRO.' },
]

const ctaText =
  'Contáctanos hoy mismo y descubre por qué somos la mejor opción en la Ciudad de México. ¡Agenda una visita y encuentra el espacio perfecto para ti!'

export function BasicPage({ page }) {
  if (page === 'oficina-privada') {
    return (
      <SiteLayout>
        <section className="px-6 py-20">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-10 shadow-sm">
            <h1 className="text-4xl font-bold">Oficina Privada</h1>
            <p className="mt-4 text-xl font-medium">¿Listo para llevar tu negocio al siguiente nivel?</p>
            <p className="mt-4 text-[#6b7280]">
              En Mi Oficina en, te ofrecemos la dirección, el espacio y el respaldo profesional que necesitas para hacer crecer tu empresa. Tú te enfocas en tu negocio, nosotros en darte el espacio ideal.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 py-4 pb-20">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sharedBenefits.map((benefit) => (
              <article key={benefit.title} className="card">
                <h2 className="text-2xl font-semibold">{benefit.title}</h2>
                <p className="mt-3 text-[#6B7280]">{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#c9d42b] p-10 text-[#1a1a1a]">
            <p className="text-xl font-semibold">{ctaText}</p>
          </div>
        </section>
      </SiteLayout>
    )
  }

  if (page === 'oficina-virtual') {
    const plans = [
      {
        name: 'PLAN BÁSICO — $679 + IVA / mes',
        items: [
          'Domicilio Fiscal',
          'Domicilio comercial',
          '8 horas de sala de juntas',
          'Recepción de documentación',
          'Recepción de paquetería',
          'Recepción de llamadas',
          'Acceso a salas de juntas CDMX y Qro.',
          'Cafetería básica',
        ],
      },
      {
        name: 'PLAN COMPLETO — $829 + IVA / mes',
        items: [
          'Domicilio fiscal y comercial',
          '10 horas de acceso a salas de juntas o coworking',
          'Recepcionista que atenderá tus llamadas',
          'Recepción y manejo de paquetería y documentos',
          'Atención profesional para tus clientes',
          'Servicio de cafetería básica',
          'Internet de gran velocidad',
        ],
      },
      {
        name: 'PLAN PREMIUM — $1,218 + IVA / mes',
        items: [
          'Domicilio Fiscal',
          'Domicilio comercial',
          '15 horas de sala de juntas',
          'Recepción de documentación',
          'Recepción de paquetería',
          'Recepción de llamadas',
          'Acceso a salas de juntas CDMX y Qro.',
          'Cafetería básica',
        ],
      },
    ]

    return (
      <SiteLayout>
        <section className="px-6 py-20">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-10 shadow-sm">
            <h1 className="text-4xl font-bold">Oficina Virtual</h1>
            <p className="mt-4 text-xl font-medium">¿Eres emprendedor, freelancer o una empresa en crecimiento?</p>
            <p className="mt-4 text-[#6b7280]">
              Con nuestras oficinas virtuales, obtienes una imagen profesional sin los costos de una oficina física.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card">En el corazón de la ciudad, con acceso a las principales áreas de negocios y servicios de primer nivel.</article>
            <article className="card">Un entorno exclusivo y una ubicación privilegiada para tu empresa.</article>
            <article className="card">Conectividad y dinamismo en una de las avenidas más importantes de la ciudad.</article>
            <article className="card">Una de las zonas con mayor crecimiento en la ciudad de Querétaro.</article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {officeVirtualBenefits.map((benefit) => (
              <article key={benefit.title} className="card">
                <h2 className="text-2xl font-semibold">{benefit.title}</h2>
                <p className="mt-3 text-[#6B7280]">{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16">
          <div className="rounded-2xl bg-[#f5f5f5] p-8 text-center text-3xl font-bold">
            Planes desde $679 + IVA mensuales.
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className="card">
                <h2 className="text-xl font-bold">{plan.name}</h2>
                <ul className="mt-4 space-y-2 text-[#6B7280]">
                  {plan.items.map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#c9d42b] p-10 text-[#1a1a1a]">
            <p className="text-xl font-semibold">{ctaText}</p>
          </div>
        </section>
      </SiteLayout>
    )
  }

  if (page === 'coworking') {
    return (
      <SiteLayout>
        <section className="px-6 py-20">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-10 shadow-sm">
            <h1 className="text-4xl font-bold">Coworking</h1>
            <blockquote className="mt-6 border-l-4 border-[#c9d42b] pl-4 italic text-[#6b7280]">
              Los espacios de coworking suelen ofrecer membresías flexibles que se adaptan a las necesidades de cada individuo o empresa, lo que permite escalar el espacio según sea necesario y evita compromisos a largo plazo.
            </blockquote>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl space-y-6 px-6 pb-16 text-[#6b7280]">
          <p className="card">
            Al compartir un espacio de trabajo con profesionales de diferentes campos, hay oportunidades constantes para conocer gente nueva, intercambiar ideas y colaborar en proyectos.
          </p>
          <p className="card">
            Los espacios de coworking suelen estar diseñados para fomentar la productividad, con comodidades como áreas de trabajo silenciosas, salas de reuniones equipadas y acceso a tecnología y servicios de oficina.
          </p>
          <p className="card">
            Al compartir los gastos de alquiler, servicios públicos y otros gastos relacionados con la oficina, los individuos y las empresas pueden reducir significativamente sus costos operativos en comparación con alquilar un espacio de trabajo tradicional.
          </p>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coworkingBenefits.map((benefit) => (
              <article key={benefit.title} className="card">
                <h2 className="text-2xl font-semibold">{benefit.title}</h2>
                <p className="mt-3 text-[#6B7280]">{benefit.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card">Un entorno exclusivo y una ubicación privilegiada para tu empresa.</article>
            <article className="card">Una de las zonas con mayor crecimiento en la ciudad de Querétaro.</article>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#c9d42b] p-10 text-[#1a1a1a]">
            <p className="text-xl font-semibold">{ctaText}</p>
          </div>
        </section>
      </SiteLayout>
    )
  }

  if (page === 'salas-de-juntas') {
    return (
      <SiteLayout>
        <section className="px-6 py-20">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-10 shadow-sm">
            <h1 className="text-4xl font-bold">Salas de Juntas</h1>
            <p className="mt-4 text-xl font-medium">Reúnete con éxito en nuestras salas de juntas.</p>
            <p className="mt-4 text-[#6b7280]">¡Espacios cómodos y equipados para tus necesidades!</p>
          </div>
        </section>

        <section className="px-6 pb-20">
          <div className="mx-auto w-full max-w-7xl rounded-3xl bg-[#c9d42b] p-10 text-[#1a1a1a]">
            <p className="text-xl font-semibold">{ctaText}</p>
          </div>
        </section>
      </SiteLayout>
    )
  }

  if (page === 'contacto') {
    return (
      <SiteLayout>
        <section className="px-6 py-20">
          <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-10 shadow-sm">
            <h1 className="text-4xl font-bold">Contáctanos</h1>
            <p className="mt-4 text-xl font-medium">A tus órdenes</p>
            <p className="mt-4 text-[#6b7280]">¿Tienes preguntas? Hablemos.</p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="card">
              <p className="text-[#6b7280]">Email: info@mioficinaen.com</p>
              <p className="mt-2 text-[#6b7280]">Teléfonos: 55 4329 0885 / 55-5254-2235</p>
            </article>
            <article className="card">
              <p className="text-[#6b7280]">
                Av. Homero 229-Piso 5, Polanco V Sección, Miguel Hidalgo, 11560 Ciudad de México, CDMX
              </p>
            </article>
            <article className="card">
              <ul className="space-y-2 text-[#6b7280]">
                <li>- Polanco, CDMX</li>
                <li>- Lomas, CDMX</li>
                <li>- Insurgentes, CDMX</li>
                <li>- Juriquilla, QRO</li>
                <li>- Anzures, CDMX</li>
              </ul>
            </article>
            <article className="card">
              <p className="text-[#6b7280]">Facebook · Instagram · LinkedIn</p>
            </article>
          </div>
        </section>
      </SiteLayout>
    )
  }

  return (
    <SiteLayout>
      <section className="px-6 py-20">
        <div className="mx-auto w-full max-w-5xl rounded-2xl bg-white p-10 shadow-sm">
          {/* TEXTO PENDENTE */}
        </div>
      </section>
    </SiteLayout>
  )
}
