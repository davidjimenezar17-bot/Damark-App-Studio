import { Cpu, Database, Smartphone, Workflow } from 'lucide-react'

export default function TechVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xl animate-float reveal-up delay-200">
      <div className="absolute -inset-6 -z-10 rounded-[32px] border border-tech/10 opacity-70 animate-orbit" />
      <div className="relative overflow-hidden rounded-lg border border-white/12 bg-white/[0.07] p-4 shadow-soft backdrop-blur-xl">
        <div className="flex items-center gap-2 border-b border-white/10 pb-4">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-300" />
          <span className="h-3 w-3 rounded-full bg-tech" />
          <span className="ml-4 text-xs font-semibold text-white/44">damark-transform-engine.jsx</span>
        </div>

        <div className="relative mt-5 grid gap-4 sm:grid-cols-[1fr_.74fr]">
          <div className="rounded-md bg-ink/72 p-5 font-mono text-sm leading-7 text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
            <p><span className="text-cyanline">const</span> problema = <span className="text-tech">'procesos manuales'</span></p>
            <p><span className="text-cyanline">analizar</span>(operación)</p>
            <p><span className="text-cyanline">diseñar</span>(flujoDigital)</p>
            <p><span className="text-cyanline">deploy</span>(appPersonalizada)</p>
            <div className="mt-5 h-2 origin-left rounded-full bg-tech/70 animate-pulseLine" />
            <div className="mt-3 h-2 w-7/12 origin-left rounded-full bg-cyanline/50 animate-pulseLine" />
          </div>

          <div className="grid gap-3">
            {[
              { icon: Smartphone, label: 'Apps' },
              { icon: Database, label: 'Datos' },
              { icon: Workflow, label: 'Procesos' },
              { icon: Cpu, label: 'APIs' },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="group flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.06] px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-tech/35 hover:bg-white/[0.1]">
                <Icon className="text-tech transition group-hover:scale-110" size={20} />
                <span className="text-sm font-bold text-white/82">{label}</span>
              </div>
            ))}
          </div>

          <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-tech/10 to-transparent animate-scan" />
        </div>
      </div>
      <div className="absolute -bottom-4 left-8 right-8 -z-10 h-px bg-gradient-to-r from-transparent via-tech/50 to-transparent shadow-[0_0_42px_rgba(78,166,58,0.42)]" />
    </div>
  )
}
