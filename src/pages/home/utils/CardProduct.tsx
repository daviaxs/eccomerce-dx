import styled from 'styled-components'
import { Product } from './Product'

const ProductsContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  gap: 4rem;
`

export function CardProduct() {
  return (
    <ProductsContainer>
      <Product key={1} img="" price={20} description="" />
      <Product key={1} img="" price={20} description="" />
      <Product key={1} img="" price={20} description="" />
      <Product key={1} img="" price={20} description="" />
      <Product key={1} img="" price={20} description="" />
      <Product key={1} img="" price={20} description="" />
    </ProductsContainer>
  )
}
