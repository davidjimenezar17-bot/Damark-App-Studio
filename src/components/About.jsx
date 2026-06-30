import { CheckCircle2 } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

export default function About() {
  return (
    <section id="nosotros" className="section-mesh bg-cloud py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <SectionHeading eyebrow="Quiénes somos" title="Un estudio enfocado en construir herramientas útiles, escalables y claras." align="left">
          Somos un estudio de desarrollo de software enfocado en crear soluciones digitales personalizadas para empresas y emprendedores. Analizamos problemas reales y los convertimos en herramientas tecnológicas funcionales.
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2">
          {['Aplicaciones diseñadas alrededor de la operación real', 'Arquitectura preparada para crecer', 'Automatización de tareas repetitivas', 'Comunicación clara durante todo el proyecto'].map((item, index) => (
            <div key={item} className={`surface-premium interactive-lift rounded-md p-5 reveal-up ${index > 1 ? 'delay-200' : 'delay-100'}`}>
              <CheckCircle2 className="mb-4 text-tech transition duration-300" size={26} />
              <p className="font-bold leading-7 text-slate-800">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
