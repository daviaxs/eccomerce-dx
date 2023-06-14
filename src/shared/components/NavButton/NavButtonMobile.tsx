import { theme } from '@/shared/theme'
import styled from 'styled-components'

const NavButtonMobileStyle = styled.button`
  display: flex;
  align-items: center;
  padding: 0.625rem 1rem;
  gap: 1.25rem;
  background-color: ${theme.gray[700]};
`

export function NavButtonMobile() {
  return <NavButtonMobileStyle></NavButtonMobileStyle>
}
