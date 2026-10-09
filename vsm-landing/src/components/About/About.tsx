import { Code2, Cpu, Map as MapIcon, TrendingUp } from 'lucide-react'
import type { CSSProperties } from 'react'
import { company, institutionalStats } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'
import styles from './About.module.scss'

const pillars = [
  { icon: Code2, title: 'Especialização em software', text: 'Sistemas desenvolvidos para as rotinas e exigências do varejo farmacêutico.' },
  { icon: MapIcon, title: 'Atuação em todo o Brasil', text: 'Clientes em todos os estados, a partir da sede em Assis/SP.' },
  { icon: Cpu, title: 'Transformação digital', text: 'Automação e integração substituindo controles manuais e sistemas isolados.' },
  { icon: TrendingUp, title: 'Gestão orientada por dados', text: 'Informação confiável para planejar compras, estoque e resultados.' },
]

const currentYear = new Date().getFullYear()

export function About() {
  return (
    <section id="sobre" className={styles.about} aria-labelledby="sobre-title">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.text}>
            <SectionHeading
              id="sobre-title"
              eyebrow="Sobre a VSM"
              title={
                <>
                  Mais de três décadas transformando <em>gestão em tecnologia</em>.
                </>
              }
            />
            <div className={styles.body} data-reveal="">
              <p>
                Fundada em {company.founded} em Assis, no interior de São Paulo, a VSM Informática acumula mais de
                30 anos de experiência no desenvolvimento de software especializado para drogarias, farmácias e
                farmácias de manipulação.
              </p>
              <p>
                Hoje, mais de 3 mil clientes em todo o país utilizam suas soluções para organizar estoque, vendas,
                compras, finanças e atendimento — de lojas independentes a redes com várias unidades.
              </p>
              <p>
                Em um setor regulado e de margens apertadas, a tecnologia deixa de ser apoio e passa a ser a
                estrutura da gestão. O propósito da VSM é simplificar essa operação com automação, integração de
                sistemas e inteligência de negócios.
              </p>
            </div>
          </div>

          <ul className={styles.bento} aria-label="Indicadores institucionais">
            {institutionalStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <li
                  key={stat.label}
                  className={`${styles.card} ${index === 0 ? styles.cardFeatured : ''}`}
                  data-reveal=""
                  style={{ '--reveal-delay': `${index * 90}ms` } as CSSProperties}
                >
                  <span className={styles.cardIcon} aria-hidden="true">
                    <Icon />
                  </span>
                  <p className={styles.cardValue}>
                    {stat.value} <span className={styles.cardUnit}>{stat.label}</span>
                  </p>
                  <p className={styles.cardText}>{stat.description}</p>
                  {index === 0 && (
                    <div className={styles.timeline} aria-hidden="true">
                      <span>{company.founded}</span>
                      <span className={styles.timelineTrack}>
                        <span className={styles.timelineFill} />
                      </span>
                      <span>{currentYear}</span>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>

        <ul className={styles.pillars}>
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <li
                key={pillar.title}
                className={styles.pillar}
                data-reveal=""
                style={{ '--reveal-delay': `${index * 80}ms` } as CSSProperties}
              >
                <Icon aria-hidden="true" className={styles.pillarIcon} />
                <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                <p className={styles.pillarText}>{pillar.text}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
