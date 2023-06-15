import { theme } from '@/shared/theme'
import { ChevronLeft, ShoppingCart } from 'lucide-react'
import styled from 'styled-components'

const ButtonCartStyle = styled.button`
  display: flex;
  align-items: center;
  height: 70%;

  border-radius: 2rem 0px 0px 2rem;
  border: none;

  gap: 0.5rem;
  padding: 0 1rem;

  background-color: ${theme.gray[500]};
`

export function ButtonCart() {
  return (
    <ButtonCartStyle className="buttonCart">
      <ChevronLeft color={theme.gray[100]} />
      <ShoppingCart color={theme.gray[100]} />
    </ButtonCartStyle>
  )
}
