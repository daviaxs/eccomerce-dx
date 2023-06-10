import styled from 'styled-components'
import { Product } from './Product'

const ProductsContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
