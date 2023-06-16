import { useCartMenuContext } from '@/shared/contexts/CartMenuContext'
import { theme } from '@/shared/theme'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const CartMenuBG = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;

  &.open {
    animation: bgIn 0.3s forwards ease-out;
  }

  &.close {
    animation: bgOut 0.3s forwards ease-out;
  }

  @keyframes bgIn {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  @keyframes bgOut {
    0% {
      opacity: 1;
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
      visibility: hidden;
    }
  }
`

const CartMenuStyle = styled.div`
  position: fixed;
  right: 0;

  background-color: ${theme.gray[500]};
  height: 100%;
  width: 26rem;
`

export function CartMenu() {
  const { expandedCartMenu } = useCartMenuContext()
  // eslint-disable-next-line prettier/prettier
  const [shouldRenderCartMenu, setShouldRenderCartMenu] = useState(expandedCartMenu)

  useEffect(() => {
    expandedCartMenu ?? setShouldRenderCartMenu(true)
  }, [expandedCartMenu])

  const handleAnimationEnd = useCallback(() => {
    !expandedCartMenu ?? setShouldRenderCartMenu(false)
  }, [expandedCartMenu])

  // if (!shouldRenderCartMenu) {
  //   return null
  // }

  return (
    <CartMenuBG
      className={expandedCartMenu ? 'open' : 'close'}
      onAnimationEnd={handleAnimationEnd}
    >
      <CartMenuStyle
        className={expandedCartMenu ? 'open' : 'close'}
      ></CartMenuStyle>
    </CartMenuBG>
  )
}
