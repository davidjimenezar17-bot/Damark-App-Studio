import { ArrowRight, MessageCircle } from 'lucide-react'
import BrandMark from './BrandMark.jsx'
import TechVisual from './TechVisual.jsx'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-ink pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] opacity-45" />
      <div className="hero-ambient hero-ambient--green" />
      <div className="hero-ambient hero-ambient--blue" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-cloud to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 pb-28 pt-12 sm:px-8 lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-3xl reveal-up">
          <BrandMark mark />

          <p className="mt-8 inline-flex rounded-full border border-tech/25 bg-tech/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-tech">
            Software premium a la medida
          </p>
          <h1 className="mt-7 text-balance text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-[64px]">
            Transformamos procesos en software que hace crecer empresas.
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-white/72">
            Desarrollamos aplicaciones web, móviles y sistemas empresariales diseñados específicamente para las necesidades de tu negocio.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contacto" className="hero-button hero-button--primary magnetic-button group">
              Solicitar cotización <MessageCircle size={18} />
            </a>
            <a href="#portafolio" className="hero-button hero-button--secondary group">
              Ver proyectos <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {['Arquitectura clara', 'Apps web y móviles', 'Operación automatizada'].map((item, index) => (
              <span key={item} className="hero-step">
                <b>{String(index + 1).padStart(2, '0')}</b>
                {item}
              </span>
            ))}
          </div>
        </div>

        <TechVisual />
      </div>
    </section>
  )
}
