import { ArrowUpRight, MessageSquare } from 'lucide-react'
import { officialLinks } from '../../data/site'
import { ButtonLink } from '../ui/Button'
import styles from './CTA.module.scss'

export function CTA() {
  return (
    <section className={styles.cta} aria-labelledby="cta-title">
      <div className="container">
        <div className={styles.panel} data-reveal="">
          <div className={styles.decor} aria-hidden="true">
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.ring} />
          </div>

          <div className={styles.content}>
            <p className={styles.eyebrow}>Próximo passo</p>
            <h2 id="cta-title" className={styles.title}>
              Pronto para conectar toda a operação da sua farmácia?
            </h2>
            <p className={styles.text}>
              Conheça em detalhes cada solução do ecossistema VSM no site oficial e fale com a equipe para entender
              qual combinação atende ao momento do seu negócio.
            </p>
            <div className={styles.actions}>
              <ButtonLink href={officialLinks.solutions.href} external variant="light" size="lg" icon={<ArrowUpRight />}>
                Conhecer as soluções VSM
              </ButtonLink>
              <ButtonLink href={officialLinks.contact.href} external variant="secondary" size="lg" icon={<MessageSquare />}>
                Falar com a VSM
              </ButtonLink>
            </div>
            <p className={styles.note}>Você será direcionado ao site oficial vsm.com.br.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
