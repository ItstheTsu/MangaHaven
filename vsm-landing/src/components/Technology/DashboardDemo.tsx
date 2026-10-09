import { ArrowDownRight, ArrowUpRight, Info, RefreshCcw } from 'lucide-react'
import { useEffect, useState, type CSSProperties } from 'react'
import { demoEvents, demoKpis, demoStores } from '../../data/technology'
import { useInView } from '../../hooks/useInView'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import type { DashboardPanel } from '../../types'
import styles from './DashboardDemo.module.scss'
import { TrendChart } from './TrendChart'

interface DashboardDemoProps {
  focus: DashboardPanel
}

const FEED_SIZE = 4
const FEED_INTERVAL = 2800
const storeMax = Math.max(...demoStores.map((store) => store.value))

/**
 * Painel ilustrativo. Todos os números vêm de `data/technology.ts` e são
 * fictícios — o selo "Demonstração" deixa isso explícito ao usuário.
 */
export function DashboardDemo({ focus }: DashboardDemoProps) {
  const reducedMotion = useReducedMotion()
  const [ref, inView] = useInView<HTMLDivElement>()
  const [offset, setOffset] = useState(0)

  // O feed só "anda" quando visível e sem preferência por movimento reduzido
  useEffect(() => {
    if (reducedMotion || !inView) return
    const timer = window.setInterval(() => setOffset((value) => (value + 1) % demoEvents.length), FEED_INTERVAL)
    return () => window.clearInterval(timer)
  }, [reducedMotion, inView])

  const feed = Array.from({ length: FEED_SIZE }, (_, i) => {
    const index = (offset - i + demoEvents.length) % demoEvents.length
    return { ...demoEvents[index]!, key: `${index}` }
  })

  const panelClass = (panel: DashboardPanel, extra: string) =>
    [styles.panel, extra, focus === panel ? styles.focused : styles.dimmed].join(' ')

  return (
    <div ref={ref} className={styles.window}>
      <div className={styles.chrome}>
        <span className={styles.dots} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <p className={styles.windowTitle}>Painel gerencial</p>
        <p className={styles.demoBadge}>
          <Info aria-hidden="true" />
          Demonstração · dados fictícios
        </p>
      </div>

      <div className={styles.body}>
        <section className={panelClass('kpis', styles.kpis)} aria-label="Indicadores demonstrativos">
          <ul className={styles.kpiList}>
            {demoKpis.map((kpi) => {
              const TrendIcon = kpi.trend === 'up' ? ArrowUpRight : ArrowDownRight
              return (
                <li key={kpi.label} className={styles.kpi}>
                  <span className={styles.kpiLabel}>{kpi.label}</span>
                  <span className={styles.kpiValue}>{kpi.value}</span>
                  <span className={`${styles.kpiDelta} ${kpi.favorable ? styles.good : styles.bad}`}>
                    <TrendIcon aria-hidden="true" />
                    {kpi.delta}
                    <span className="visually-hidden"> em relação ao dia anterior</span>
                  </span>
                </li>
              )
            })}
          </ul>
        </section>

        <section className={panelClass('trend', styles.trend)} aria-labelledby="demo-trend-title">
          <header className={styles.panelHead}>
            <h3 id="demo-trend-title" className={styles.panelTitle}>
              Faturamento por hora <span>(R$ mil)</span>
            </h3>
            <span className={styles.live}>
              <span className={styles.liveDot} aria-hidden="true" />
              ao vivo
            </span>
          </header>
          <TrendChart />
        </section>

        <section className={panelClass('stores', styles.stores)} aria-labelledby="demo-stores-title">
          <header className={styles.panelHead}>
            <h3 id="demo-stores-title" className={styles.panelTitle}>
              Faturamento por unidade <span>(R$ mil)</span>
            </h3>
          </header>
          <ul className={styles.bars}>
            {demoStores.map((store) => (
              <li key={store.label} className={styles.bar}>
                <span className={styles.barLabel}>{store.label}</span>
                <span className={styles.barTrack} aria-hidden="true">
                  <span
                    className={styles.barFill}
                    style={{ '--w': `${(store.value / storeMax) * 100}%` } as CSSProperties}
                  />
                </span>
                <span className={styles.barValue}>{store.value.toLocaleString('pt-BR')}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className={panelClass('feed', styles.feed)} aria-labelledby="demo-feed-title">
          <header className={styles.panelHead}>
            <h3 id="demo-feed-title" className={styles.panelTitle}>
              Sincronização entre módulos
            </h3>
            <RefreshCcw aria-hidden="true" className={styles.syncIcon} />
          </header>
          <ul className={styles.events}>
            {feed.map((event, i) => (
              <li key={event.key} className={`${styles.event} ${i === 0 ? styles.eventNew : ''}`}>
                <span className={styles.route}>
                  {event.source} <span aria-hidden="true">→</span>
                  <span className="visually-hidden"> para </span> {event.target}
                </span>
                <span className={styles.eventMsg}>{event.message}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
