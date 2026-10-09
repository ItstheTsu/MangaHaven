import type { FaqItem } from '../types'

/**
 * Perguntas frequentes. Respostas resumidas a partir da página oficial
 * https://www.vsm.com.br/perguntas-frequentes/ — sem prometer recursos
 * além do que é divulgado pela empresa.
 */
export const faqItems: FaqItem[] = [
  {
    id: 'migracao',
    question: 'É possível migrar do sistema atual sem perder os dados?',
    answer:
      'Sim. A VSM avalia a base do sistema utilizado atualmente e realiza a importação dos cadastros e do estoque compatíveis, reduzindo recadastramentos e retrabalho durante a troca.',
  },
  {
    id: 'implantacao',
    question: 'Existe custo de implantação ou taxa de adesão?',
    answer:
      'Segundo a VSM, a implantação do OuroFarma e do OuroFórmulas é gratuita e não há taxa de adesão. A equipe acompanha a configuração, a conversão dos dados e a entrada em operação.',
  },
  {
    id: 'porte',
    question: 'As soluções atendem tanto uma loja independente quanto uma rede?',
    answer:
      'Sim. O OuroFarma trabalha com gestão multilojas em tempo real, e o VSM Franquias oferece visão centralizada de estoque, vendas, pedidos e compras para redes e franquias.',
  },
  {
    id: 'drogaria-manipulacao',
    question: 'Tenho drogaria e manipulação. Preciso de sistemas separados?',
    answer:
      'Não. O OuroFórmulas pode trabalhar integrado ao OuroFarma e ao FrontFarma, conectando manipulação, drogaria, vendas, estoque e gestão em uma única tecnologia.',
  },
  {
    id: 'pbm',
    question: 'O PDV integra com Farmácia Popular e PBMs?',
    answer:
      'Sim. O FrontFarma, frente de caixa integrada ao OuroFarma, possui integração com o programa Farmácia Popular e com os principais PBMs utilizados pelo varejo farmacêutico.',
  },
  {
    id: 'ecommerce',
    question: 'O e-commerce fica integrado ao estoque e aos preços da loja?',
    answer:
      'Sim. No E-Commerce VSM, produtos, estoque, preços e vendas são sincronizados com o ecossistema VSM, evitando atualizações manuais entre a loja física e a operação online.',
  },
  {
    id: 'bi',
    question: 'Como o VSM B.I. apoia a tomada de decisão?',
    answer:
      'O VSM B.I. reúne os principais indicadores do negócio de forma clara e atualizada, facilitando o acompanhamento de vendas, metas e resultados para identificar problemas e oportunidades com mais rapidez.',
  },
]
