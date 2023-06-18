import { theme } from '@/shared/theme'
import { ChevronRight } from 'lucide-react'
import styled from 'styled-components'

interface IButtonCloseProps {
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

  width: 2.5rem;
  height: 2.5rem;

  position: absolute;
  left: -1.2rem;
  top: 2.8rem;
  z-index: 2;
`

export function ButtonClose({ onClick }: IButtonCloseProps) {
  return (
    <ButtonCloseStyle onClick={onClick}>
      <ChevronRight />
    </ButtonCloseStyle>
  )
}
