import { useCartMenuContext } from '@/shared/contexts/CartMenuContext'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

const CartMenuBG = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #00000038;
  z-index: 10;
`

const CartMenuStyle = styled.div``

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

  return (
    <CartMenuBG>
      <CartMenuStyle></CartMenuStyle>
    </CartMenuBG>
  )
}
