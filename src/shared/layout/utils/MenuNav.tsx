import { ArrowLeft, LucideHome, Newspaper } from 'lucide-react'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { Container } from '@/shared/components/container/Container'
import { IconButton } from '@/shared/components/iconButton/IconButton'
import { NavButton } from '@/shared/components/navButton/BotaoNavegar'
import { useMenuNavContext } from '@/shared/contexts/MenuNavContext'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingSecondary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

const MenuNavStyle = styled.div`
  position: fixed;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  margin-top: 5rem;
  margin-left: 3rem;
  padding-top: 1rem;
  gap: 1rem;

  background-color: ${theme.gray[800]};
  border: 1.5px solid ${theme.gray[500]};
  box-shadow: 0px 0px 74px 0px #000;
  border-radius: 0.5rem;

  height: fit-content;
  width: fit-content;

  .line {
    height: 1.5px;
    width: 100%;
    background-color: ${theme.gray[500]};
  }

  .iconBack {
    position: absolute;
    left: 0.5rem;
    top: 0.7rem;
  }

  &.openMenu {
    animation: openMenu 0.3s forwards ease-out;
  }

  @keyframes openMenu {
    0% {
      transform: translateX(-25rem);
    }
    100% {
      transform: translateX(0rem);
    }
  }

  &.closeMenu {
    animation: closeMenu 0.3s forwards ease-out;
  }

  @keyframes closeMenu {
    0% {
      transform: translateX(0rem);
    }
    100% {
      transform: translateX(-25rem);
    }
  }

  @media screen and (max-width: 450px) {
    margin-top: 0rem;
    margin-left: 0rem;

    box-shadow: none;
    border: none;
    border-radius: 0;

    width: 100vw;
    height: 100vh;
  }
`

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  gap: 1rem;
  padding: 0.75rem;

  height: 100%;
  width: 20rem;

  @media screen and (max-width: 450px) {
    width: 100%;
  }
`

export function MenuNav() {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const menuNavRef = useRef<HTMLDivElement>(null)
  const { expandedMenu, toggleMenuNav } = useMenuNavContext()
  const [shouldRender, setshouldRender] = useState(expandedMenu)

  useEffect(() => {
    const handleClickOutsideMenu = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null

      if (menuNavRef.current && !menuNavRef.current.contains(target)) {
        toggleMenuNav()
      }
    }

    document.addEventListener('mousedown', handleClickOutsideMenu)

    return () => {
      document.removeEventListener('mousedown', handleClickOutsideMenu)
    }
  }, [toggleMenuNav])

  useEffect(() => {
    if (expandedMenu) {
      setshouldRender(true)
    }
  }, [expandedMenu])

  const handleAnimationEnd = useCallback(() => {
    if (!expandedMenu) {
      setshouldRender(false)
    }
  }, [expandedMenu])

  if (!shouldRender) {
    return null
  }

  return (
    <MenuNavStyle
      className={expandedMenu ? 'openMenu' : 'closeMenu'}
      onAnimationEnd={handleAnimationEnd}
      ref={menuNavRef}
    >
      <Container
        display="flex"
        flexDir="column"
        align="center"
        gap={1}
        width="100%"
        height="fit-content"
      >
        {windowWidth <= 450 && (
          <IconButton
            onClick={toggleMenuNav}
            size={2.5}
            borderRadius={9999}
            className="iconBack"
          >
            <ArrowLeft color={theme.gray[100]} size={40} />
          </IconButton>
        )}
        <THeadingSecondary txtColor={theme.gray[50]}>Navegar</THeadingSecondary>
        <span className="line" />
      </Container>

      <NavContainer>
        <NavButton to="/pagina-inicial">
          <LucideHome size={32} />
          <THeadingSecondary fontSize={1.3}>Página inicial</THeadingSecondary>
        </NavButton>
        <NavButton to="/faq">
          <Newspaper size={32} />
          <THeadingSecondary fontSize={1.3}>FAQ</THeadingSecondary>
        </NavButton>
      </NavContainer>
    </MenuNavStyle>
  )
}
