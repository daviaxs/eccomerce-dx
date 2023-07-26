import { theme } from '@/shared/theme'
import { ChevronRight } from 'lucide-react'
import styled from 'styled-components'

interface ButtonCloseProps {
  onClick: () => void
}

const ButtonCloseStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
  background-color: ${theme.green[400]};
  transition: all 0.2s ease-out;

  width: 2.5rem;
  height: 2.5rem;

  position: absolute;
  left: -1.2rem;
  top: 2.8rem;
  z-index: 2;

  &:hover {
    background-color: ${theme.green[500]};
  }
`

export function ButtonClose({ onClick }: ButtonCloseProps) {
  return (
    <ButtonCloseStyle onClick={onClick}>
      <ChevronRight />
    </ButtonCloseStyle>
  )
}
