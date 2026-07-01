import { Code2, Compass, Rocket, Search, ShieldCheck } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const steps = [
  {
    title: 'Descubrimos',
    icon: Search,
    description: 'Entendemos tus procesos, dolores y objetivos antes de escribir una línea de código.',
  },
  {
    title: 'Diseñamos',
    icon: Compass,
    description: 'Definimos arquitectura, flujos y experiencia para que el software nazca con dirección.',
  },
  {
    title: 'Desarrollamos',
    icon: Code2,
    description: 'Construimos la solución con ciclos claros, avances visibles y criterios técnicos sólidos.',
  },
  {
    title: 'Probamos',
    icon: ShieldCheck,
    description: 'Validamos funcionalidad, rendimiento y escenarios reales antes de ponerlo en operación.',
  },
  {
    title: 'Entregamos',
    icon: Rocket,
    description: 'Lanzamos, acompañamos y dejamos una base preparada para evolucionar con tu empresa.',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="process-section relative isolate overflow-hidden bg-ink py-24 text-white sm:py-28">
      <div className="absolute inset-0 -z-10 bg-grid bg-[size:44px_44px] opacity-25" />
      <div className="process-glow process-glow--left" />
      <div className="process-glow process-glow--right" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Cómo trabajamos" title="Un flujo claro desde la idea hasta producción." tone="dark">
          Cada etapa está conectada para reducir incertidumbre, tomar mejores decisiones y convertir una necesidad real en software funcional.
        </SectionHeading>

        <div className="process-timeline mt-16">
          {steps.map(({ title, icon: Icon, description }, index) => (
            <article key={title} className={`process-step reveal-up ${index === 1 ? 'delay-100' : index > 1 ? 'delay-200' : ''}`}>
              <span className="process-step__number">{String(index + 1).padStart(2, '0')}</span>
              <span className="process-step__icon"><Icon size={22} /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
