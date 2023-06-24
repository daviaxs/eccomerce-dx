import { THeadingPrimary } from '@/shared/fonts/Fonts.style'
import styled from 'styled-components'

const CartContentStyle = styled.ul`
  display: flex;
  align-items: start;
  justify-content: start;

  background-color: transparent;

  width: 100%;
  height: 75%;
  margin-top: 3.5rem;
  padding: 2rem 0;
`

export function CartContent() {
  return (
    <CartContentStyle>
      <THeadingPrimary txtColor="white">hello world</THeadingPrimary>
    </CartContentStyle>
  )
}
