import { useContext } from 'react'
import styled from 'styled-components'

import { ShoppingCartEmpty } from '@/shared/assets/ShoppingCartEmpty'
import { Container } from '@/shared/components/container/Container'
import { CartContext } from '@/shared/contexts/CartContext'
import { CartProduct } from './CartProduct'

const CartContentStyle = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  overflow-y: scroll;
  overflow-x: hidden;

  background-color: transparent;

  width: 100%;
  height: 75%;
  margin-top: 3.5rem;
  padding: 1rem 0 2rem 0;

  .shoppingCartEmpty {
    transform: scale(0.7);
  }
`

export function CartContent() {
  const { data, addProduct, removeQuantity, quantity } = useContext(CartContext)

  return (
    <CartContentStyle>
      {data.length > 0 ? (
        data.map((e) => (
          <CartProduct
            key={e.id}
            title={e.title}
            thumbnail={e.thumbnail}
            price={e.price}
            originalPrice={e.original_price ? e.original_price : undefined}
            onClickAdd={() => addProduct(e)}
            onClickRemove={() => removeQuantity(e.id)}
            counterProduct={quantity[e.id] || 1}
          />
        ))
      ) : (
        <Container
          display="flex"
          align="center"
          justifyContent="center"
          width="100%"
          height="100%"
        >
          <ShoppingCartEmpty />
        </Container>
      )}
    </CartContentStyle>
  )
}
