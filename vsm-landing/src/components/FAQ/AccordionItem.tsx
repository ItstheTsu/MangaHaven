import { Plus } from 'lucide-react'
import type { KeyboardEventHandler } from 'react'
import type { FaqItem } from '../../types'
import styles from './AccordionItem.module.scss'

interface AccordionItemProps {
  item: FaqItem
  open: boolean
  onToggle: () => void
  onKeyDown: KeyboardEventHandler<HTMLButtonElement>
}

export function AccordionItem({ item, open, onToggle, onKeyDown }: AccordionItemProps) {
  const triggerId = `faq-trigger-${item.id}`
  const panelId = `faq-panel-${item.id}`

  return (
    <div className={`${styles.item} ${open ? styles.open : ''}`}>
      <h3 className={styles.heading}>
        <button
          id={triggerId}
          type="button"
          className={styles.trigger}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          onKeyDown={onKeyDown}
          data-accordion-trigger=""
        >
          <span className={styles.question}>{item.question}</span>
          <span className={styles.icon} aria-hidden="true">
            <Plus />
          </span>
        </button>
      </h3>
      {/* Painel colapsado fica com visibility: hidden (fora da árvore de acessibilidade e do Tab) */}
      <section id={panelId} aria-labelledby={triggerId} className={styles.panel}>
        <div className={styles.inner}>
          <p className={styles.answer}>{item.answer}</p>
        </div>
      </section>
    </div>
  )
}
