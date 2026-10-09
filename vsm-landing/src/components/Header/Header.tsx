import { ArrowRight, Menu, X } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState, type CSSProperties } from 'react'
import { navItems } from '../../data/site'
import { useActiveSection } from '../../hooks/useActiveSection'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useScrolled } from '../../hooks/useScrolled'
import { ButtonLink } from '../ui/Button'
import { Logo } from '../ui/Logo'
import styles from './Header.module.scss'

const sectionIds = navItems.map((item) => item.id)

export function Header() {
  const [menuRequested, setMenuRequested] = useState(false)
  const scrolled = useScrolled()
  const active = useActiveSection(sectionIds)
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  // No layout desktop o menu mobile não existe, mesmo que tenha ficado aberto
  const open = menuRequested && !isDesktop
  const menuId = useId()
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const close = useCallback((restoreFocus = false) => {
    setMenuRequested(false)
    if (restoreFocus) toggleRef.current?.focus()
  }, [])

  // Menu mobile: trava o scroll do body, fecha com Esc e mantém o foco no painel
  useEffect(() => {
    if (!open) return
    document.body.classList.add('is-locked')
    panelRef.current?.querySelector<HTMLElement>('a')?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close(true)
        return
      }
      if (event.key !== 'Tab' || !panelRef.current || !toggleRef.current) return
      const focusables = [
        toggleRef.current,
        ...panelRef.current.querySelectorAll<HTMLElement>('a[href]'),
      ]
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last?.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.classList.remove('is-locked')
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, close])

  const headerClass = [styles.header, scrolled || open ? styles.scrolled : '', open ? styles.open : '']
    .filter(Boolean)
    .join(' ')

  return (
    <header className={headerClass}>
      <div className={`container ${styles.inner}`}>
        <a href="#inicio" className={styles.brand} aria-label="VSM Informática — voltar ao início" onClick={() => close()}>
          <Logo />
        </a>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={styles.navLink}
                  aria-current={active === item.id ? 'true' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <div className={styles.cta}>
            <ButtonLink href="#solucoes" icon={<ArrowRight />}>
              Conhecer soluções
            </ButtonLink>
          </div>

          <button
            ref={toggleRef}
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuRequested(!open)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        ref={panelRef}
        id={menuId}
        className={styles.mobilePanel}
        hidden={!open}
      >
        <nav aria-label="Navegação principal (mobile)" className="container">
          <ul className={styles.mobileList}>
            {navItems.map((item, index) => (
              <li key={item.id} style={{ '--i': index } as CSSProperties}>
                <a
                  href={`#${item.id}`}
                  className={styles.mobileLink}
                  aria-current={active === item.id ? 'true' : undefined}
                  onClick={() => close()}
                >
                  <span className={styles.mobileIndex} aria-hidden="true">
                    0{index + 1}
                  </span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <ButtonLink href="#solucoes" size="lg" icon={<ArrowRight />} className={styles.mobileCta} onClick={() => close()}>
            Conhecer soluções
          </ButtonLink>
        </nav>
      </div>
    </header>
  )
}
