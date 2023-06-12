import { apiBaseUrl } from '@/shared/api/api'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Product } from './Product'

const ContainerProductsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  gap: 4rem;
`

export function ContainerProducts() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(apiBaseUrl)
      const objJson = await response.json()
      console.log(objJson)
      setData(objJson.results)
    }
    fetchApi()
  }, [])

  return (
    <ContainerProductsStyle>
      {data.map((e) => (
        <Product
          key={e.id}
          img={e.thumbnail}
          price={e.price}
          description={e.title}
        />
      ))}
    </ContainerProductsStyle>
  )
}
