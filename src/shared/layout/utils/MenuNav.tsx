import { NavButtonMobile } from '@/shared/components/navButton/NavButtonMobile'
import { THeadingSecondary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import { LucideHome } from 'lucide-react'
import styled from 'styled-components'

const MenuNavStyle = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.gray[900]};
  margin-top: 4rem;
  z-index: 1;

  display: flex;
  align-items: start;
  padding: 2rem;
`

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
  width: 100%;
`

export function MenuNav() {
  return (
    <MenuNavStyle>
      <NavContainer>
        <NavButtonMobile>
          <LucideHome size={32} />
          <THeadingSecondary fontSize={1.3}>Página inicial</THeadingSecondary>
        </NavButtonMobile>
      </NavContainer>
    </MenuNavStyle>
  )
}
