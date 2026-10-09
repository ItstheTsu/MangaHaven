import { CalendarClock, MapPinned, Users } from 'lucide-react'
import type { ExternalLinkItem, NavItem, Stat } from '../types'

/**
 * Dados institucionais. Todas as informações abaixo foram fornecidas no
 * briefing ou conferidas no site oficial (https://www.vsm.com.br/).
 */
export const company = {
  name: 'VSM Informática',
  shortName: 'VSM',
  founded: 1992,
  city: 'Assis',
  state: 'SP',
  officialSite: 'https://www.vsm.com.br/',
} as const

export const navItems: NavItem[] = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'solucoes', label: 'Soluções' },
  { id: 'tecnologia', label: 'Tecnologia' },
  { id: 'diferenciais', label: 'Diferenciais' },
  { id: 'faq', label: 'FAQ' },
]

export const institutionalStats: Stat[] = [
  {
    value: '+30',
    label: 'anos de atuação',
    description: `Desenvolvendo software desde ${company.founded}, em ${company.city}/${company.state}.`,
    icon: CalendarClock,
  },
  {
    value: '+3 mil',
    label: 'clientes',
    description: 'Drogarias, farmácias e farmácias de manipulação usando as soluções VSM.',
    icon: Users,
  },
  {
    value: 'Nacional',
    label: 'presença',
    description: 'Clientes em todos os estados do Brasil, com sede em Assis/SP.',
    icon: MapPinned,
  },
]

/** Links institucionais verificados (HTTP 200) no site oficial. */
export const officialLinks = {
  solutions: { label: 'Soluções VSM', href: 'https://www.vsm.com.br/solucoes/' },
  company: { label: 'Nossa empresa', href: 'https://www.vsm.com.br/nossaempresa/' },
  contact: { label: 'Contato', href: 'https://www.vsm.com.br/contato/' },
  faq: { label: 'Perguntas frequentes', href: 'https://www.vsm.com.br/perguntas-frequentes/' },
  privacy: { label: 'Política de privacidade', href: 'https://www.vsm.com.br/politicas-de-privacidade/' },
  blog: { label: 'Blog VSM', href: 'https://blog.vsm.com.br/' },
  clientArea: { label: 'Área do cliente', href: 'https://www.vsm.com.br/areadocliente/login' },
  careers: { label: 'Trabalhe conosco', href: 'https://www.vsm.com.br/trabalheconosco/' },
} satisfies Record<string, ExternalLinkItem>

export const socialLinks: ExternalLinkItem[] = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/vsm-inform%C3%A1tica/' },
  { label: 'Instagram', href: 'https://www.instagram.com/vsminformatica/' },
  { label: 'Facebook', href: 'https://web.facebook.com/vsmsoftwares' },
]
