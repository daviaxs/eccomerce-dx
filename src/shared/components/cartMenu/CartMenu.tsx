import { useCartMenuContext } from '@/shared/contexts/CartMenuContext'
import { theme } from '@/shared/theme'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ButtonClose } from './utils/ButtonClose'
import { CartHeader } from './utils/CartHeader'

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

  &.open {
    animation: menuAnimationIn 0.3s forwards ease-out;
  }

  &.close {
    animation: menuAnimationOut 0.3s forwards ease-out;
  }

  @keyframes menuAnimationIn {
    0% {
      right: -26rem;
    }
    100% {
      right: 0;
    }
  }

  @keyframes menuAnimationOut {
    0% {
      right: 0;
    }
    100% {
      right: -26rem;
    }
  }
`

export function CartMenu() {
  const { expandedCartMenu, toggleCartMenu } = useCartMenuContext()
  // eslint-disable-next-line prettier/prettier
  const [shouldRenderCartMenu, setShouldRenderCartMenu] = useState(expandedCartMenu)

  useEffect(
    () => (expandedCartMenu ? setShouldRenderCartMenu(true) : undefined),
    [expandedCartMenu],
  )

  const handleAnimationEnd = useCallback(
    () => (!expandedCartMenu ? setShouldRenderCartMenu(false) : null),
    [expandedCartMenu],
  )

  if (!shouldRenderCartMenu) {
    return null
  }

  console.log(expandedCartMenu)

  return (
    <CartMenuBG
      className={expandedCartMenu ? 'open' : 'close'}
      onAnimationEnd={handleAnimationEnd}
    >
      <CartMenuStyle className={expandedCartMenu ? 'open' : 'close'}>
        <ButtonClose onClick={toggleCartMenu} />
        <CartHeader />
      </CartMenuStyle>
    </CartMenuBG>
  )
}
