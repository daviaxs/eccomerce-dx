import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { apiBaseUrl } from '@/shared/api/api'
import { getItem, setItem } from '@/shared/services/LocalStorageFuncs'
import { theme } from '@/shared/theme'
import { Skeleton } from '@mui/material'
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
  const [data, setData] = useState([])
  const [cart, setCart] = useState<IProductProps[]>(getItem('shopCart') || [])

  useEffect(() => {
    const fetchApi = async () => {
      setIsLoading(true)
      const response = await fetch(apiBaseUrl)
      const objJson = await response.json()
      setData(objJson.results)
      setIsLoading(false)
    }
    fetchApi()
  }, [])

  const handleClick = (obj: IProductProps) => {
    const element = cart.find((e) => e.id === obj.id)

    if (element) {
      const arrFilter = cart.filter((e) => e.id !== obj.id)
      setCart(arrFilter)
      setItem({ key: 'shopCart', value: arrFilter })

      const event = new CustomEvent('cartChange', { detail: arrFilter })
      window.dispatchEvent(event)
    } else {
      setCart([...cart, obj])
      setItem({ key: 'shopCart', value: [...cart, obj] })

      const event = new CustomEvent('cartChange', { detail: [...cart, obj] })
      window.dispatchEvent(event)
    }
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
              cart.some((itemCart) => itemCart.id === e.id) ? 'red' : 'purple'
            }
            buttonText={
              cart.some((itemCart) => itemCart.id === e.id)
                ? 'Remover do carrinho'
                : 'Adicionar ao carrinho'
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
