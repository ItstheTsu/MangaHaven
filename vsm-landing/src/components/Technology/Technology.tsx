import { useId, useRef, useState, type KeyboardEvent } from 'react'
import { capabilities } from '../../data/technology'
import { SectionHeading } from '../ui/SectionHeading'
import { DashboardDemo } from './DashboardDemo'
import styles from './Technology.module.scss'

export function Technology() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([])
  const baseId = useId()
  const active = capabilities[activeIndex] ?? capabilities[0]!

  // Padrão WAI-ARIA Tabs: setas, Home e End movem o foco e ativam a aba
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const last = capabilities.length - 1
    const keyMap: Record<string, number> = {
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowDown: activeIndex === last ? 0 : activeIndex + 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      ArrowUp: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    }
    const next = keyMap[event.key]
    if (next === undefined) return
    event.preventDefault()
    setActiveIndex(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="tecnologia" className={styles.technology} aria-labelledby="tecnologia-title">
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={`container ${styles.layout}`}>
        <div className={styles.side}>
          <SectionHeading
            id="tecnologia-title"
            eyebrow="Tecnologia e integração"
            title={
              <>
                Sistemas que conversam entre si, <em>dados que viram gestão</em>.
              </>
            }
            description="O valor do ecossistema está nas conexões: cada operação registrada em um módulo alimenta os demais. Selecione um conceito para vê-lo no painel demonstrativo."
          />

          <div
            role="tablist"
            aria-label="Conceitos de integração"
            aria-orientation="vertical"
            className={styles.tabs}
            data-reveal=""
          >
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              const selected = index === activeIndex
              return (
                <button
                  key={capability.id}
                  ref={(node) => {
                    tabRefs.current[index] = node
                  }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${capability.id}`}
                  aria-selected={selected}
                  aria-controls={`${baseId}-panel`}
                  tabIndex={selected ? 0 : -1}
                  className={styles.tab}
                  onClick={() => setActiveIndex(index)}
                  onKeyDown={onKeyDown}
                >
                  <Icon aria-hidden="true" />
                  {capability.label}
                </button>
              )
            })}
          </div>

          <div
            role="tabpanel"
            id={`${baseId}-panel`}
            aria-labelledby={`${baseId}-tab-${active.id}`}
            className={styles.panel}
            data-reveal=""
          >
            <h3 key={active.id} className={styles.panelTitle}>
              {active.title}
            </h3>
            <p className={styles.panelText}>{active.description}</p>
          </div>
        </div>

        <div className={styles.demo} data-reveal="">
          <DashboardDemo focus={active.focus} />
        </div>
      </div>
    </section>
  )
}
