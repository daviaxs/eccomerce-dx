import React from 'react'
import styled from 'styled-components'

interface IButtonPrimaryProps {
  children: React.ReactNode
}

const ButtonPrimaryStyle = styled.button``

export function ButtonPrimary({ children }: IButtonPrimaryProps) {
  return <ButtonPrimaryStyle>{children}</ButtonPrimaryStyle>
}
