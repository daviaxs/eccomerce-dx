import { useCartMenuContext } from '@/shared/contexts/CartMenuContext'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { theme } from '@/shared/theme'
import { useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ButtonClose } from './utils/ButtonClose'
import { CartFooter } from './utils/CartFooter'
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

const CartMenuStyle = styled.div<{ width: string }>`
  position: fixed;
  right: 0;

  background-color: ${theme.gray[500]};
  box-shadow: -11px 0px 56px #000;
  height: 100%;
  width: ${(props) => props.width};

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
  const { width: windowWidth } = useContext(WindowDimensionsContext)

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

  return (
    <CartMenuBG
      className={expandedCartMenu ? 'open' : 'close'}
      onAnimationEnd={handleAnimationEnd}
    >
      <CartMenuStyle
        width={windowWidth > 450 ? '26rem' : '100vw'}
        className={expandedCartMenu ? 'open' : 'close'}
      >
        {windowWidth > 450 && <ButtonClose onClick={toggleCartMenu} />}
        <CartHeader />
        <CartFooter />
      </CartMenuStyle>
    </CartMenuBG>
  )
}
