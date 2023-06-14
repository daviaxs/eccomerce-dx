import React from 'react'
import styled from 'styled-components'

import { theme } from '@/shared/theme'
import { NavLink } from 'react-router-dom'

interface INavButtonMobileProps {
  to: string
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
  cursor: pointer;
  transition: all 0.2s ease-out;

  &&:hover {
    transform: scale(1.05);
  }

  &.inactive {
    opacity: 60%;
  }

  &.inactive:hover {
    opacity: 80%;
  }
`

export function NavButtonMobile({
  children,
  to,
  ...rest
}: INavButtonMobileProps) {
  return (
    <NavLink to={to} style={{ width: '100%' }}>
      {(props) => (
        <NavButtonMobileStyle
          className={props.isActive ? 'active' : 'inactive'}
          {...rest}
        >
          {children}
        </NavButtonMobileStyle>
      )}
    </NavLink>
  )
}
