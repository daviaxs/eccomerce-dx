import { TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import styled from 'styled-components'

const CartHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;

  width: 100%;
  height: 3.5rem;

  background-color: ${theme.gray[600]};
  padding: 1.5rem;
`

export function CartHeader() {
  return (
    <CartHeaderStyle>
      <TTextPrimary fontSize={1}>
        Seu carrinho tem <strong>4 itens!</strong>
      </TTextPrimary>
    </CartHeaderStyle>
  )
}
