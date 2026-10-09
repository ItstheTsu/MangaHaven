import { useId } from 'react'
import styles from './Logo.module.scss'

interface LogoProps {
  /** Exibe o descritor "Informática" ao lado do monograma */
  withDescriptor?: boolean
  className?: string
}

/**
 * Representação tipográfica da marca para este conceito.
 * Não reproduz o logotipo oficial: usa um monograma geométrico próprio.
 */
export function Logo({ withDescriptor = true, className }: LogoProps) {
  // id único por instância: o logo aparece no header e no footer
  const gradientId = `${useId()}-mark`

  return (
    <span className={[styles.logo, className].filter(Boolean).join(' ')}>
      <svg className={styles.mark} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2454D3" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <rect x="1" y="1" width="38" height="38" rx="11" fill="#0E1730" stroke={`url(#${gradientId})`} strokeWidth="1.5" />
        <path d="M10 13 L20 29 L30 13" fill="none" stroke={`url(#${gradientId})`} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="30" cy="13" r="3" fill="#E63946" />
      </svg>
      <span className={styles.wordmark}>
        <span className={styles.name}>VSM</span>
        {withDescriptor && <span className={styles.descriptor}>Informática</span>}
      </span>
    </span>
  )
}
