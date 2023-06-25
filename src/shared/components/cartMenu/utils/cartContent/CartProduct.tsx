import styled from 'styled-components'

import { Container } from '@/shared/components/container/Container'
import { THeadingPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

const ProductStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 1rem;
  padding: 1rem;
  height: 7.5rem;
  width: 100%;

  border-bottom: 1px solid ${theme.gray[400]};

  .productImage {
    border-radius: 0.5rem;
  }
`

export function CartProduct() {
  return (
    <ProductStyle>
      <img
        src="http://http2.mlstatic.com/D_865221-MLU69233686783_052023-I.jpg"
        className="productImage"
        alt=""
      />
      <Container
        display="flex"
        align="start"
        justifyContent="start"
        width="100%"
        height="100%"
      >
        <THeadingPrimary fontSize={0.8}>
          Samsung Galaxy A14 Dual 128gb 4gb Ram Tela 6.6 4g Câm 50mp
        </THeadingPrimary>
      </Container>
    </ProductStyle>
  )
}
