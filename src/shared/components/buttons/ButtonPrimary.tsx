import { theme } from '@/shared/theme'
import React from 'react'
import styled from 'styled-components'

interface ButtonPrimaryProps {
  variant: 'purple' | 'green' | 'red'
  width: '100%' | '90%'
  children: React.ReactNode
  className: string
  disabled?: boolean
  onClick: () => void
}

const getButtonColorDefault = (variant: string) => {
  switch (variant) {
    case 'purple':
      return theme.purple[400]
    case 'green':
      return theme.green[400]
    default:
      return theme.red[400]
  }
}

const getButtonColorHover = (variant: string) => {
  switch (variant) {
    case 'purple':
      return theme.purple[500]
    case 'green':
      return theme.green[500]
    default:
      return theme.red[500]
  }
}

const getButtonColorOutline = (variant: string) => {
  switch (variant) {
    case 'purple':
      return theme.purple[300]
    case 'green':
      return theme.green[300]
    default:
      return theme.red[300]
  }
}

const getButtonColorFocus = (variant: string) => {
  switch (variant) {
    case 'purple':
      return theme.purple[300]
    case 'green':
      return theme.green[800]
    default:
      return theme.red[800]
  }
}

const ButtonPrimaryStyle = styled.button<ButtonPrimaryProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};

  padding: 0.875rem 1.125rem;
  border-radius: 0.5rem;
  border: none;

  transition: all 0.2s ease-out;

  background-color: ${(props) => getButtonColorDefault(props.variant)};

  &:hover {
    background-color: ${(props) => getButtonColorHover(props.variant)};
    outline: 0.063rem solid ${(props) => getButtonColorOutline(props.variant)};
    cursor: pointer;
  }

  &:focus-visible {
    outline: 0.2rem solid ${(props) => getButtonColorFocus(props.variant)};
  }

  &:disabled {
    cursor: no-drop;
    outline: none;
    background-color: ${(props) => getButtonColorDefault(props.variant)};
    opacity: 50%;
  }
`

export function ButtonPrimary({
  children,
  variant,
  width,
  onClick,
  disabled,
  className,
}: ButtonPrimaryProps) {
  return (
    <ButtonPrimaryStyle
      className={className}
      variant={variant}
      width={width}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonPrimaryStyle>
  )
}
