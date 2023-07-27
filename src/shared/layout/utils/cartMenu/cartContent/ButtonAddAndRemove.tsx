import { theme } from '@/shared/theme'
import React from 'react'
import styled from 'styled-components'

interface ButtonAddAndRemoveProps {
  variant: 'default' | 'green'
  children: React.ReactNode

  onClick: () => void
}

const getButtonColor = (variant: string) => {
  switch (variant) {
    case 'green':
      return theme.green[500]
    default:
      return theme.gray[300]
  }
}

const ButtonAddAndRemoveStyle = styled.button<ButtonAddAndRemoveProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border: 2px solid ${(props) => getButtonColor(props.variant)};
  border-radius: 0.5rem;

  padding: 0.2rem;
  transform: scale(0.8);
  transition: all 0.2s ease-out;
  cursor: pointer;

  .iconRemove {
    color: ${theme.gray[300]};
  }

  .iconAdd {
    color: ${theme.green[500]};
  }

  &:hover {
    background-color: ${(props) => getButtonColor(props.variant)};

    .icon {
      color: white;
    }
  }
`

export function ButtonAddAndRemove({
  variant,
  children,
  onClick,
}: ButtonAddAndRemoveProps) {
  return (
    <ButtonAddAndRemoveStyle variant={variant} onClick={onClick}>
      {children}
    </ButtonAddAndRemoveStyle>
  )
}
