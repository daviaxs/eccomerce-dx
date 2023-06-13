import React from 'react'
import styled from 'styled-components'

interface IIconButtonProps {
  children: React.ReactNode
}

const IconButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 9999px;

  height: 50px;
  width: 50px;

  background-color: transparent;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: #ffffff2c;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.95);
  }
`

export function IconButton({ children }: IIconButtonProps) {
  return <IconButtonStyle>{children}</IconButtonStyle>
}
