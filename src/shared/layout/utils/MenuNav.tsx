import { theme } from '@/shared/theme'
import styled from 'styled-components'

const MenuNavStyle = styled.nav`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.gray[900]};
  margin-top: 4rem;
  z-index: 1;
`

export function MenuNav() {
  return <MenuNavStyle></MenuNavStyle>
}
