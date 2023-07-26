import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { TTitlePrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import { X } from 'lucide-react'
import React, { useContext } from 'react'
import styled from 'styled-components'

interface CardHeaderProps {
  label: React.ReactNode | 'string'
  closeCard: () => void
}

const CardHeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 3.5rem;

  background-color: ${theme.gray[600]};
  border-bottom: 1px solid ${theme.gray[400]};
  padding: 1.5rem;

  .closeButton {
    cursor: pointer;
  }
`

export function CardHeader({ closeCard, label }: CardHeaderProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <CardHeaderStyle>
      <TTitlePrimary fontSize={1}>{label}</TTitlePrimary>
      {windowWidth <= 450 && (
        <X size={30} className="closeButton" onClick={closeCard} />
      )}
    </CardHeaderStyle>
  )
}
