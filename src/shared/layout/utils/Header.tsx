import { NavButton } from '@/shared/components/NavButton/NavButton'
import { theme } from '@/shared/theme'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  height: 4rem;

  background-color: ${theme.gray[700]};
  border-bottom: 1px solid ${theme.gray[500]};
`

export function Header() {
  return (
    <HeaderStyle>
      <NavButton to="/pagina-inicial">Página inicial</NavButton>
      <NavButton to="/faq">FAQ</NavButton>
    </HeaderStyle>
  )
}
