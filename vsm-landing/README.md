# VSM Informática — Landing page conceitual

Conceito de landing page institucional para a VSM Informática (Assis/SP). **Não é uma página oficial da empresa.**
Indicadores exibidos no painel da seção "Tecnologia" são fictícios e sinalizados como demonstração.

## Stack

React 19 + Vite + TypeScript, SCSS (CSS Modules), Lucide React (ícones), fontes Inter e Sora auto-hospedadas
via Fontsource. Lint com oxlint (plugins react, typescript e jsx-a11y). Sem Tailwind/Bootstrap.

## Executar

```bash
cd vsm-landing
npm install
npm run dev       # desenvolvimento (http://localhost:5173)
npm run lint      # oxlint
npm run build     # typecheck + build de produção em dist/
npm run preview   # serve o build (http://localhost:4173)
```

## Estrutura

```text
src/
├── components/   Header, Hero, About, Solutions, Technology, Benefits, CTA, FAQ, Footer, ui/
├── data/         conteúdo (site, soluções, benefícios, FAQ, dados demonstrativos)
├── hooks/        scroll, seção ativa, reveal, media query, movimento reduzido, in-view
├── styles/       tokens (cores, tipografia, espaçamento, breakpoints), mixins, global
└── types/        interfaces TypeScript
```

## Deploy

O workflow `.github/workflows/deploy-vsm-landing.yml` gera o build e publica no GitHub Pages
(`base: './'` no Vite permite servir em subcaminho).
