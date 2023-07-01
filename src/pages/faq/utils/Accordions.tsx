import { theme } from '@/shared/theme'
import React from 'react'
import styled from 'styled-components'

const AccordionsStyle = styled.div`
  .accordion {
    background-color: ${theme.gray[500]};
    outline: 1px solid ${theme.gray[400]};
    color: ${theme.gray[50]};
  }
`

interface AccordionsProps {
  children: React.ReactNode
}

export function Accordions({ children }: AccordionsProps) {
  return <AccordionsStyle>{children}</AccordionsStyle>
}
