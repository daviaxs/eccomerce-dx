import { useEffect, useState } from 'react'
import styled from 'styled-components'

import { apiBaseUrl } from '@/shared/api/api'
import { theme } from '@/shared/theme'
import { Skeleton } from '@mui/material'
import { Product } from './Product'

interface IProductProps {
  id: string
  title: string
  thumbnail: string
  price: number
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

  return (
    <ContainerProductsStyle>
      {isLoading ? (
        <>
          <Skeleton
            variant="rounded"
            width={320}
            height={320}
            style={{ backgroundColor: theme.gray[700], borderRadius: 12 }}
          />
          <Skeleton
            variant="rounded"
            width={320}
            height={320}
            style={{ backgroundColor: theme.gray[700], borderRadius: 12 }}
          />
          <Skeleton
            variant="rounded"
            width={320}
            height={320}
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
            oldPrice={1500}
          />
        ))
      )}
    </ContainerProductsStyle>
  )
}
