import { useContext } from 'react'
import { ButtonPrimary } from '@/shared/components/buttons/ButtonPrimary'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingPrimary } from '@/shared/fonts/Fonts.style'

interface ProductButtonProps {
  buttonColorVariant: 'green' | 'purple' | 'red'
  buttonText: string
  onClick: () => void
}

export function ProductButton({
  buttonColorVariant = 'purple',
  buttonText,
  onClick,
}: ProductButtonProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <ButtonPrimary
      variant={buttonColorVariant}
      width="90%"
      onClick={onClick}
      className="button"
    >
      <THeadingPrimary fontSize={windowWidth <= 450 ? 1 : 1.5} txtColor="white">
        {buttonText}
      </THeadingPrimary>
    </ButtonPrimary>
  )
}
