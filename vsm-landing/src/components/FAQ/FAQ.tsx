import { ArrowUpRight } from 'lucide-react'
import { useRef, useState, type KeyboardEvent } from 'react'
import { faqItems } from '../../data/faq'
import { officialLinks } from '../../data/site'
import { SectionHeading } from '../ui/SectionHeading'
import { AccordionItem } from './AccordionItem'
import styles from './FAQ.module.scss'

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)
  const listRef = useRef<HTMLDivElement>(null)

  const toggle = (id: string) => setOpenId((current) => (current === id ? null : id))

  // Setas ↑/↓, Home e End navegam entre os cabeçalhos (padrão WAI-ARIA Accordion)
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return
    const triggers = Array.from(listRef.current?.querySelectorAll<HTMLButtonElement>('[data-accordion-trigger]') ?? [])
    const current = triggers.indexOf(event.currentTarget)
    if (current === -1) return

    event.preventDefault()
    const last = triggers.length - 1
    const next =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? last
          : event.key === 'ArrowDown'
            ? (current + 1) % triggers.length
            : (current - 1 + triggers.length) % triggers.length
    triggers[next]?.focus()
  }

  return (
    <section id="faq" className={styles.faq} aria-labelledby="faq-title">
      <div className={`container ${styles.layout}`}>
        <div className={styles.intro}>
          <SectionHeading
            id="faq-title"
            eyebrow="Perguntas frequentes"
            title={
              <>
                Dúvidas comuns sobre os <em>softwares VSM</em>.
              </>
            }
            description="Respostas objetivas sobre migração, implantação, integração e escalabilidade do ecossistema."
          />
          <a
            href={officialLinks.faq.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.more}
            data-reveal=""
          >
            Ver todas as perguntas no site oficial
            <span className="visually-hidden"> (abre em nova aba)</span>
            <ArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div ref={listRef} className={styles.list} data-reveal="">
          {faqItems.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              open={openId === item.id}
              onToggle={() => toggle(item.id)}
              onKeyDown={onKeyDown}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
