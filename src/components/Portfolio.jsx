import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import SectionHeading from './SectionHeading.jsx'

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative isolate bg-ink py-24 text-white sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:48px_48px] opacity-35" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-tech/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Portafolio" title="Productos reales para resolver operaciones reales." tone="dark">
          Cada proyecto nace de una necesidad concreta: controlar costos, ahorrar tiempo, conectar equipos y convertir procesos complejos en software simple de usar.
        </SectionHeading>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article key={project.id} className={`group dark-surface-premium interactive-lift rounded-lg backdrop-blur reveal-up ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''} hover:border-tech/40`}>
              <div className="relative bg-navy p-5">
                <img className="aspect-[4/3] w-full rounded-md object-cover transition duration-500 group-hover:scale-[1.025]" src={project.image} alt={`Mockup de ${project.name}`} />
              </div>
              <div className="relative p-6">
                <h3 className="text-2xl font-black text-white">{project.name}</h3>
                <p className="mt-4 min-h-40 text-sm leading-7 text-white/68">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-md border border-tech/25 bg-tech/10 px-3 py-1 text-xs font-bold text-tech transition hover:border-tech/50 hover:bg-tech/15">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href="#contacto" className="group/link mt-7 inline-flex items-center gap-2 text-sm font-black text-white transition hover:text-tech">
                  Ver detalles <ExternalLink className="transition group-hover/link:translate-x-1" size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
