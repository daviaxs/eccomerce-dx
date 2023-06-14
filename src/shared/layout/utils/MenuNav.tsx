import { NavButtonMobile } from '@/shared/components/navButton/NavButtonMobile'
import { theme } from '@/shared/theme'
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
        <NavButtonMobile>a</NavButtonMobile>
      </NavContainer>
    </MenuNavStyle>
  )
}
