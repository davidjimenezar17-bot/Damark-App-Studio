export default function SectionHeading({ eyebrow, title, children, align = 'center', tone = 'light' }) {
  const alignment = align === 'left' ? 'items-start text-left' : 'items-center text-center'
  const titleColor = tone === 'dark' ? 'text-white' : 'text-ink'
  const bodyColor = tone === 'dark' ? 'text-white/68' : 'text-slate-600'

  return (
    <div className={`flex flex-col ${alignment} reveal-up`}>
      <span className="mb-3 inline-flex rounded-md border border-tech/20 bg-tech/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-tech">
        {eyebrow}
      </span>
      <h2 className={`max-w-3xl text-3xl font-black leading-tight ${titleColor} sm:text-4xl`}>{title}</h2>
      {children && <p className={`mt-5 max-w-3xl text-base leading-8 ${bodyColor} sm:text-lg`}>{children}</p>}
    </div>
  )
}
