import { TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import styled from 'styled-components'

interface ButtonClearCartProps {
  onClick: () => void
}

const ButtonClearCartStyle = styled.button`
  color: ${theme.gray[200]};
  text-decoration-line: underline;
  cursor: pointer;

  background-color: transparent;
  border: none;

  &:hover {
    color: ${theme.gray[100]};
  }
`

export function ButtonClearCart({ onClick }: ButtonClearCartProps) {
  return (
    <ButtonClearCartStyle onClick={onClick}>
      <TTextPrimary>Limpar carrinho</TTextPrimary>
    </ButtonClearCartStyle>
  )
}
