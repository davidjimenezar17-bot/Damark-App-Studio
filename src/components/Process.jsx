import { ArrowRight } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

const steps = ['Analizamos tu idea', 'Diseñamos la solución', 'Desarrollamos la aplicación', 'Probamos e implementamos', 'Damos soporte']

export default function Process() {
  return (
    <section id="proceso" className="section-mesh bg-cloud py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="Cómo trabajamos" title="Un proceso claro desde la primera conversación hasta el soporte." />
        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step} className={`surface-premium interactive-lift relative rounded-md p-6 reveal-up ${index > 2 ? 'delay-200' : 'delay-100'}`}>
              <span className="mb-5 grid h-11 w-11 place-items-center rounded-md bg-ink text-sm font-black text-tech shadow-[0_10px_30px_rgba(7,17,31,0.18)]">{index + 1}</span>
              <h3 className="text-lg font-black leading-7 text-ink">{step}</h3>
              {index < steps.length - 1 && <ArrowRight className="absolute -right-5 top-10 z-10 hidden text-tech md:block" size={26} />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
