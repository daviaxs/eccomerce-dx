import { useState } from 'react'
import styled from 'styled-components'

import { ShoppingCartEmpty } from '@/shared/assets/ShoppingCartEmpty'
import { Container } from '@/shared/components/container/Container'
import { getItem } from '@/shared/services/LocalStorageFuncs'
import { CartProduct } from './CartProduct'

interface IProductProps {
  id: string
  title: string
  thumbnail: string
  price: number
  original_price: number

  counterProduct: string
}

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
  const [data, setData] = useState(getItem('shopCart') || [])

  return (
    <CartContentStyle>
      {data.length > 0 ? (
        data.map((e: IProductProps) => (
          <CartProduct
            key={e.id}
            title={e.title}
            thumbnail={e.thumbnail}
            price={e.price}
            originalPrice={e.original_price ? e.original_price : undefined}
            onClickAdd={() => alert('hello world')}
            onClickRemove={() => alert('hello world')}
            counterProduct=""
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
