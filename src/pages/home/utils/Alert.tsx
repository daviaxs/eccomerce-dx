import { XCircle } from 'lucide-react'
import { useContext } from 'react'
import styled from 'styled-components'

import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingPrimary, TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

const AlertStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 16rem;
  width: 100%;

  gap: 2rem;
  padding: 1rem;

  background-color: ${theme.gray[500]};
  border-radius: 0.5rem;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`

const TextContainer = styled.ol`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
`

const TextsSuggestions = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export function Alert() {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  const getHeadingTextSize = () => {
    if (windowWidth >= 0 && windowWidth <= 600) {
      return 0.8
    } else if (windowWidth > 600 && windowWidth < 900) {
      return 1
    } else {
      return 1.5
    }
  }

  return (
    <AlertStyle>
      <XCircle size={110} color={theme.gray[200]} />
      <TextContainer>
        <THeadingPrimary fontSize={getHeadingTextSize()}>
          Não há anúncios que correspondam à sua busca
        </THeadingPrimary>
        <TextsSuggestions>
          <TTextPrimary
            txtColor={theme.gray[100]}
            fontSize={windowWidth > 650 ? 1 : 0.8}
          >
            • Revise a ortografia da palavra.
          </TTextPrimary>
          <TTextPrimary
            txtColor={theme.gray[100]}
            fontSize={windowWidth > 650 ? 1 : 0.8}
          >
            • Utilize palavras mais genéricas ou menos palavras.
          </TTextPrimary>
        </TextsSuggestions>
      </TextContainer>
    </AlertStyle>
  )
}
