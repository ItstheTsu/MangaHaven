import { Activity, Cable, LayoutDashboard, RefreshCcw, Target } from 'lucide-react'
import type { DemoEvent, DemoKpi, DemoPoint, TechCapability } from '../types'

export const capabilities: TechCapability[] = [
  {
    id: 'tempo-real',
    label: 'Tempo real',
    icon: Activity,
    title: 'Dados em tempo real',
    description:
      'Vendas registradas no PDV e no e-commerce atualizam a visão gerencial enquanto a operação acontece, sem esperar o fechamento do dia.',
    focus: 'trend',
  },
  {
    id: 'integracao',
    label: 'Integração',
    icon: Cable,
    title: 'Integração de operações',
    description:
      'PDV, retaguarda, convênios, pagamentos e loja virtual trocam informações entre si: cada evento chega ao módulo que precisa dele.',
    focus: 'feed',
  },
  {
    id: 'centralizada',
    label: 'Gestão centralizada',
    icon: LayoutDashboard,
    title: 'Gestão centralizada',
    description:
      'Uma única visão para acompanhar todas as unidades, comparar desempenho e coordenar estoque e compras de uma rede inteira.',
    focus: 'stores',
  },
  {
    id: 'automacao',
    label: 'Automação',
    icon: RefreshCcw,
    title: 'Automação de processos',
    description:
      'Sincronização de estoque e preços, confirmação de pagamentos e conciliações deixam de depender de digitação manual.',
    focus: 'feed',
  },
  {
    id: 'indicadores',
    label: 'Indicadores',
    icon: Target,
    title: 'Indicadores gerenciais',
    description:
      'Faturamento, ticket médio, metas e mix de produtos organizados em painéis para apoiar decisões com base em dados.',
    focus: 'kpis',
  },
]

// ------------------------------------------------------------------
// DADOS FICTÍCIOS — usados apenas no dashboard demonstrativo.
// Não representam resultados reais da VSM nem de seus clientes.
// ------------------------------------------------------------------

export const demoKpis: DemoKpi[] = [
  { label: 'Faturamento do dia', value: 'R$ 48,2 mil', delta: '+6,4%', trend: 'up', favorable: true },
  { label: 'Ticket médio', value: 'R$ 87,40', delta: '+2,1%', trend: 'up', favorable: true },
  { label: 'Pedidos online', value: '126', delta: '+12%', trend: 'up', favorable: true },
  { label: 'Ruptura de estoque', value: '1,8%', delta: '−0,4 p.p.', trend: 'down', favorable: true },
]

/** Faturamento por hora (R$ mil) — fictício */
export const demoHourlySales: DemoPoint[] = [
  { label: '08h', value: 2.1 },
  { label: '09h', value: 3.4 },
  { label: '10h', value: 4.6 },
  { label: '11h', value: 5.2 },
  { label: '12h', value: 4.1 },
  { label: '13h', value: 3.8 },
  { label: '14h', value: 4.9 },
  { label: '15h', value: 5.6 },
  { label: '16h', value: 6.3 },
  { label: '17h', value: 7.1 },
  { label: '18h', value: 6.4 },
]

/** Faturamento por unidade (R$ mil) — fictício */
export const demoStores: DemoPoint[] = [
  { label: 'Loja Centro', value: 14.8 },
  { label: 'Loja Norte', value: 11.2 },
  { label: 'Loja Sul', value: 9.6 },
  { label: 'Loja Leste', value: 7.9 },
  { label: 'E-commerce', value: 4.7 },
]

export const demoEvents: DemoEvent[] = [
  { source: 'FrontFarma', target: 'OuroFarma', message: 'Venda sincronizada com a retaguarda' },
  { source: 'PIX VSM', target: 'FrontFarma', message: 'Pagamento PIX confirmado' },
  { source: 'E-Commerce', target: 'Estoque', message: 'Pedido online reservou itens' },
  { source: 'WebConvênio', target: 'OuroFarma', message: 'Compra conveniada autorizada' },
  { source: 'Franquias', target: 'Compras', message: 'Pedido consolidado da rede' },
  { source: 'OuroFarma', target: 'VSM B.I.', message: 'Indicadores recalculados' },
]
