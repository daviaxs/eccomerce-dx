import styled from 'styled-components'
import { CartProduct } from './CartProduct'

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
      <CartProduct />
    </CartContentStyle>
  )
}
