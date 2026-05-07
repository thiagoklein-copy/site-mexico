import { Link } from 'react-router-dom'

const navItems = [
  { to: '/inicio', label: 'Inicio' },
  { to: '/oficina-privada', label: 'Oficina Privada' },
  { to: '/oficina-virtual', label: 'Oficina Virtual' },
  { to: '/coworking', label: 'Coworking' },
  { to: '/salas-de-juntas', label: 'Salas de Juntas' },
  { to: '/contacto', label: 'Contacto' },
]

export function SiteLayout({ children }) {
  return (
    <div className="bg-white text-[#1A1A1A]">
      <header className="fixed top-0 z-50 w-full border-b border-black/5 bg-white/95 backdrop-blur">
        <div className="mx-auto flex min-h-[60px] w-full max-w-7xl flex-wrap items-center gap-4 px-6 py-1">
          <Link to="/inicio" className="flex items-center">
            <img src="/logo-moe.png" alt="Mi Oficina en" className="h-16 w-auto rounded-sm object-contain" />
          </Link>
          <nav className="flex flex-1 flex-wrap items-center justify-center gap-2 text-sm sm:gap-3">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="nav-item">
                {item.label}
              </Link>
            ))}
          </nav>
          <Link to="/contacto" className="btn-ghost px-6 py-2 text-sm">
            Contáctanos
          </Link>
        </div>
      </header>

      <main className="pt-[60px]">{children}</main>

      <footer className="bg-[#111] px-6 py-14 text-white">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3">
            <div>
              <p className="font-semibold">Contacto</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>info@mioficinaen.com</li>
                <li>55-5254-2235</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Enlaces legales</p>
              <ul className="mt-3 space-y-2 text-sm text-white/70">
                <li>Aviso de Privacidad</li>
                <li>Términos y condiciones</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold">Redes sociales</p>
              <div className="mt-3 flex flex-wrap gap-3 text-sm text-white/80">
                <span className="rounded-full border border-white/20 px-3 py-1">Facebook</span>
                <span className="rounded-full border border-white/20 px-3 py-1">Instagram</span>
                <span className="rounded-full border border-white/20 px-3 py-1">LinkedIn</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 rounded-full bg-[#c9d42b] px-5 py-3 text-sm font-medium text-[#1A1A1A] shadow-lg">
        Hola 👋 ¿En qué podemos ayudarte?
      </div>
    </div>
  )
}
