import { Bell, BriefcaseBusiness, CalendarDays, Cloud, Menu, Monitor, Moon, Search, ShoppingBag, SlidersHorizontal, Smartphone, User, Users } from 'lucide-react'
import { useState } from 'react'

const metrics = [
  ['Total Employees', '128', Users],
  ['Active Clients', '6', BriefcaseBusiness],
  ['Active Tasks', '25', CalendarDays],
  ['Weather', '87F', Cloud],
]

const days = Array.from({ length: 30 }, (_, index) => index + 1)

const products = [
  {
    category: 'PANTALONES',
    name: 'Pantalón Slim Fit Negro',
    price: '$1,190',
    colors: ['#151515', '#4b5563', '#111827'],
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=620&q=80',
  },
  {
    category: 'PANTALONES',
    name: 'Pantalón Chino Beige',
    price: '$842',
    oldPrice: '$990',
    badge: '-15%',
    colors: ['#c8bea5', '#7b8662'],
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=620&q=80',
  },
  {
    category: 'PLAYERAS',
    name: 'Playera Esencial Algodón Pima',
    price: '$590',
    colors: ['#f5f5f5', '#111827', '#315579'],
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=620&q=80',
  },
  {
    category: 'PLAYERAS',
    name: 'Playera Oversized Gráfica',
    price: '$632',
    oldPrice: '$790',
    badge: '-20%',
    colors: ['#111827', '#e5e7eb'],
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=620&q=80',
  },
]

function BrowserBar({ url }) {
  return (
    <div className="mock-browser-bar">
      <span>{'<'}</span>
      <span>{'>'}</span>
      <span className="mock-url">{url}</span>
      <span>R</span>
    </div>
  )
}

function PosScreen({ compact = false }) {
  return (
    <div className="pos-screen">
      <div className="pos-top"><span>Menu</span><strong>POS Taqueria</strong></div>
      <div className={compact ? 'pos-mobile-body' : 'pos-grid'}>
        <div className="pos-main">
          <h4>Mesa 2</h4>
          <p>Venta rapida por plato</p>
          <div className="pos-tabs"><b>Comensal 1</b><button>+</button></div>
          {!compact && (
            <div className="pos-work">
              <div className="pos-cats">{['TACOS', 'GRINGAS', 'TORTAS', 'QUESADILLAS', 'BEBIDAS', 'EXTRAS'].map((item) => <span key={item}>{item}</span>)}</div>
              <div className="pos-products"><article><b>Media Gringa</b><span>GRINGAS</span></article><article><b>Gringa</b><span>GRINGAS</span></article></div>
            </div>
          )}
        </div>
        <OrderPanel />
      </div>
    </div>
  )
}

function OrderPanel() {
  return (
    <aside className="order-panel">
      <div className="order-head"><div><h5>Orden</h5><span>Estado: Ocupada</span></div><strong>$100.00</strong></div>
      <div className="order-actions"><span>MOVER MESA</span><span>COBRAR</span><span>REIMPRIMIR PEDIDO</span><span>PRE-CUENTA</span><span>CERRAR CUENTA</span></div>
      <div className="order-item">
        <b>Plato 1</b>
        <p><strong>1x Gringa</strong><em>$100.00</em></p>
        <small>Pendiente de guardar</small>
        <span>Mezcla: Mitad y Mitad</span>
        <span>Tortilla: Maiz</span>
        <span>Comentario: Tripa dorada</span>
        <span>1 Asada + Tripa<br />- Con Todo<br />- Sin Verdura</span>
        <button>ELIMINAR</button>
      </div>
      <div className="save-bar">GUARDAR</div>
    </aside>
  )
}

