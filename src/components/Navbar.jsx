import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import damarkLogo from '../assets/DAMARK-LOGO.jpeg'

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 text-white shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="DAMARK APP STUDIO inicio">
          <span className="grid h-12 w-28 place-items-center overflow-hidden rounded-md bg-white p-1.5 shadow-glow transition duration-300 hover:scale-[1.03] sm:w-32">
            <img src={damarkLogo} alt="" className="h-full w-full object-contain" />
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-black tracking-[0.18em]">DAMARK</span>
            <span className="block text-xs font-semibold text-white/62">APP STUDIO</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-semibold text-white/72 transition hover:text-tech after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:rounded-full after:bg-tech after:transition after:duration-300 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
          <a href="#contacto" className="magnetic-button rounded-md bg-tech px-5 py-3 text-sm font-black text-white shadow-glow transition hover:bg-white hover:text-ink">
            Contactar
          </a>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-white/14 text-white transition hover:border-tech hover:text-tech md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? 'Cerrar menu' : 'Abrir menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-5 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="py-2 text-sm font-semibold text-white/78">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
