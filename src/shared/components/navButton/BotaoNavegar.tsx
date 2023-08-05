import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { useMenuNavContext } from '@/shared/contexts/MenuNavContext'
import { useSearchInputContext } from '@/shared/contexts/SearchInputContext'
import { theme } from '@/shared/theme'

interface NavButtonProps {
  to: string
  children: React.ReactNode
}

const NavButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 0.625rem 1rem;
  gap: 1rem;
  background-color: ${theme.gray[600]};
  color: ${theme.gray[50]};
  border-radius: 0.5rem;

  width: 100%;
  height: 4rem;

  border: none;
  cursor: pointer;
  transition: all 0.2s ease-out;

  &&:hover {
    transform: scale(1.02);
  }

  &.inactive {
    opacity: 50%;
  }

  &.inactive:hover {
    opacity: 80%;
  }
`

export function NavButton({ children, to, ...rest }: NavButtonProps) {
  const { toggleMenuNav } = useMenuNavContext()
  const { setInputValue } = useSearchInputContext()

  const handleRedirect = () => {
    toggleMenuNav()
    setInputValue('em alta')
  }

  return (
    <NavLink to={to} style={{ width: '100%' }} onClick={handleRedirect}>
      {(props) => (
        <NavButtonStyle
          className={props.isActive ? 'active' : 'inactive'}
          {...rest}
        >
          {children}
        </NavButtonStyle>
      )}
    </NavLink>
  )
}
