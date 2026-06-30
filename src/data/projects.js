import fieldtackImage from '../assets/fieldtack.svg'
import bauposImage from '../assets/bau-pos.svg'
import citasImage from '../assets/citas-facil.svg'

export const projects = [
  {
    id: 'fieldtack',
    name: 'FieldTack',
    image: fieldtackImage,
    description:
      'Es nuestra solución insignia en Damark. Un sistema de control de fuerza laboral y nómina para el sector agrícola que funciona al 100 % sin internet, diseñada para que los productores dejen el papel y controlen toda su operación y sus costos desde el celular.',
    technologies: ['React Native', 'Offline-first', 'SQLite', 'Nómina', 'Agricultura'],
  },
  {
    id: 'bau-pos',
    name: 'Bau-POS',
    image: bauposImage,
    description:
      'Punto de Venta diseñado según las necesidades específicas del cliente. Disminuímos el tiempo de captura de comandas, manejamos los artículos de venta y simplificamos la operación de tesorería.',
    technologies: ['React', 'Supabase', 'POS', 'Inventario', 'Impresión'],
  },
  {
    id: 'citas-facil',
    name: 'CitasFácil',
    image: citasImage,
    description:
      'Plataforma web/móvil diseñada para centralizar y automatizar el proceso de reserva de citas para múltiples tipos de negocios. Resuelve el overbooking y la pérdida de tiempo en llamadas manuales con sincronización en tiempo real.',
    technologies: ['Vite', 'Realtime', 'Calendarios', 'Reservas', 'Web App'],
  },
]
