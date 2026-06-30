import { ArrowRight, MessageCircle } from 'lucide-react'
import TechVisual from './TechVisual.jsx'
import damarkLogo from '../assets/DAMARK-LOGO.jpeg'

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate bg-ink pt-28 text-white sm:pt-32">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] opacity-70" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(78,166,58,0.16),transparent_32%),linear-gradient(315deg,rgba(90,215,255,0.10),transparent_36%)]" />
      <div className="absolute left-0 right-0 top-20 -z-10 h-px bg-gradient-to-r from-transparent via-tech/45 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-cloud to-transparent" />

      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 pb-24 pt-10 sm:px-8 lg:grid-cols-[1.02fr_.98fr]">
        <div className="max-w-3xl reveal-up">
          <div className="mb-8 w-full max-w-[430px] overflow-hidden rounded-lg border border-white/10 bg-white shadow-glow transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(78,166,58,0.28)]">
            <img src={damarkLogo} alt="DAMARK APP STUDIO" className="w-full object-contain" />
          </div>
          <p className="mb-5 inline-flex rounded-md border border-tech/30 bg-tech/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-tech">
            Software premium a la medida
          </p>
          <h1 className="text-balance text-5xl font-black leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
            DAMARK APP STUDIO
          </h1>
          <p className="mt-6 text-2xl font-bold text-tech sm:text-3xl">Transformamos problemas en aplicaciones a la medida</p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
            Desarrollamos aplicaciones y software personalizados que ayudan a empresas a automatizar procesos, mejorar su productividad y crecer con tecnología.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#portafolio" className="magnetic-button group inline-flex items-center justify-center gap-2 rounded-md bg-tech px-6 py-4 text-sm font-black text-white shadow-glow transition hover:-translate-y-1 hover:bg-white hover:text-ink">
              Ver proyectos <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a href="#contacto" className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/18 bg-white/[0.03] px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:border-tech hover:bg-white/[0.07] hover:text-tech">
              Contactar <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <TechVisual />
      </div>
    </section>
  )
}