function FieldTackScreen({ compact = false }) {
  return (
    <div className="field-screen">
      {!compact && <FieldSidebar />}
      <main className="field-main">
        <div className="field-top"><strong>Dashboard</strong><div><Search size={14} /><span>Search...</span><b>J</b></div></div>
        <div className="metric-grid">
          {metrics.map(([label, value, Icon]) => (
            <article key={label}><span>{label}<Icon size={13} /></span><strong>{value}</strong><small>{label === 'Weather' ? 'Stormy at your location' : 'Across all clients'}</small></article>
          ))}
        </div>
        <div className="field-panels">
          <section><h4>Work Activity Overview</h4><p>Total hours worked, pieces collected, and active workers.</p><div className="bar-chart">{[58, 82, 18, 4, 0, 44].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div></section>
          {!compact && <section><h4>Live Employee Activity</h4><p>A real-time view of who is currently clocked in.</p><div className="empty-row">No employees are currently clocked in.</div></section>}
        </div>
      </main>
    </div>
  )
}

function FieldSidebar() {
  return (
    <aside className="field-sidebar">
      <strong>FieldTack WA</strong>
      {['Dashboard', 'Time Tracking', 'Employees', 'Clients', 'Tasks', 'Payroll', 'Invoicing'].map((item) => <span key={item}>{item}</span>)}
    </aside>
  )
}

function CitasScreen({ compact = false }) {
  return (
    <div className="citas-screen">
      {!compact && <aside className="citas-sidebar"><b>CitasFacil</b><span>David<br /><small>Cliente</small></span><em>Inicio</em><em>Buscar</em><em>Mis Citas</em><em>Notificaciones</em></aside>}
      <main className="citas-main">
        <div className="citas-top">{compact ? <Menu size={16} /> : <span />}<div><Moon size={15} /><Bell size={15} /><b>D</b></div></div>
        {compact && <div className="notify-box"><Bell size={15} /><p><b>Activa las notificaciones</b><span>Te avisamos 2 horas antes de cada cita.</span></p><button>Activar</button></div>}
        <div className="citas-title"><div><h4>Mis Citas</h4><p>1 cita en total</p></div><button>Reservar nueva</button></div>
        <section className="calendar-card">
          <div className="calendar-head"><span>{'<'}</span><b>Junio 2026</b><span>{'>'}</span></div>
          <div className="calendar-grid">
            {['LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB', 'DOM'].map((day) => <strong key={day}>{day}</strong>)}
            {days.map((day) => <span key={day} className={day === 30 ? 'active' : ''}>{day}</span>)}
          </div>
          <div className="legend"><span>Pendientes</span><span>Aprobadas</span><span>En proceso</span><span>Mixto</span></div>
        </section>
        {!compact && <div className="cita-card"><b>JUE<br />9</b><p><strong>Bisek Barber</strong><span>Aprobada</span><small>Cita: jueves 9 de julio 2026 - 1:15 PM</small></p></div>}
      </main>
    </div>
  )
}

function StoreScreen({ compact = false }) {
  return (
    <div className="store-screen">
      <header className="store-top">
        {compact ? <Menu size={16} /> : <nav><span>Dama</span><span>Caballero</span><span>Novedades</span><span>Ofertas</span></nav>}
        <strong>TIENDA</strong>
        <div><Search size={16} /><User size={16} /><ShoppingBag size={16} /></div>
      </header>

      <main className="store-main">
        <div className="store-title">
          <span>COLECCIÓN</span>
          <h4>Caballero</h4>
          <p>9 productos</p>
        </div>

        <div className="store-toolbar">
          <span><SlidersHorizontal size={14} /> Filtros</span>
          <span>Relevancia⌄</span>
        </div>

        <div className={compact ? 'store-layout store-layout--mobile' : 'store-layout'}>
          {!compact && (
            <aside className="store-filter">
              <b>FILTRAR</b>
              <a>Limpiar todo</a>
              <strong>CATEGORÍA</strong>
              {['Todo', 'Pantalones', 'Playeras', 'Calzado', 'Accesorios'].map((item) => <span key={item}>{item}</span>)}
              <strong>PRECIO</strong>
              {['Menos de $500', '$500 - $1,500', '$1,500 - $3,000', 'Más de $3,000'].map((item) => <span key={item}>{item}</span>)}
            </aside>
          )}
          <div className="store-products">
            {products.map((product) => (
              <article key={product.name} className="store-product">
                <div className="store-product__image">
                  <img src={product.image} alt="" loading="lazy" />
                  {product.badge && <em>{product.badge}</em>}
                </div>
                <span>{product.category}</span>
                <b>{product.name}</b>
                <p>{product.price} {product.oldPrice && <s>{product.oldPrice}</s>}</p>
                <div>{product.colors.map((color) => <i key={color} style={{ background: color }} />)}</div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

function Screen({ id, compact }) {
  if (id === 'fieldtack') return <FieldTackScreen compact={compact} />
  if (id === 'citas-facil') return <CitasScreen compact={compact} />
  if (id === 'tienda-online') return <StoreScreen compact={compact} />
  return <PosScreen compact={compact} />
}

export default function ProjectMockup({ project }) {
  const [view, setView] = useState('desktop')
  const url =
    project.id === 'fieldtack'
      ? 'fieldtack.vercel.app'
      : project.id === 'citas-facil'
        ? 'appcitas-eta.vercel.app'
        : project.id === 'tienda-online'
          ? 'tienda-online-two-zeta.vercel.app'
          : 'pos-taqueriabau.vercel.app'

  return (
    <div className={`project-showcase project-showcase--${project.id} project-showcase--${view}`}>
      <div className="mockup-switch" aria-label={`Vista de mockup de ${project.name}`}>
        <button className={view === 'desktop' ? 'is-active' : ''} type="button" onClick={() => setView('desktop')}>
          <Monitor size={16} /> Desktop
        </button>
        <button className={view === 'mobile' ? 'is-active' : ''} type="button" onClick={() => setView('mobile')}>
          <Smartphone size={16} /> Movil
        </button>
      </div>

      {view === 'mobile' ? (
        <div className="phone-frame">
          <div className="phone-notch" />
          <Screen id={project.id} compact />
        </div>
      ) : (
        <div className="laptop-frame">
          <BrowserBar url={url} />
          <Screen id={project.id} />
        </div>
      )}
    </div>
  )
}
