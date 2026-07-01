import { CheckCircle2, Database, GitBranch, LayoutDashboard, Smartphone } from 'lucide-react'

const modules = [
  { label: 'Web app', icon: LayoutDashboard },
  { label: 'Mobile', icon: Smartphone },
  { label: 'Data', icon: Database },
  { label: 'Flows', icon: GitBranch },
]

export default function TechVisual() {
  return (
    <div className="studio-visual reveal-up delay-200">
      <div className="studio-orbit" />
      <div className="studio-panel studio-panel--main">
        <div className="studio-panel__top"><span /><span /><span /><b>damark.studio/system</b></div>
        <div className="studio-system">
          <div>
            <p>Operacion</p>
            <strong>Procesos manuales</strong>
          </div>
          <div>
            <p>Arquitectura</p>
            <strong>Flujos digitales</strong>
          </div>
          <div>
            <p>Entrega</p>
            <strong>App en produccion</strong>
          </div>
        </div>
        <div className="studio-line"><span /></div>
        <div className="studio-modules">
          {modules.map(({ label, icon: Icon }) => (
            <article key={label}>
              <Icon size={20} />
              <span>{label}</span>
            </article>
          ))}
        </div>
      </div>

      <div className="studio-panel studio-panel--status">
        <CheckCircle2 size={18} />
        <div>
          <b>Listo para operar</b>
          <span>Responsive, medible, escalable</span>
        </div>
      </div>

      <div className="studio-panel studio-panel--mini">
        <span>FieldTack</span>
        <span>Bau-POS</span>
        <span>CitasFacil</span>
      </div>
    </div>
  )
}
