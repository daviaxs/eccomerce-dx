import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { ShoppingCartEmpty } from '@/shared/assets/ShoppingCartEmpty'
import { Container } from '@/shared/components/container/Container'
import { setItem } from '@/shared/services/LocalStorageFuncs'
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
  const shopCart = localStorage.getItem('shopCart')
  const [data, setData] = useState(shopCart ? JSON.parse(shopCart) : [])

  const quantityCart = localStorage.getItem('quantity')
  const [quantity, setQuantity] = useState(
    quantityCart ? JSON.parse(quantityCart) : {},
  )

  const handleAdd = (id: string) => {
    setQuantity({
      ...quantity,
      [id]: quantity[id] ? quantity[id] + 1 : 2,
    })
  }

  const handleRemove = (id: string) => {
    if (quantity[id] === 1) {
      setData((prevData: IProductProps[]) => {
        const newData = prevData.filter((e: IProductProps) => e.id !== id)

        if (newData) {
          setItem({ key: 'shopCart', value: newData })
        }

        return newData
      })

      setQuantity((prevQuantity: any) => {
        const newQuantity = { ...prevQuantity }
        delete newQuantity[id]
        return newQuantity
      })
    } else {
      setQuantity({
        ...quantity,
        [id]: quantity[id] - 1,
      })
    }
  }

  useEffect(() => {
    if (Object.keys(quantity.length > 0)) {
      setItem({ key: 'quantity', value: quantity })
    }
  }, [quantity])

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
            onClickAdd={() => handleAdd(e.id)}
            onClickRemove={() => handleRemove(e.id)}
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
