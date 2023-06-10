import styled from 'styled-components'

import { theme } from '@/shared/theme'

interface IProductProps {
  img: string
  price: number
  description: string

  oldPrice?: number
  discount?: number
}

const ProductStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${theme.gray[700]};

  width: 23rem;
  height: 23rem;
  border-radius: 1rem;
`

export function Product({
  img,
  price,
  description,
  oldPrice,
  discount,
}: IProductProps) {
  return <ProductStyle></ProductStyle>
}
