import { Link } from 'react-router-dom'

export function BasicPage({ title, description }) {
  return (
    <div className="min-h-screen bg-[#f5f5f5] text-[#1a1a1a]">
      <header className="fixed top-0 z-40 w-full border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[60px] w-full max-w-7xl flex-wrap items-center gap-4 px-6 py-1">
          <Link to="/inicio" className="flex items-center">
            <img
              src="/logo-moe.png"
              alt="Mi Oficina En"
              className="h-12 w-auto rounded-sm object-contain"
            />
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

      <main className="px-6 py-28">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 rounded-2xl bg-white p-10 shadow-sm">
          <Link
            to="/inicio"
            className="w-fit rounded-full border border-[#1a1a1a] px-5 py-2 text-sm font-medium transition hover:bg-[#1a1a1a] hover:text-white"
          >
            Volver al inicio
          </Link>
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-[#c9d42b]">
              Mi Oficina En
            </p>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="mt-4 max-w-2xl text-[#6b7280]">{description}</p>
          </div>
        </div>
      </main>
    </div>
  )
}
