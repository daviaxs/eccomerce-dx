import { useCartMenuContext } from '@/shared/contexts/CartMenuContext'
import { THeadingSecondary } from '@/shared/fonts/Fonts.style'
import { getItem } from '@/shared/services/LocalStorageFuncs'
import { theme } from '@/shared/theme'
import { ChevronLeft, ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

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
    border-radius: 9999px;

    position: absolute;
    top: 0.5rem;
    right: 0.6rem;

    .alertText {
      position: relative;
      left: -0.04rem;
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

export function OpenCartButton() {
  const { toggleCartMenu } = useCartMenuContext()
  const [dataCart, setDataCart] = useState(getItem('shopCart'))
  const [cartLength, setCartLength] = useState(0)

  useEffect(() => {
    const handleCartChange = (event: any) => {
      setDataCart(event.detail)
    }

    window.addEventListener('cartChange', handleCartChange)

    return () => {
      window.removeEventListener('cartChange', handleCartChange)
    }
  }, [])

  useEffect(() => {
    setCartLength(dataCart.length)
  }, [dataCart.length])

  return (
    <OpenCartButtonStyle className="OpenCartButton" onClick={toggleCartMenu}>
      <ChevronLeft color={theme.gray[100]} className="arrowIcon" />
      <span className="alert">
        <THeadingSecondary
          txtColor="white"
          fontSize={0.7}
          className="alertText"
        >
          {cartLength}
        </THeadingSecondary>
      </span>
      <ShoppingCart color={theme.gray[100]} />
    </OpenCartButtonStyle>
  )
}
