import { useMediaQuery } from './useMediaQuery'

/** Reflete a preferência do sistema por movimento reduzido. */
export function useReducedMotion(): boolean {
  return useMediaQuery('(prefers-reduced-motion: reduce)')
}
