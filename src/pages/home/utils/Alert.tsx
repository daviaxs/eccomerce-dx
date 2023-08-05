import { THeadingPrimary, TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import { XCircle } from 'lucide-react'
import styled from 'styled-components'

const AlertStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 16rem;
  width: 80%;

  gap: 2rem;
  padding: 1rem;

  background-color: ${theme.gray[500]};
  border-radius: 0.5rem;

  @media screen and (max-width: 950px) {
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
  return (
    <AlertStyle>
      <XCircle size={110} color={theme.gray[200]} />
      <TextContainer>
        <THeadingPrimary fontSize={1.5}>
          Não há anúncios que correspondam à sua busca
        </THeadingPrimary>
        <TextsSuggestions>
          <TTextPrimary txtColor={theme.gray[100]}>
            • Revise a ortografia da palavra.
          </TTextPrimary>
          <TTextPrimary txtColor={theme.gray[100]}>
            • Utilize palavras mais genéricas ou menos palavras.
          </TTextPrimary>
        </TextsSuggestions>
      </TextContainer>
    </AlertStyle>
  )
}
