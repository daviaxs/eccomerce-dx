import { ChevronLeft, ShoppingCart } from 'lucide-react'
import styled from 'styled-components'

import { THeadingSecondary } from '@/shared/fonts/Fonts.style'
import { useCartLength } from '@/shared/services/CartLength'
import { theme } from '@/shared/theme'

interface OpenCartButtonProps {
  onClick: () => void
}

const OpenCartButtonStyle = styled.button`
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

  .alert {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 1rem;
    height: 1rem;

    background-color: ${theme.red[400]};
    outline: 2px solid ${theme.gray[500]};
    border-radius: 9999px;

    position: absolute;
    top: 0.5rem;
    right: 0.6rem;

    .alertText {
      position: relative;
      left: -0.02rem;
    }
  }

  .arrowIcon {
    position: absolute;
    left: 0.5rem;
  }

  &:hover .arrowIcon {
    animation: position backwards ease-in 0.5s;

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

export function OpenCartButton({ onClick }: OpenCartButtonProps) {
  const cartLength = useCartLength()

  return (
    <OpenCartButtonStyle className="OpenCartButton" onClick={onClick}>
      <ChevronLeft color={theme.gray[100]} className="arrowIcon" />
      {cartLength > 0 && (
        <span className="alert">
          <THeadingSecondary
            txtColor="white"
            fontSize={0.7}
            className="alertText"
          >
            {cartLength > 9 ? '9+' : cartLength}
          </THeadingSecondary>
        </span>
      )}
      <ShoppingCart color={theme.gray[100]} />
    </OpenCartButtonStyle>
  )
}
