import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './Button.module.scss'

type Variant = 'primary' | 'secondary' | 'ghost' | 'light'
type Size = 'md' | 'lg'

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: Variant
  size?: Size
  icon?: ReactNode
  /** Abre em nova aba com rel seguro e aviso para leitores de tela */
  external?: boolean
  children: ReactNode
}

/**
 * Todas as ações da página são navegações (âncoras internas ou site oficial),
 * por isso o componente é sempre um <a> estilizado como botão.
 */
export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  external = false,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ')
  const externalProps = external ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <a href={href} className={classes} {...externalProps} {...rest}>
      <span className={styles.label}>{children}</span>
      {icon && (
        <span className={styles.icon} aria-hidden="true">
          {icon}
        </span>
      )}
      {external && <span className="visually-hidden"> (abre em nova aba)</span>}
    </a>
  )
}
