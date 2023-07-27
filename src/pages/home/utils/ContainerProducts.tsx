import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { ProductsContext } from '@/shared/contexts/ProductsContext'
import { theme } from '@/shared/theme'
import { Skeleton } from '@mui/material'
import { Product } from './Product'
import { CalcDiscout, roundNumber } from './calcDiscount'
import { CartContext } from '@/shared/contexts/CartContext'

interface ProductProps {
  id: string
  title: string
  thumbnail: string
  price: number
  original_price: number
}

const ContainerProductsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  gap: 4rem;
`

const array: number[] = Array.from({ length: 50 }, (_, index) => index + 1)

export function ContainerProducts() {
  const [isLoading, setIsLoading] = useState(true)
  const { products } = useContext(ProductsContext)
  const { addProduct, removeProduct, data } = useContext(CartContext)

  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false)
    }
  }, [products])

  const handleAddProduct = (product: ProductProps) => {
    addProduct(product)
  }

  const handleRemoveProduct = (id: string) => {
    removeProduct(id)
  }

  const cloudinaryId = 'dgaszw6fn'

  function getCloudinaryUrl(imageUrl: string) {
    const escapedUrl = encodeURIComponent(imageUrl)
    return `https://res.cloudinary.com/${cloudinaryId}/image/fetch/${escapedUrl}`
  }

  return (
    <ContainerProductsStyle>
      {isLoading ? (
        <>
          {array.map((_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              width={365}
              height={365}
              style={{ backgroundColor: theme.gray[700], borderRadius: 12 }}
            />
          ))}
        </>
      ) : (
        products.map((e: ProductProps) => (
          <Product.Root key={e.id}>
            <Product.Image img={getCloudinaryUrl(e.thumbnail)} />
            <Product.Content
              price={e.price}
              oldPrice={
                e.original_price
                  ? e.price === e.original_price
                    ? undefined
                    : e.original_price
                  : undefined
              }
              discount={
                e.original_price
                  ? roundNumber(CalcDiscout(e.original_price, e.price))
                  : undefined
              }
              description={e.title}
            />
            <Product.Button
              onClick={
                data.some((itemCart) => itemCart.id === e.id)
                  ? () => handleRemoveProduct(e.id)
                  : () => handleAddProduct(e)
              }
              buttonText={
                data.some((itemCart) => itemCart.id === e.id)
                  ? 'Remover do carrinho'
                  : 'Adicionar ao carrinho'
              }
              buttonColorVariant={
                data.some((itemCart) => itemCart.id === e.id) ? 'red' : 'purple'
              }
            />
          </Product.Root>
        ))
      )}
    </ContainerProductsStyle>
  )
}
