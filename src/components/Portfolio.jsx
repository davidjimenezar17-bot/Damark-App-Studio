import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects.js'
import ProjectMockup from './ProjectMockup.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function Portfolio() {
  return (
    <section id="portafolio" className="relative isolate bg-ink py-24 text-white sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:48px_48px] opacity-30" />
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-tech/50 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Portafolio" title="Interfaces reales para operaciones que no pueden detenerse." tone="dark">
          Creamos sistemas que se usan en mostrador, campo y agenda diaria. Por eso el portafolio vive alrededor de pantallas, flujos y decisiones concretas.
        </SectionHeading>

        <div className="mt-14 grid gap-12">
          {projects.map((project, index) => (
            <article key={project.id} className={`portfolio-feature reveal-up ${index % 2 === 1 ? 'portfolio-feature--flip delay-100' : index === 2 ? 'delay-200' : ''}`}>
              <div className="portfolio-copy">
                <span className="portfolio-kicker" style={{ color: project.accent }}>{project.category}</span>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="portfolio-tags">
                  {project.technologies.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
                <a href="#contacto" className="portfolio-link">
                  Crear algo similar <ExternalLink size={16} />
                </a>
              </div>

              <ProjectMockup project={project} />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
