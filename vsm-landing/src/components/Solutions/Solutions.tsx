import type { CSSProperties } from 'react'
import { officialLinks } from '../../data/site'
import { solutions } from '../../data/solutions'
import { SectionHeading } from '../ui/SectionHeading'
import { SolutionCard } from './SolutionCard'
import styles from './Solutions.module.scss'

export function Solutions() {
  return (
    <section id="solucoes" className={styles.solutions} aria-labelledby="solucoes-title">
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.head}>
          <SectionHeading
            id="solucoes-title"
            eyebrow="Ecossistema de soluções"
            title={
              <>
                Oito soluções. <em>Uma operação conectada.</em>
              </>
            }
            description="Cada produto resolve uma frente da gestão farmacêutica — e todos foram pensados para trabalhar juntos, compartilhando dados entre balcão, retaguarda, laboratório e canais digitais."
          />
          <a
            className={styles.allLink}
            href={officialLinks.solutions.href}
            target="_blank"
            rel="noopener noreferrer"
            data-reveal=""
          >
            Ver todas no site oficial<span className="visually-hidden"> (abre em nova aba)</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ul className={styles.grid}>
          {solutions.map((solution, index) => (
            <li
              key={solution.id}
              className={styles.item}
              data-reveal=""
              style={{ '--reveal-delay': `${(index % 4) * 70}ms` } as CSSProperties}
            >
              <SolutionCard solution={solution} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
