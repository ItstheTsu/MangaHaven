import { CheckCircle2, QrCode } from 'lucide-react'
import type { CSSProperties } from 'react'
import { solutions } from '../../data/solutions'
import styles from './EcosystemVisual.module.scss'

const CENTER = 50
const RADIUS = 37
/** Nós distribuídos a cada 45°, deslocados 22,5° para liberar os cantos aos painéis */
const nodes = solutions.map((solution, index) => {
  const angle = ((index * 45 - 67.5) * Math.PI) / 180
  return {
    ...solution,
    x: CENTER + RADIUS * Math.cos(angle),
    y: CENTER + RADIUS * Math.sin(angle),
  }
})

/** Série fictícia apenas para a miniatura decorativa */
const sparkline = [12, 18, 15, 22, 20, 28, 26, 34, 31, 40]
const sparkPath = sparkline
  .map((value, i) => `${i === 0 ? 'M' : 'L'}${(i / (sparkline.length - 1)) * 100},${44 - value}`)
  .join(' ')

const format = (n: number) => n.toFixed(2)

/**
 * Ilustração do ecossistema: núcleo de dados conectado às oito soluções.
 * Totalmente construída com SVG + HTML/CSS (sem imagens), em uma área de
 * proporção 1:1 cujas coordenadas são percentuais — escala sem distorção.
 */
export function EcosystemVisual() {
  return (
    <figure className={styles.stage}>
      <div className={styles.canvas} aria-hidden="true">
        <svg className={styles.lines} viewBox="0 0 100 100" aria-hidden="true" focusable="false">
          <defs>
            <radialGradient id="eco-core-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="eco-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6B93FF" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          <circle cx="50" cy="50" r="30" fill="url(#eco-core-glow)" />
          <circle className={styles.orbit} cx="50" cy="50" r={RADIUS} />
          <circle className={styles.orbitInner} cx="50" cy="50" r="24" />
          <circle className={styles.orbitInner} cx="50" cy="50" r="47" />

          {nodes.map((node, index) => (
            <g key={node.id}>
              <line
                x1="50"
                y1="50"
                x2={format(node.x)}
                y2={format(node.y)}
                stroke="url(#eco-line)"
                className={styles.link}
              />
              <line
                x1="50"
                y1="50"
                x2={format(node.x)}
                y2={format(node.y)}
                pathLength={100}
                className={styles.pulse}
                style={{ animationDelay: `${index * 0.45}s` } as CSSProperties}
              />
            </g>
          ))}
        </svg>

        <div className={styles.core}>
          <span className={styles.coreRing} aria-hidden="true" />
          <svg viewBox="0 0 40 40" className={styles.coreMark} aria-hidden="true" focusable="false">
            <path d="M10 13 L20 29 L30 13" fill="none" stroke="#fff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="30" cy="13" r="3" fill="#E63946" />
          </svg>
          <span className={styles.coreLabel}>VSM</span>
          <span className={styles.coreCaption}>dados integrados</span>
        </div>

        {nodes.map((node, index) => {
          const Icon = node.icon
          return (
            <span
              key={node.id}
              className={styles.node}
              style={{ left: `${node.x}%`, top: `${node.y}%`, '--d': `${index * 70}ms` } as CSSProperties}
            >
              <span className={styles.nodeIcon}>
                <Icon aria-hidden="true" />
              </span>
              <span className={styles.nodeLabel}>{node.name}</span>
            </span>
          )
        })}

        <div className={`${styles.panel} ${styles.panelSales}`}>
          <span className={styles.panelTitle}>Vendas · hoje</span>
          <svg viewBox="0 0 100 44" preserveAspectRatio="none" className={styles.spark}>
            <defs>
              <linearGradient id="eco-spark" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${sparkPath} L100,44 L0,44 Z`} fill="url(#eco-spark)" />
            <path d={sparkPath} fill="none" stroke="#7DD3FC" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          </svg>
          <span className={styles.panelBars}>
            <span style={{ '--h': '45%' } as CSSProperties} />
            <span style={{ '--h': '70%' } as CSSProperties} />
            <span style={{ '--h': '55%' } as CSSProperties} />
            <span style={{ '--h': '90%' } as CSSProperties} />
          </span>
        </div>

        <div className={`${styles.panel} ${styles.panelPix}`}>
          <span className={styles.pixIcon}>
            <QrCode />
          </span>
          <span className={styles.pixText}>
            <span className={styles.panelTitle}>PIX recebido</span>
            <span className={styles.pixStatus}>
              <CheckCircle2 /> Confirmado no PDV
            </span>
          </span>
        </div>
      </div>
      <figcaption className={styles.caption}>
        <span className="visually-hidden">
          Ilustração do núcleo de dados da VSM conectado às soluções {solutions.map((s) => s.name).join(', ')}.{' '}
        </span>
        Ilustração conceitual · elementos demonstrativos
      </figcaption>
    </figure>
  )
}
