import { theme } from '@/shared/theme'
import styled from 'styled-components'

const ProductStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: start;

  padding: 1rem;
  width: 100%;

  border-bottom: 1px solid ${theme.gray[400]};

  .productImage {
    border-radius: 0.5rem;
  }
`

export function CartProduct() {
  return (
    <ProductStyle>
      <img
        src="http://http2.mlstatic.com/D_865221-MLU69233686783_052023-I.jpg"
        className="productImage"
        alt=""
      />
    </ProductStyle>
  )
}
