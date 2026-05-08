export function SiteFooter() {
  return (
    <footer id="contacto" className="bg-[#111] px-6 py-20 text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 rounded-3xl bg-[#1C1C1C] p-8 md:p-10 lg:grid-cols-2">
          <div>
            <h2 className="text-4xl font-semibold md:text-5xl">¿Listo para transformar tu forma de trabajar?</h2>
            <p className="mt-5 max-w-xl text-white/75">
              Contáctanos hoy mismo y agenda una visita para encontrar el espacio perfecto para tu empresa.
            </p>
            <p className="mt-5 text-sm text-white/70">...o contáctanos con la información abajo.</p>
            <div className="mt-6 space-y-3 text-sm text-white/85">
              <p className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 fill-current" aria-hidden="true">
                  <path d="M12 2.25a7.5 7.5 0 0 0-7.5 7.5c0 5.74 6.78 11.37 7.07 11.61a.67.67 0 0 0 .86 0c.29-.24 7.07-5.87 7.07-11.61a7.5 7.5 0 0 0-7.5-7.5Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z" />
                </svg>
                <span>Av. Homero 229-501, Polanco I Sección, Miguel Hidalgo, C.P. 11560, CDMX</span>
              </p>
              <p className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
                  <path d="M3.75 5.25A2.25 2.25 0 0 1 6 3h12a2.25 2.25 0 0 1 2.25 2.25v.42l-8.25 5.37L3.75 5.67v-.42Zm0 2.21v11.29A2.25 2.25 0 0 0 6 21h12a2.25 2.25 0 0 0 2.25-2.25V7.46l-7.84 5.11a.75.75 0 0 1-.82 0L3.75 7.46Z" />
                </svg>
                <a href="mailto:info@mioficinaen.com" className="transition hover:text-[#c9d42b]">
                  info@mioficinaen.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-current" aria-hidden="true">
                  <path d="M6.62 10.79a15.54 15.54 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.03-.24c1.12.37 2.32.57 3.56.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C11.85 21 3 12.15 3 1.5a1 1 0 0 1 1-1H7.5a1 1 0 0 1 1 1c0 1.24.2 2.44.57 3.56a1 1 0 0 1-.24 1.03l-2.2 2.2Z" />
                </svg>
                <a href="tel:+525552542235" className="transition hover:text-[#c9d42b]">
                  55-5254-2235
                </a>
              </p>
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
            <img src="/logo-moe.png" alt="Mi Oficina En" className="h-10 w-auto rounded-sm object-contain" />
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
  )
}
