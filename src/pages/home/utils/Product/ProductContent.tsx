import { useContext } from 'react'

import { Container } from '@/shared/components/container/Container'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingPrimary, TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

interface ProductContentProps {
  price: number
  description: string

  oldPrice?: number | undefined
  discount?: number | undefined
}

export function ProductContent({
  price,
  description,
  oldPrice,
  discount,
}: ProductContentProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <Container
      display="flex"
      flexDir="column"
      align="start"
      justifyContent="center"
      gap={1}
      width="100%"
      height=""
      marginBottom={1}
      marginTop={1}
    >
      <Container
        display="flex"
        flexDir="column"
        gap={0.2}
        width="100%"
        height=""
      >
        {oldPrice === undefined ? null : (
          <TTextPrimary
            fontSize={1}
            txtColor={theme.gray[400]}
            txtDecoration="line-through"
          >
            {oldPrice.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </TTextPrimary>
        )}

        <Container display="flex" width="" height="" gap={0.2} align="end">
          <THeadingPrimary
            txtColor={theme.gray[50]}
            fontSize={windowWidth <= 450 ? 1.5 : 2}
          >
            {price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </THeadingPrimary>
          {oldPrice === undefined ? null : (
            <TTextPrimary
              fontSize={0.75}
              txtColor={theme.green[400]}
              className="discount"
            >
              {discount}% OFF
            </TTextPrimary>
          )}
        </Container>
      </Container>

      <TTextPrimary fontSize={0.8} txtColor={theme.gray[50]}>
        {description}
      </TTextPrimary>
    </Container>
  )
}
