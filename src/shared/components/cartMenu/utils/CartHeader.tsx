import { useCartMenuContext } from '@/shared/contexts/CartMenuContext'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { TTextPrimary } from '@/shared/fonts/Fonts.style'
import { useCartLength } from '@/shared/services/CartLength'
import { theme } from '@/shared/theme'
import { X } from 'lucide-react'
import { useContext } from 'react'
import styled from 'styled-components'

const CartHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 3.5rem;

  background-color: ${theme.gray[600]};
  border-bottom: 1px solid ${theme.gray[400]};
  padding: 1.5rem;

  position: fixed;

  .closeButton {
    cursor: pointer;
  }
`

export function CartHeader() {
  const { toggleCartMenu } = useCartMenuContext()
  const cartLength = useCartLength()
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  function getCartText(cartLength: number) {
    if (cartLength === 0) {
      return <span>Seu carrinho está vazio.</span>
    } else if (cartLength === 1) {
      return (
        <span>
          Seu carrinho tem <strong>1 item!</strong>
        </span>
      )
    } else {
      return <span>Seu carrinho tem {cartLength} itens!</span>
    }
  }

  return (
    <CartHeaderStyle>
      <TTextPrimary fontSize={1}>{getCartText(cartLength)}</TTextPrimary>
      {windowWidth <= 450 && (
        <X size={30} className="closeButton" onClick={toggleCartMenu} />
      )}
    </CartHeaderStyle>
  )
}
