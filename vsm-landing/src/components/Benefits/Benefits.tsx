import type { CSSProperties } from 'react'
import { benefits } from '../../data/benefits'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './Benefits.module.scss'

const flow = ['Operação', 'Integração', 'Informação', 'Decisão']

export function Benefits() {
  return (
    <section id="diferenciais" className={styles.benefits} aria-labelledby="diferenciais-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.aside}>
          <div className={styles.sticky}>
            <SectionHeading
              id="diferenciais-title"
              eyebrow="Diferenciais"
              title={
                <>
                  Por que um <em>ecossistema integrado</em> muda a gestão.
                </>
              }
              description="Sistemas isolados geram retrabalho e informações divergentes. Quando as soluções nascem para trabalhar juntas, o dado percorre um caminho contínuo — do balcão à decisão."
            />

            <ol className={styles.flow} aria-label="Fluxo do dado no ecossistema" data-reveal="">
              {flow.map((step, index) => (
                <li key={step} className={styles.flowStep}>
                  <span className={styles.flowIndex} aria-hidden="true">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ol className={styles.timeline}>
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <li
                key={benefit.title}
                className={styles.item}
                data-reveal=""
                style={{ '--reveal-delay': `${index * 40}ms` } as CSSProperties}
              >
                <span className={styles.node} aria-hidden="true">
                  <Icon />
                </span>
                <div className={styles.content}>
                  <p className={styles.number} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className={styles.title}>{benefit.title}</h3>
                  <p className={styles.description}>{benefit.description}</p>
                  <p className={styles.outcome}>
                    <span className="visually-hidden">Resultado: </span>
                    {benefit.outcome}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
