import damarkLogo from '../assets/DAMARK-LOGO-transparent.png'
import damarkHeroLogo from '../assets/DAMARK-LOGO-hero.png'

export default function BrandMark({ compact = false, mark = false }) {
  return (
    <span className={`brand-mark ${compact ? 'brand-mark--compact' : ''} ${mark ? 'brand-mark--hero' : ''}`} aria-hidden="true">
      <img src={mark ? damarkHeroLogo : damarkLogo} alt="" />
    </span>
  )
}
