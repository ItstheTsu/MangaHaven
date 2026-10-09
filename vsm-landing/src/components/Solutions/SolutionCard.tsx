import { ArrowUpRight } from 'lucide-react'
import type { PointerEvent } from 'react'
import type { Solution } from '../../types'
import styles from './SolutionCard.module.scss'

interface SolutionCardProps {
  solution: Solution
  index: number
}

/** Atualiza a posição do "spotlight" do card conforme o ponteiro. */
function trackPointer(event: PointerEvent<HTMLElement>) {
  const rect = event.currentTarget.getBoundingClientRect()
  event.currentTarget.style.setProperty('--mx', `${event.clientX - rect.left}px`)
  event.currentTarget.style.setProperty('--my', `${event.clientY - rect.top}px`)
}

export function SolutionCard({ solution, index }: SolutionCardProps) {
  const { icon: Icon, name, category, description, highlights, link, id } = solution
  const titleId = `solution-${id}`

  return (
    <article className={styles.card} aria-labelledby={titleId} onPointerMove={trackPointer}>
      <div className={styles.top}>
        <span className={styles.icon} aria-hidden="true">
          <Icon />
        </span>
        <span className={styles.index} aria-hidden="true">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      <p className={styles.category}>{category}</p>
      <h3 id={titleId} className={styles.title}>
        {name}
      </h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.footer}>
        <ul className={styles.highlights} aria-label={`Destaques do ${name}`}>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {link && (
          <a className={styles.link} href={link.href} target="_blank" rel="noopener noreferrer">
            {link.label}
            <span className="visually-hidden"> (site oficial, abre em nova aba)</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  )
}
