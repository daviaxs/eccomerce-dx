import { useCartMenuContext } from '@/shared/contexts/CartMenuContext'
import { TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import { X } from 'lucide-react'
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

  return (
    <CartHeaderStyle>
      <TTextPrimary fontSize={1}>
        Seu carrinho tem <strong>4 itens!</strong>
      </TTextPrimary>
      <X size={30} className="closeButton" onClick={toggleCartMenu} />
    </CartHeaderStyle>
  )
}
