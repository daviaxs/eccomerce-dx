import { theme } from '@/shared/theme'
import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 4rem;

  background-color: ${theme.gray[700]};
  border-bottom: 1px solid #2b2b2b;
`

export function Header() {
  return <HeaderStyle>header</HeaderStyle>
}
