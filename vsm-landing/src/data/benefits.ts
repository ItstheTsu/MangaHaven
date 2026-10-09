import { Blocks, Database, Gauge, Lightbulb, Scaling, Workflow } from 'lucide-react'
import type { Benefit } from '../types'

/** Benefícios de um ecossistema integrado — conceitos, sem métricas inventadas. */
export const benefits: Benefit[] = [
  {
    title: 'Processos organizados',
    description:
      'Rotinas de balcão, estoque, compras e financeiro seguem um fluxo único, com regras claras e menos etapas manuais.',
    outcome: 'Padronização da operação',
    icon: Workflow,
  },
  {
    title: 'Informação centralizada',
    description:
      'Cadastros, vendas e movimentações ficam em uma base integrada, eliminando planilhas paralelas e dados divergentes.',
    outcome: 'Uma fonte de verdade',
    icon: Database,
  },
  {
    title: 'Agilidade operacional',
    description:
      'O que acontece no PDV, no e-commerce ou no convênio reflete na gestão sem retrabalho de digitação entre sistemas.',
    outcome: 'Menos retrabalho',
    icon: Gauge,
  },
  {
    title: 'Escalabilidade',
    description:
      'A mesma tecnologia acompanha a operação de uma loja independente até redes com várias unidades e franquias.',
    outcome: 'Crescimento sem troca de sistema',
    icon: Scaling,
  },
  {
    title: 'Decisões baseadas em dados',
    description:
      'Indicadores e relatórios gerenciais mostram onde a empresa ganha ou perde resultado, apoiando decisões mais seguras.',
    outcome: 'Gestão orientada por indicadores',
    icon: Lightbulb,
  },
  {
    title: 'Soluções que se conectam',
    description:
      'Gestão, PDV, manipulação, B.I., convênios, pagamentos e vendas online foram pensados para trabalhar juntos.',
    outcome: 'Ecossistema completo',
    icon: Blocks,
  },
]
