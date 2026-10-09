import { ArrowUp, ArrowUpRight, Info, MapPin } from 'lucide-react'
import { company, navItems, officialLinks, socialLinks } from '../../data/site'
import type { ExternalLinkItem } from '../../types'
import { Logo } from '../ui/Logo'
import styles from './Footer.module.scss'

const institutional: ExternalLinkItem[] = [
  officialLinks.company,
  officialLinks.solutions,
  officialLinks.faq,
  officialLinks.blog,
  officialLinks.careers,
  officialLinks.clientArea,
  officialLinks.privacy,
]

function ExternalAnchor({ link }: { link: ExternalLinkItem }) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
      {link.label}
      <span className="visually-hidden"> (abre em nova aba)</span>
      <ArrowUpRight aria-hidden="true" className={styles.extIcon} />
    </a>
  )
}

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Logo />
            <p className={styles.about}>
              Software de gestão para drogarias, farmácias e farmácias de manipulação. Desde {company.founded},
              simplificando a gestão com tecnologia, automação, integração e inteligência de negócios.
            </p>
            <p className={styles.location}>
              <MapPin aria-hidden="true" />
              {company.city}, {company.state} · Brasil
            </p>
            <a
              href={company.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.official}
            >
              www.vsm.com.br
              <span className="visually-hidden"> — site oficial (abre em nova aba)</span>
              <ArrowUpRight aria-hidden="true" />
            </a>
          </div>

          <nav className={styles.column} aria-label="Seções desta página">
            <h2 className={styles.columnTitle}>Navegação</h2>
            <ul className={styles.list}>
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={`#${item.id}`} className={styles.link}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className={styles.column} aria-label="Links institucionais da VSM">
            <h2 className={styles.columnTitle}>Institucional</h2>
            <ul className={styles.list}>
              {institutional.map((link) => (
                <li key={link.href}>
                  <ExternalAnchor link={link} />
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.column}>
            <h2 className={styles.columnTitle}>Contato e redes</h2>
            <ul className={styles.list}>
              <li>
                <ExternalAnchor link={officialLinks.contact} />
              </li>
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <ExternalAnchor link={link} />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.disclaimer} role="note">
          <Info aria-hidden="true" />
          <p>
            <strong>Conceito demonstrativo.</strong> Esta página é um estudo de interface e não é uma página oficial
            publicada pela VSM Informática. Indicadores do painel de tecnologia são fictícios. Para informações
            oficiais, acesse{' '}
            <a href={company.officialSite} target="_blank" rel="noopener noreferrer">
              vsm.com.br<span className="visually-hidden"> (abre em nova aba)</span>
            </a>
            .
          </p>
        </div>

        <div className={styles.bottom}>
          <p>
            © {year} Conceito de landing page · Marcas e nomes de produtos pertencem à {company.name}.
          </p>
          <a href="#inicio" className={styles.top}>
            Voltar ao topo <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
