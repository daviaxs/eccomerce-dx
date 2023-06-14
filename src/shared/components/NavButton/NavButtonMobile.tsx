import React from 'react'
import styled from 'styled-components'

import { theme } from '@/shared/theme'

interface INavButtonMobileProps {
  children: React.ReactNode
}

const NavButtonMobileStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.625rem 1rem;
  gap: 1rem;
  background-color: ${theme.gray[700]};
  color: ${theme.gray[50]};
  border-radius: 0.5rem;

  width: 100%;
  height: 5rem;

  border: none;
`

export function NavButtonMobile({ children }: INavButtonMobileProps) {
  return <NavButtonMobileStyle>{children}</NavButtonMobileStyle>
}
