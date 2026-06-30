import { BarChart3, Blocks, Cog, Laptop, Smartphone } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const services = [
  { title: 'Desarrollo de Apps', icon: Smartphone, description: 'Aplicaciones móviles rápidas, intuitivas y pensadas para trabajo de campo o atención al cliente.' },
  { title: 'Software Empresarial', icon: Laptop, description: 'Plataformas internas para ordenar operaciones, equipos, ventas, reportes y administración.' },
  { title: 'Automatización de Procesos', icon: Cog, description: 'Flujos digitales para reducir captura manual, errores operativos y tiempos muertos.' },
  { title: 'Sistemas de Gestión', icon: BarChart3, description: 'Paneles, métricas, permisos y herramientas para tomar mejores decisiones.' },
  { title: 'Integraciones y APIs', icon: Blocks, description: 'Conectamos sistemas, bases de datos, servicios externos y procesos críticos.' },
]

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Servicios" title="Soluciones digitales para operar mejor." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map(({ title, icon: Icon, description }, index) => (
            <article key={title} className={`group surface-premium interactive-lift rounded-md p-6 reveal-up ${index > 2 ? 'delay-200' : 'delay-100'} hover:border-tech/40 hover:shadow-glow`}>
              <div className="mb-6 grid h-12 w-12 place-items-center rounded-md bg-ink text-tech transition duration-300 group-hover:scale-110 group-hover:bg-tech group-hover:text-white">
                <Icon size={24} />
              </div>
              <h3 className="text-lg font-black text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
