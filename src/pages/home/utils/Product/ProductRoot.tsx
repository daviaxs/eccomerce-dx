import React, { useContext } from 'react'
import styled from 'styled-components'

import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { theme } from '@/shared/theme'

interface ProductRootProps {
  children: React.ReactNode
}

interface ProductStyleProps {
  width: string
}

const ProductStyle = styled.li<ProductStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;

  background-color: ${theme.gray[700]};

  width: ${(props) => props.width};
  height: 23rem;
  border-radius: 1rem;

  .img {
    width: 8rem;
    border-radius: 0.5rem;
  }

  .button {
    display: flex;
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
  }

  .discount {
    margin-bottom: 0.4rem;
    @media screen and (max-width: 450px) {
      margin-bottom: 0.2rem;
    }
  }
`

export function ProductRoot({ children }: ProductRootProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <ProductStyle width={windowWidth <= 450 ? '100%' : '23rem'}>
      {children}
    </ProductStyle>
  )
}
