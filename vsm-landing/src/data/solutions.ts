import {
  ChartNoAxesCombined,
  FlaskConical,
  Handshake,
  Network,
  QrCode,
  ScanBarcode,
  ShoppingCart,
  Store,
} from 'lucide-react'
import type { Solution } from '../types'

/**
 * Ecossistema de soluções. Descrições e destaques baseados no briefing e nas
 * páginas oficiais de cada produto. Links verificados com HTTP 200.
 * O FrontFarma não possui página própria: ele é apresentado na página do
 * OuroFarma, por isso o link aponta para lá com rótulo explícito.
 */
export const solutions: Solution[] = [
  {
    id: 'ourofarma',
    name: 'OuroFarma',
    category: 'Gestão de drogarias',
    icon: Store,
    description:
      'Sistema de gestão para drogarias que reúne estoque, compras, vendas e processos financeiros em uma única plataforma.',
    highlights: ['Gestão multilojas', 'Estoque e compras', 'Fluxo de caixa'],
    link: { label: 'Conhecer o OuroFarma', href: 'https://www.vsm.com.br/ourofarma/' },
  },
  {
    id: 'frontfarma',
    name: 'FrontFarma',
    category: 'Frente de caixa · PDV',
    icon: ScanBarcode,
    description:
      'Frente de caixa integrada ao OuroFarma para dar agilidade, segurança e controle às operações de balcão e PDV.',
    highlights: ['Integração com PBMs', 'Farmácia Popular', 'Promoções automáticas'],
    link: { label: 'Ver FrontFarma no site', href: 'https://www.vsm.com.br/ourofarma/' },
  },
  {
    id: 'ouroformulas',
    name: 'OuroFórmulas',
    category: 'Farmácias de manipulação',
    icon: FlaskConical,
    description:
      'Gestão completa para farmácias de manipulação, do atendimento ao laboratório, com controle da produção magistral.',
    highlights: ['Rastreabilidade de lotes', 'Controle de produção', 'Apoio a SNGPC'],
    link: { label: 'Conhecer o OuroFórmulas', href: 'https://www.vsm.com.br/ouroformulas/' },
  },
  {
    id: 'vsm-bi',
    name: 'VSM B.I.',
    category: 'Inteligência de negócios',
    icon: ChartNoAxesCombined,
    description:
      'Business Intelligence que organiza indicadores, metas e relatórios para transformar dados da operação em decisões.',
    highlights: ['Indicadores gerenciais', 'Acompanhamento de metas', 'Análise de resultados'],
    link: { label: 'Conhecer o VSM B.I.', href: 'https://www.vsm.com.br/vsm-bi/' },
  },
  {
    id: 'webconvenio',
    name: 'WebConvênio',
    category: 'Gestão de convênios',
    icon: Handshake,
    description:
      'Gestão digital de convênios entre farmácias e empresas, com controle de autorizações e processos totalmente online.',
    highlights: ['Controle de limites', 'Autorizações online', 'Menos burocracia'],
    link: { label: 'Conhecer o WebConvênio', href: 'https://www.vsm.com.br/webconvenio/' },
  },
  {
    id: 'e-commerce',
    name: 'E-Commerce VSM',
    category: 'Vendas online',
    icon: ShoppingCart,
    description:
      'Loja virtual integrada ao sistema de gestão: produtos, estoque, preços e pedidos sincronizados com a operação física.',
    highlights: ['Estoque sincronizado', 'Delivery e retirada', 'Identidade própria'],
    link: { label: 'Conhecer o E-Commerce', href: 'https://www.vsm.com.br/e-commerce/' },
  },
  {
    id: 'franquias',
    name: 'VSM Franquias',
    category: 'Redes de lojas',
    icon: Network,
    description:
      'Gerenciamento centralizado de redes e franquias, com visão de estoque, vendas, pedidos e compras de todas as lojas.',
    highlights: ['Visão consolidada', 'Comparativo entre lojas', 'Compras centralizadas'],
    link: { label: 'Conhecer o VSM Franquias', href: 'https://www.vsm.com.br/franquias/' },
  },
  {
    id: 'pix-vsm',
    name: 'PIX VSM',
    category: 'Pagamentos digitais',
    icon: QrCode,
    description:
      'Integração de pagamentos via PIX ao fluxo de vendas, com confirmação acompanhada no sistema e informações centralizadas.',
    highlights: ['QR Code no PDV', 'Integrado ao FrontFarma', 'Relatórios centralizados'],
    link: { label: 'Conhecer o PIX VSM', href: 'https://www.vsm.com.br/pix-vsm/' },
  },
]
