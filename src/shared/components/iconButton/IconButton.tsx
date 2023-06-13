import React from 'react'
import styled from 'styled-components'

interface IIconButtonProps {
  children: React.ReactNode
}

const IconButtonStyle = styled.button``

export function IconButton({ children }: IIconButtonProps) {
  return <IconButtonStyle>{children}</IconButtonStyle>
}
