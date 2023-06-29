import { Skeleton } from '@mui/material'
import { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { CartContext } from '@/shared/contexts/CartContext'
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
  const { data, addProduct } = useContext(CartContext)

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(false)
    }
  }, [data])

  const handleClick = (obj: IProductProps) => {
    addProduct(obj)
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
        data.map((e: IProductProps) => (
          <Product
            key={e.id}
            img={e.thumbnail}
            price={e.price}
            description={e.title}
            buttonColorVariant={
              data.some((itemCart) => itemCart.id === e.id) ? 'purple' : 'red'
            }
            buttonText={
              data.some((itemCart) => itemCart.id === e.id)
                ? 'Adicionar ao carrinho'
                : 'Remover do carrinho'
            }
            onClick={() => handleClick(e)}
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
