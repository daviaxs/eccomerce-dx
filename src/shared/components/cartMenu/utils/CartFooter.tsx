import { THeadingPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import styled from 'styled-components'
import { ButtonPrimary } from '../../buttons/ButtonPrimary'
import { Container } from '../../container/Container'

const CartFooterStyle = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  background-color: ${theme.gray[800]};
  padding: 1rem 1rem 5rem;
  width: 100%;
  height: 10rem;

  position: relative;

  .button {
    position: absolute;
    bottom: 0.5rem;
  }
`

export function CartFooter() {
  return (
    <CartFooterStyle className="footer">
      <Container
        display="flex"
        justifyContent="space-between"
        width="100%"
        height=""
        className="a"
      >
        <THeadingPrimary fontSize={1}>Total:</THeadingPrimary>
        <THeadingPrimary fontSize={2}>R$ 325,90</THeadingPrimary>
      </Container>
      <ButtonPrimary
        variant="green"
        width="90%"
        onClick={() => alert('hello world')}
        className="button"
      >
        <THeadingPrimary txtColor="white" fontSize={1.5}>
          Concluir compra
        </THeadingPrimary>
      </ButtonPrimary>
    </CartFooterStyle>
  )
}
