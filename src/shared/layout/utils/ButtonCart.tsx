import { theme } from '@/shared/theme'
import { ChevronLeft, ShoppingCart } from 'lucide-react'
import styled from 'styled-components'

const ButtonCartStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: end;
  height: 70%;
  width: 5rem;

  border-radius: 2rem 0px 0px 2rem;
  border: none;

  gap: 0.5rem;
  padding: 0 1rem;

  background-color: ${theme.gray[500]};
  cursor: pointer;

  .arrowIcon {
    position: absolute;
    left: 0.5rem;
  }

  &:hover .arrowIcon {
    animation: position infinite ease-in 0.8s;

    @keyframes position {
      0% {
        left: 0.5rem;
      }
      50% {
        left: 0;
      }
      100% {
        left: 0.5rem;
      }
    }
  }
`

export function ButtonCart() {
  return (
    <ButtonCartStyle className="buttonCart">
      <ChevronLeft color={theme.gray[100]} className="arrowIcon" />
      <ShoppingCart color={theme.gray[100]} />
    </ButtonCartStyle>
  )
}
