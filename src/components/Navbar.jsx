import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import BrandMark from './BrandMark.jsx'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#inicio')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-28% 0px -55% 0px', threshold: [0.12, 0.28, 0.5] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
      setProgress(Math.min(100, Math.max(0, value)))
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 text-white shadow-[0_18px_55px_rgba(0,0,0,0.24)] backdrop-blur-2xl">
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/8">
          <span className="block h-full bg-gradient-to-r from-tech via-cyanline to-white/80 transition-[width] duration-150" style={{ width: `${progress}%` }} />
        </div>

        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#inicio" className="flex items-center gap-3" aria-label="DAMARK APP STUDIO inicio">
            <BrandMark compact />
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  active === link.href ? 'bg-white text-ink shadow-[0_10px_30px_rgba(255,255,255,0.14)]' : 'text-white/68 hover:bg-white/[0.08] hover:text-tech'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a href="#contacto" className="magnetic-button hidden rounded-full bg-tech px-5 py-3 text-sm font-black text-white shadow-glow transition hover:bg-white hover:text-ink md:inline-flex">
            Contactar
          </a>

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
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-md border px-4 py-3 text-sm font-bold ${
                    active === link.href ? 'border-tech bg-tech/15 text-tech' : 'border-white/10 text-white/78'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <aside className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex" aria-label="Navegacion por secciones">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`group flex items-center justify-end gap-3 text-xs font-black uppercase tracking-[0.16em] transition ${
              active === link.href ? 'text-tech' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span className="pointer-events-none rounded-md bg-ink/80 px-2 py-1 opacity-0 shadow-soft backdrop-blur transition group-hover:opacity-100">
              {link.label}
            </span>
            <span className={`h-2.5 w-2.5 rounded-full border transition ${active === link.href ? 'border-tech bg-tech shadow-glow' : 'border-slate-400 bg-white/30'}`} />
          </a>
        ))}
      </aside>
    </>
  )
}
