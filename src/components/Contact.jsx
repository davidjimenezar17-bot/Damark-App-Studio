import { CheckCircle2, Send, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import SectionHeading from './SectionHeading.jsx'

function GmailLogo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285f4" d="M6 12.5v23c0 2 1.6 3.5 3.5 3.5H15V20.2L6 12.5Z" />
      <path fill="#34a853" d="M33 39h5.5c2 0 3.5-1.6 3.5-3.5v-23l-9 7.7V39Z" />
      <path fill="#fbbc04" d="M33 12.5 24 19.4l-9-6.9v7.7l9 6.9 9-6.9v-7.7Z" />
      <path fill="#ea4335" d="M6 12.5 15 20.2v-7.7L9.8 8.6C8.2 7.4 6 8.6 6 10.6v1.9Zm36 0-9 7.7v-7.7l5.2-3.9c1.6-1.2 3.8 0 3.8 2v1.9Z" />
    </svg>
  )
}

function WhatsAppLogo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#25d366" d="M24 5.5A18.4 18.4 0 0 0 8.1 33.2L6 43l10-2.6A18.5 18.5 0 1 0 24 5.5Z" />
      <path fill="#fff" d="M34.5 29.2c-.6 1.7-3 3.1-4.4 3.3-1.2.2-2.8.3-4.5-.3-1-.3-2.4-.8-4.1-1.8-7.2-3.9-11.9-11-12.2-11.5-.4-.5-2.9-3.9-2.9-7.4s1.8-5.2 2.5-5.9c.6-.7 1.4-.9 1.9-.9h1.4c.4 0 1 .1 1.5 1.2.6 1.3 2 4.8 2.1 5.2.2.4.3.8.1 1.3-.2.5-.3.8-.7 1.2-.3.4-.8.9-1.1 1.2-.4.4-.8.8-.3 1.6.4.8 1.8 3 3.9 4.8 2.7 2.4 4.9 3.1 5.7 3.5.8.4 1.3.3 1.8-.2.5-.6 2-2.4 2.6-3.2.5-.8 1.1-.7 1.8-.4.8.3 4.8 2.3 5.6 2.7.8.4 1.3.6 1.5.9.2.3.2 1.9-.4 3.6Z" transform="scale(.82) translate(5.2 5.2)" />
    </svg>
  )
}

function FacebookLogo() {
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#1877f2" />
      <path fill="#fff" d="M29.6 25.3h-3.9V39h-5.8V25.3h-3v-5h3v-3.1c0-2.4 1.2-6.2 6.2-6.2l4.6.1v5.1h-3.3c-.5 0-1.7.3-1.7 1.9v2.2h4.9l-1 5Z" />
    </svg>
  )
}

const contacts = [
  { label: 'Gmail', value: 'damarkappstudio@gmail.com', href: 'mailto:damarkappstudio@gmail.com', Icon: GmailLogo },
  { label: 'WhatsApp México', value: '+52 312 319 5075', href: 'https://wa.me/523123195075', Icon: WhatsAppLogo },
  { label: 'WhatsApp USA', value: '+1 509 845 0687', href: 'https://wa.me/15098450687', Icon: WhatsAppLogo },
  { label: 'Facebook', value: 'Damark App Studio', href: 'https://www.facebook.com/profile.php?id=61591342388249', Icon: FacebookLogo },
]

const solutionOptions = ['Aplicación móvil', 'Página web', 'Software empresarial', 'Sistema de inventario', 'Sistema POS', 'Automatización de procesos', 'Otro']
const processOptions = ['Excel', 'WhatsApp', 'Manualmente', 'Otro software', 'Otro']
const objectiveOptions = ['Ahorrar tiempo', 'Reducir errores', 'Mejorar ventas', 'Organizar información', 'Automatizar tareas', 'Otro']
const companySizeOptions = ['Soy emprendedor', 'Pequeña empresa', 'Mediana empresa', 'Empresa grande']
const budgetOptions = ['Aún no lo sé', 'Menos de $1,000 USD', '$1,000 - $5,000 USD', 'Más de $5,000 USD']

