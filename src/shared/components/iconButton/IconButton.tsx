import React from 'react'
import styled from 'styled-components'

interface IIconButtonProps {
  size: number
  borderRadius: number
  display?: 'flex' | 'none'
  className?: string
  children: React.ReactNode
}

const IconButtonStyle = styled.button<IIconButtonProps>`
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 9999px;

  height: ${(props) => props.size}rem;
  width: ${(props) => props.size}rem;

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

export function IconButton({
  size,
  borderRadius,
  display,
  className,
  children,
}: IIconButtonProps) {
  return (
    <IconButtonStyle
      size={size}
      display={display}
      borderRadius={borderRadius}
      className={className}
    >
      {children}
    </IconButtonStyle>
  )
}
