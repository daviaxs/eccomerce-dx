import styled from 'styled-components'

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export function CardProduct() {
  return <ProductsContainer></ProductsContainer>
}
