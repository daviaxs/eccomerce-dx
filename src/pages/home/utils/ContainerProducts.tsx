import { Skeleton } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { CartContext } from '@/shared/contexts/CartContext'
import { ProductsContext } from '@/shared/contexts/ProductsContext'
import { theme } from '@/shared/theme'
import { Product } from './Product'
import { CalcDiscout, roundNumber } from './calcDiscount'

interface IProductProps {
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

export function ContainerProducts() {
  const [isLoading, setIsLoading] = useState(true)
  const { products } = useContext(ProductsContext)
  const { addProduct, removeProduct, data } = useContext(CartContext)

  useEffect(() => {
    if (products.length > 0) {
      setIsLoading(false)
    }
  }, [products])

  const handleAddProduct = (product: IProductProps) => {
    addProduct(product)
  }

  const handleRemoveProduct = (id: string) => {
    removeProduct(id)
  }

  return (
    <ContainerProductsStyle>
      {isLoading ? (
        <>
          <Skeleton
            variant="rounded"
            width={365}
            height={365}
            style={{ backgroundColor: theme.gray[700], borderRadius: 12 }}
          />
          <Skeleton
            variant="rounded"
            width={365}
            height={365}
            style={{ backgroundColor: theme.gray[700], borderRadius: 12 }}
          />
          <Skeleton
            variant="rounded"
            width={365}
            height={365}
            style={{ backgroundColor: theme.gray[700], borderRadius: 12 }}
          />
        </>
      ) : (
        products.map((e: IProductProps) => (
          <Product
            key={e.id}
            img={e.thumbnail}
            price={e.price}
            description={e.title}
            buttonColorVariant={
              data.some((itemCart) => itemCart.id === e.id) ? 'red' : 'purple'
            }
            buttonText={
              data.some((itemCart) => itemCart.id === e.id)
                ? 'Remover do carrinho'
                : 'Adicionar ao carrinho'
            }
            onClick={
              data.some((itemCart) => itemCart.id === e.id)
                ? () => handleRemoveProduct(e.id)
                : () => handleAddProduct(e)
            }
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
          />
        ))
      )}
    </ContainerProductsStyle>
  )
}
