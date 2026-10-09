import type { ReactNode } from 'react'
import styles from './SectionHeading.module.scss'

interface SectionHeadingProps {
  id: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
}

/** Cabeçalho padrão de seção: rótulo, título (h2) e descrição. */
export function SectionHeading({ id, eyebrow, title, description, align = 'left' }: SectionHeadingProps) {
  return (
    <header className={[styles.heading, styles[align]].join(' ')} data-reveal="">
      <p className={styles.eyebrow}>
        <span className={styles.dot} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 id={id} className={styles.title}>
        {title}
      </h2>
      {description && <p className={styles.description}>{description}</p>}
    </header>
  )
}
