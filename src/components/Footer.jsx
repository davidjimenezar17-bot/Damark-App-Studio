import damarkLogo from '../assets/DAMARK-LOGO.jpeg'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink px-5 py-10 text-white sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="grid h-16 w-32 shrink-0 place-items-center overflow-hidden rounded-md bg-white p-1.5">
            <img src={damarkLogo} alt="" className="h-full w-full object-contain" />
          </span>
          <span>
            <p className="text-sm font-black tracking-[0.18em]">DAMARK APP STUDIO</p>
            <p className="mt-2 text-sm text-white/54">Aplicaciones móviles, software empresarial y automatización de procesos.</p>
          </span>
        </div>
        <p className="text-sm text-white/54">© {new Date().getFullYear()} DAMARK APP STUDIO. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
