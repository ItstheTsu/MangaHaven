import { useEffect } from 'react'

/**
 * Observa todos os elementos `[data-reveal]` e marca `data-revealed="true"`
 * quando entram na viewport. Um único IntersectionObserver para a página.
 * O estado inicial/transição fica em global.scss e só se aplica quando o
 * usuário não prefere movimento reduzido — sem JS ou sem suporte, nada fica oculto
 * (o fallback abaixo revela tudo imediatamente).
 */
export function useReveal(): void {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    if (!nodes.length) return

    if (!('IntersectionObserver' in window)) {
      nodes.forEach((node) => (node.dataset.revealed = 'true'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const node = entry.target as HTMLElement
          node.dataset.revealed = 'true'
          observer.unobserve(node)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
}
