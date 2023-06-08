import { THeadingSecondary } from '@/shared/fonts/Fonts.style'
import React from 'react'
import { NavLink } from 'react-router-dom'

interface INavButtonProps {
  to: string
  children: React.ReactNode
}

export function NavButton({ children, to }: INavButtonProps) {
  return (
    <NavLink to={to}>
      <THeadingSecondary>{children}</THeadingSecondary>
    </NavLink>
  )
}
