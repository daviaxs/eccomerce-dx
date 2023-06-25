import { theme } from '@/shared/theme'
import React from 'react'
import styled from 'styled-components'

interface IButtonAddAndRemoveProps {
  variant: 'default' | 'green'
  children: React.ReactNode

  onClick: () => void
}

const getButtonBorderColor = (variant: string) => {
  switch (variant) {
    case 'green':
      return theme.green[500]
    default:
      return theme.gray[300]
  }
}

const ButtonAddAndRemoveStyle = styled.button<IButtonAddAndRemoveProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: 1px solid ${(props) => getButtonBorderColor(props.variant)};
  border-radius: 0.5rem;

  width: 1.3rem;
  height: 1.3rem;
`

export function ButtonAddAndRemove({
  variant,
  children,
  onClick,
}: IButtonAddAndRemoveProps) {
  return (
    <ButtonAddAndRemoveStyle variant={variant} onClick={onClick}>
      {children}
    </ButtonAddAndRemoveStyle>
  )
}
