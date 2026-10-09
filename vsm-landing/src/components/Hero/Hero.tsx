import { ArrowDownRight, ArrowRight } from 'lucide-react'
import { institutionalStats } from '../../data/site'
import { ButtonLink } from '../ui/Button'
import { EcosystemVisual } from './EcosystemVisual'
import styles from './Hero.module.scss'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.glowA} />
        <span className={styles.glowB} />
        <span className={styles.grid} />
      </div>

      <div className={`container ${styles.layout}`}>
        <div className={styles.content}>
          <p className={styles.badge}>
            <span className={styles.badgePulse} aria-hidden="true" />
            Software de gestão desde 1992 · Assis, SP
          </p>

          <h1 id="hero-title" className={styles.title}>
            Software que <em>conecta</em>, automatiza e dá inteligência à gestão farmacêutica.
          </h1>

          <p className={styles.subtitle}>
            A VSM Informática desenvolve um ecossistema de soluções integradas — gestão, PDV, manipulação,
            B.I., convênios, pagamentos e e-commerce — para drogarias e farmácias de manipulação de todo o
            Brasil.
          </p>

          <div className={styles.actions}>
            <ButtonLink href="#solucoes" size="lg" icon={<ArrowRight />}>
              Explorar o ecossistema
            </ButtonLink>
            <ButtonLink href="#sobre" size="lg" variant="secondary" icon={<ArrowDownRight />}>
              Conhecer a VSM
            </ButtonLink>
          </div>

          <dl className={styles.stats}>
            {institutionalStats.map((stat) => (
              <div key={stat.label} className={styles.stat}>
                <dt className={styles.statLabel}>{stat.label}</dt>
                <dd className={styles.statValue}>{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className={styles.visual}>
          <EcosystemVisual />
        </div>
      </div>
    </section>
  )
}
