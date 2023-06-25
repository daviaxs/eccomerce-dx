import styled from 'styled-components'

import { Container } from '@/shared/components/container/Container'
import { THeadingPrimary, TTextPrimary } from '@/shared/fonts/Fonts.style'
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

  .text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
        flexDir="column"
        align="start"
        justifyContent="start"
        width="100%"
        height="100%"
      >
        <THeadingPrimary fontSize={0.8} className="text">
          Samsung Galaxy A14 Dual 128gb 4gb Ram Tela 6.6 4g Câm 50mp
        </THeadingPrimary>

        <Container
          display="flex"
          align="end"
          justifyContent="space-between"
          width="100%"
          height="60%"
        >
          <Container display="flex" flexDir="column" width="" height="">
            <TTextPrimary
              fontSize={0.8}
              txtColor={theme.gray[400]}
              txtDecoration="line-through"
            >
              R$ 1000,00
            </TTextPrimary>
            <THeadingPrimary fontSize={1.5}>R$ 963,00</THeadingPrimary>
          </Container>
        </Container>
      </Container>
    </ProductStyle>
  )
}
