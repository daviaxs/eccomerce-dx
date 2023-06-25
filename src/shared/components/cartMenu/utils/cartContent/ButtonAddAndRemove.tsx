import React from 'react'
import styled from 'styled-components'

interface IButtonAddAndRemoveProps {
  variant: 'default' | 'green'
  children: React.ReactNode

  onClick: () => void
}

const ButtonAddAndRemoveStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;
  border-radius: 0.5rem;

  width: 1.3rem;
  height: 1.3rem;
`

export function ButtonAddAndRemove({
  children,
  onClick,
}: IButtonAddAndRemoveProps) {
  return (
    <ButtonAddAndRemoveStyle onClick={onClick}>
      {children}
    </ButtonAddAndRemoveStyle>
  )
}
