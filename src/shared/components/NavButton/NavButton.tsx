import { THeadingSecondary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

interface INavButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  to: string
  children: React.ReactNode
}

const NavButtonStyle = styled.button<INavButtonProps>`
  display: flex;
  align-items: center;
  position: relative;

  background: transparent;
  background-blend-mode: overlay;
  border: none;

  white-space: nowrap;
  cursor: pointer;
  z-index: 1;

  transition: all 0.2s ease-out;

  &::before {
    content: '';

    position: absolute;
    bottom: 0;
    z-index: -1;

    width: 0;
    height: 0.2rem;

    background-color: ${theme.purple[500]};
    transition: width 0.2s ease-in;
  }

  &&:hover {
    transform: scale(1.05);
  }

  &&:hover::before {
    width: 100%;
  }

  &.active::before {
    width: 100%;
  }

  &.inactive {
    opacity: 60%;
  }
`

export const NavButton: React.FC<INavButtonProps> = ({
  to,
  children,
  ...rest
}) => {
  return (
    <NavLink to={to}>
      {(props) => (
        <NavButtonStyle
          className={props.isActive ? 'active' : 'inactive'}
          to={to}
          {...rest}
        >
          <THeadingSecondary txtColor={theme.gray[50]} fontSize={1}>
            {children}
          </THeadingSecondary>
        </NavButtonStyle>
      )}
    </NavLink>
  )
}
