import { useState, type PointerEvent } from 'react'
import { demoHourlySales } from '../../data/technology'
import styles from './TrendChart.module.scss'

const Y_MAX = 8
const Y_TICKS = [0, 2, 4, 6, 8]
const lastIndex = demoHourlySales.length - 1

const xPct = (i: number) => (i / lastIndex) * 100
const yPct = (v: number) => 100 - (v / Y_MAX) * 100

const linePath = demoHourlySales.map((p, i) => `${i ? 'L' : 'M'}${xPct(i)},${yPct(p.value)}`).join(' ')
const areaPath = `${linePath} L100,100 L0,100 Z`

const formatValue = (value: number) => `R$ ${value.toLocaleString('pt-BR', { minimumFractionDigits: 1 })} mil`

/**
 * Gráfico de área de série única com crosshair + tooltip no hover.
 * Rótulos ficam em HTML (sem distorção); uma tabela oculta oferece os
 * mesmos dados para leitores de tela.
 */
export function TrendChart() {
  const [hover, setHover] = useState<number | null>(null)

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const ratio = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 1)
    setHover(Math.round(ratio * lastIndex))
  }

  const point = hover === null ? null : demoHourlySales[hover]

  return (
    <div className={styles.chart}>
      <div className={styles.yAxis} aria-hidden="true">
        {[...Y_TICKS].reverse().map((tick) => (
          <span key={tick}>{tick}</span>
        ))}
      </div>

      <div className={styles.plotWrap}>
        <div
          className={styles.plot}
          onPointerMove={onPointerMove}
          onPointerLeave={() => setHover(null)}
          aria-hidden="true"
        >
          {Y_TICKS.map((tick) => (
            <span key={tick} className={styles.gridLine} style={{ top: `${yPct(tick)}%` }} />
          ))}

          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={styles.svg} focusable="false">
            <defs>
              <linearGradient id="trend-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.32" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={areaPath} fill="url(#trend-fill)" />
            <path d={linePath} className={styles.line} vectorEffect="non-scaling-stroke" />
          </svg>

          <span
            className={styles.endDot}
            style={{ left: `${xPct(lastIndex)}%`, top: `${yPct(demoHourlySales[lastIndex]!.value)}%` }}
          />

          {point && hover !== null && (
            <>
              <span className={styles.crosshair} style={{ left: `${xPct(hover)}%` }} />
              <span className={styles.marker} style={{ left: `${xPct(hover)}%`, top: `${yPct(point.value)}%` }} />
              <span
                className={`${styles.tooltip} ${hover > lastIndex / 2 ? styles.tooltipLeft : ''}`}
                style={{ left: `${xPct(hover)}%`, top: `${yPct(point.value)}%` }}
              >
                <strong>{point.label}</strong>
                {formatValue(point.value)}
              </span>
            </>
          )}
        </div>

        <div className={styles.xAxis} aria-hidden="true">
          {demoHourlySales.map((p, i) => (
            <span key={p.label} className={i % 2 ? styles.xOdd : undefined}>
              {p.label}
            </span>
          ))}
        </div>
      </div>

      <table className="visually-hidden">
        <caption>Faturamento por hora (dados fictícios de demonstração)</caption>
        <thead>
          <tr>
            <th scope="col">Hora</th>
            <th scope="col">Faturamento</th>
          </tr>
        </thead>
        <tbody>
          {demoHourlySales.map((p) => (
            <tr key={p.label}>
              <th scope="row">{p.label}</th>
              <td>{formatValue(p.value)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
