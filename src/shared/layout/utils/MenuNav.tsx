import { LucideHome, Newspaper } from 'lucide-react'
import { useContext } from 'react'
import styled from 'styled-components'

import { NavButtonMobile } from '@/shared/components/navButton/NavButtonMobile'
import { useMenuNavContext } from '@/shared/contexts/MenuNavContext'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingSecondary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

const MenuNavStyle = styled.div<{ display: 'flex' | 'none' }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.gray[900]};
  margin-top: 4rem;
  z-index: 1;

  display: ${(props) => props.display};
  align-items: start;
  padding: 2rem;
`

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1.5rem;
  width: 100%;
`

export function MenuNav() {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { expandedMenu } = useMenuNavContext()

  return (
    <MenuNavStyle
      display={windowWidth <= 600 && expandedMenu ? 'flex' : 'none'}
    >
      <NavContainer>
        <NavButtonMobile to="/pagina-inicial">
          <LucideHome size={32} />
          <THeadingSecondary fontSize={1.3}>Página inicial</THeadingSecondary>
        </NavButtonMobile>
        <NavButtonMobile to="/faq">
          <Newspaper size={32} />
          <THeadingSecondary fontSize={1.3}>FAQ</THeadingSecondary>
        </NavButtonMobile>
      </NavContainer>
    </MenuNavStyle>
  )
}
