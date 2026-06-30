import { Mail, MessageCircle, Send } from 'lucide-react'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
  return (
    <section id="contacto" className="bg-white py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.9fr_1.1fr]">
        <div>
          <SectionHeading eyebrow="Contacto" title="Hablemos de la aplicación que tu operación necesita." align="left">
            DAMARK APP STUDIO
          </SectionHeading>
          <div className="mt-8 space-y-4">
            <a href="mailto:damarkappstudio@gmail.com" className="surface-premium interactive-lift flex items-center gap-3 rounded-md p-4 font-bold text-slate-800 hover:border-tech">
              <Mail className="text-tech" size={22} />
              damarkappstudio@gmail.com
            </a>
            <a href="https://wa.me/523123195075" className="surface-premium interactive-lift flex items-center gap-3 rounded-md p-4 font-bold text-slate-800 hover:border-tech">
              <MessageCircle className="text-tech" size={22} />
              +52 312 319 5075
            </a>
            <a href="https://wa.me/15098450687" className="surface-premium interactive-lift flex items-center gap-3 rounded-md p-4 font-bold text-slate-800 hover:border-tech">
              <MessageCircle className="text-tech" size={22} />
              USA +1 509 845 0687
            </a>
          </div>
        </div>

        <form className="surface-premium rounded-lg p-6 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-black text-ink">Nombre</span>
              <input className="h-[52px] w-full rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-tech focus:ring-4 focus:ring-tech/15" type="text" name="name" autoComplete="name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-black text-ink">Correo</span>
              <input className="h-[52px] w-full rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-tech focus:ring-4 focus:ring-tech/15" type="email" name="email" autoComplete="email" />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-black text-ink">Mensaje</span>
            <textarea className="min-h-40 w-full resize-y rounded-md border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-tech focus:ring-4 focus:ring-tech/15" name="message" />
          </label>
          <button className="magnetic-button mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-ink px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-tech sm:w-auto" type="submit">
            Enviar <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  )
}