const initialForm = {
  fullName: '',
  company: '',
  email: '',
  whatsapp: '',
  location: '',
  solutionType: '',
  projectDetails: '',
  currentProcess: '',
  mainObjective: '',
  companySize: '',
  budget: '',
  website: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [startedAt] = useState(Date.now())
  const isSending = status.type === 'sending'

  const requiredFields = useMemo(
    () => ['fullName', 'email', 'whatsapp', 'location', 'solutionType', 'projectDetails', 'currentProcess', 'mainObjective', 'companySize', 'budget'],
    [],
  )

  const updateField = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const validate = () => {
    const missingField = requiredFields.find((field) => !form[field].trim())
    if (missingField) return 'Completa todos los campos obligatorios para solicitar tu cotización.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Escribe un correo electrónico válido.'
    if (form.projectDetails.trim().length < 25) return 'Cuéntanos un poco más sobre el proyecto para poder analizarlo.'
    return ''
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (form.website) return
    if (Date.now() - startedAt < 2500) {
      setStatus({ type: 'error', message: 'Espera un momento antes de enviar la solicitud.' })
      return
    }

    const validationError = validate()
    if (validationError) {
      setStatus({ type: 'error', message: validationError })
      return
    }

    setStatus({ type: 'sending', message: 'Enviando solicitud...' })

    const payload = new FormData()
    payload.append('_subject', `Nuevo prospecto — ${form.fullName || 'Sin nombre'}`)
    payload.append('_replyto', form.email)
    payload.append('_captcha', 'false')

    // Build a single, human-readable message so FormSubmit email is clean
    const message = [
      'Nuevo prospecto DAMARK APP STUDIO',
      '' ,
      `Nombre completo: ${form.fullName}`,
      `Empresa: ${form.company || 'No especificada'}`,
      `Correo electrónico: ${form.email}`,
      `WhatsApp: ${form.whatsapp}`,
      `País / Ciudad: ${form.location}`,
      `Tipo de solución: ${form.solutionType}`,
      `Presupuesto aproximado: ${form.budget}`,
      `Tamaño de empresa: ${form.companySize}`,
      `Objetivo principal: ${form.mainObjective}`,
      '',
      'Detalles del proyecto:',
      form.projectDetails,
    ].join('\n')

    payload.append('Mensaje', message)

    try {
      const response = await fetch('https://formsubmit.co/ajax/damarkappstudio@gmail.com', {
        method: 'POST',
        body: payload,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) throw new Error('FormSubmit request failed')

      setForm(initialForm)
      setStatus({
        type: 'success',
        message: '¡Gracias por contactarnos! Revisaremos tu proyecto y nos pondremos en contacto contigo pronto.',
      })
    } catch {
      setStatus({
        type: 'error',
        message: 'No pudimos enviar la solicitud. Intenta de nuevo o escríbenos por WhatsApp.',
      })
    }
  }

  return (
    <section id="contacto" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.82fr_1.18fr]">
        <div>
          <SectionHeading eyebrow="Cotización" title="Cuéntanos qué software necesita tu operación." align="left">
            Con esta información podemos entender tu proyecto, detectar prioridades y preparar una propuesta más clara desde el primer contacto.
          </SectionHeading>

          <div className="contact-preview">
            <p className="contact-preview__eyebrow">Qué recibirás</p>
            <ul className="contact-preview__list">
              <li>Una propuesta clara y sin rodeos</li>
              <li>Recomendaciones para reducir tiempos y errores</li>
              <li>Un plan realista de implementación</li>
            </ul>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {contacts.map(({ label, value, href, Icon }) => (
              <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="contact-card surface-premium interactive-lift">
                <span className="contact-card__icon"><Icon /></span>
                <span>
                  <span className="contact-card__label">{label}</span>
                  <strong>{value}</strong>
                </span>
              </a>
            ))}
          </div>

          <div className="quote-note mt-6">
            <ShieldCheck size={20} />
            <p>Respuesta rápida, seguimiento claro y sin complicaciones. Tu solicitud llega directo a DAMARK APP STUDIO.</p>
          </div>
        </div>

        <form className="quote-form surface-premium rounded-lg p-6 sm:p-8" onSubmit={handleSubmit} noValidate>
          <input className="hidden" type="text" name="website" value={form.website} onChange={updateField} tabIndex="-1" autoComplete="off" />

          <div className="quote-form__section">
            <span className="quote-form__eyebrow">Datos del cliente</span>
            <div className="grid gap-5 sm:grid-cols-2">
              <FormField label="Nombre completo" name="fullName" value={form.fullName} onChange={updateField} autoComplete="name" required />
              <FormField label="Empresa" name="company" value={form.company} onChange={updateField} placeholder="Opcional" />
              <FormField label="Correo electrónico" name="email" type="email" value={form.email} onChange={updateField} autoComplete="email" required />
              <FormField label="Número de WhatsApp" name="whatsapp" type="tel" value={form.whatsapp} onChange={updateField} autoComplete="tel" required />
              <FormField className="sm:col-span-2" label="País / Ciudad" name="location" value={form.location} onChange={updateField} placeholder="México, Colima" required />
            </div>
          </div>

          <div className="quote-form__section">
            <span className="quote-form__eyebrow">Información del proyecto</span>
            <SelectField label="¿Qué tipo de solución necesitas?" name="solutionType" value={form.solutionType} onChange={updateField} options={solutionOptions} required />
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-black text-ink">Cuéntanos sobre tu proyecto <b className="text-tech">*</b></span>
              <textarea
                className="min-h-36 w-full resize-y rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-tech focus:ring-4 focus:ring-tech/15"
                name="projectDetails"
                value={form.projectDetails}
                onChange={updateField}
                placeholder="Explícanos qué problema quieres resolver o qué herramienta necesitas crear."
                required
              />
            </label>
            <div className="mt-5 grid gap-5 sm:grid-cols-2">
              <SelectField label="¿Actualmente cómo realizas este proceso?" name="currentProcess" value={form.currentProcess} onChange={updateField} options={processOptions} required />
              <SelectField label="¿Cuál es tu objetivo principal?" name="mainObjective" value={form.mainObjective} onChange={updateField} options={objectiveOptions} required />
              <SelectField label="¿Cuál es el tamaño de tu empresa?" name="companySize" value={form.companySize} onChange={updateField} options={companySizeOptions} required />
              <SelectField label="Presupuesto aproximado" name="budget" value={form.budget} onChange={updateField} options={budgetOptions} required />
            </div>
          </div>

          {status.message && (
            <p className={`quote-status quote-status--${status.type}`}>
              {status.type === 'success' && <CheckCircle2 size={18} />}
              {status.message}
            </p>
          )}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button className="magnetic-button inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-tech disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto" type="submit" disabled={isSending}>
              {isSending ? 'Enviando...' : 'Solicitar propuesta'} <Send className={isSending ? 'animate-pulse' : ''} size={18} />
            </button>
            <span className="text-sm font-semibold text-slate-500">Respondemos en menos de 24 horas.</span>
          </div>
        </form>
      </div>
    </section>
  )
}

function FormField({ label, name, value, onChange, type = 'text', required = false, className = '', ...props }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-black text-ink">
        {label} {required && <b className="text-tech">*</b>}
      </span>
      <input className="h-[52px] w-full rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-tech focus:ring-4 focus:ring-tech/15" type={type} name={name} value={value} onChange={onChange} required={required} {...props} />
    </label>
  )
}

function SelectField({ label, name, value, onChange, options, required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-black text-ink">
        {label} {required && <b className="text-tech">*</b>}
      </span>
      <select className="h-[52px] w-full rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-tech focus:ring-4 focus:ring-tech/15" name={name} value={value} onChange={onChange} required={required}>
        <option value="">Selecciona una opción</option>
        {options.map((option) => <option key={option} value={option}>{option}</option>)}
      </select>
    </label>
  )
}
