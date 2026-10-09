import type { LucideIcon } from 'lucide-react'

export interface NavItem {
  /** id da seção de destino (sem #) */
  id: string
  label: string
}

export interface ExternalLinkItem {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
  description: string
  icon: LucideIcon
}

export interface Solution {
  id: string
  name: string
  category: string
  icon: LucideIcon
  description: string
  highlights: string[]
  /** URL oficial verificada; ausente quando não há página dedicada */
  link?: ExternalLinkItem
}

export interface Benefit {
  title: string
  description: string
  outcome: string
  icon: LucideIcon
}

export interface TechCapability {
  id: string
  label: string
  icon: LucideIcon
  title: string
  description: string
  /** Painel do dashboard demonstrativo destacado por esta capacidade */
  focus: DashboardPanel
}

export type DashboardPanel = 'kpis' | 'trend' | 'stores' | 'feed'

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface DemoKpi {
  label: string
  value: string
  delta: string
  trend: 'up' | 'down'
  /** Se a variação é desejável (ex.: queda de ruptura é positiva) */
  favorable: boolean
}

export interface DemoPoint {
  label: string
  value: number
}

export interface DemoEvent {
  source: string
  target: string
  message: string
}
