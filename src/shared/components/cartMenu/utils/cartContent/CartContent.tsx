import { getItem } from '@/shared/services/LocalStorageFuncs'
import { useState } from 'react'
import styled from 'styled-components'
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

  background-color: transparent;

  width: 100%;
  height: 75%;
  margin-top: 3.5rem;
  padding: 1rem 0 2rem 0;
`

export function CartContent() {
  const [data, setData] = useState(getItem('shopCart') || [])

  return (
    <CartContentStyle>
      {data.map((e: IProductProps) => (
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
      ))}
    </CartContentStyle>
  )
}
