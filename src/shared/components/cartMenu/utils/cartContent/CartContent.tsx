import { useContext } from 'react'
import styled from 'styled-components'

import { ShoppingCartEmpty } from '@/shared/assets/ShoppingCartEmpty'
import { Container } from '@/shared/components/container/Container'
import { CartContext } from '@/shared/contexts/CartContext'
import { CartProduct } from './CartProduct'

const CartContentStyle = styled.ul`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  overflow-y: scroll;
  overflow-x: hidden;

  background-color: transparent;

  width: 100%;
  padding: 1rem 0 2rem 0;

  .shoppingCartEmpty {
    transform: scale(0.7);
  }
`

export function CartContent() {
  // eslint-disable-next-line prettier/prettier
  const { data, addProduct, removeProductQuantity, quantity } = useContext(CartContext)

  const cloudinaryId = 'dgaszw6fn'

  function getCloudinaryUrl(imageUrl: string) {
    const escapedUrl = encodeURIComponent(imageUrl)
    return `https://res.cloudinary.com/${cloudinaryId}/image/fetch/${escapedUrl}`
  }

  return (
    <CartContentStyle>
      {data.length > 0 ? (
        data.map((e) => (
          <CartProduct
            key={e.id}
            title={e.title}
            thumbnail={getCloudinaryUrl(e.thumbnail)}
            price={e.price}
            originalPrice={e.original_price ? e.original_price : undefined}
            onClickAdd={() => addProduct(e)}
            onClickRemove={() => removeProductQuantity(e.id)}
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
