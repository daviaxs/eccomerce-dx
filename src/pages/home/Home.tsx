import { Container } from '@/shared/components/container/Container'
import { THeadingPrimary, TTitlePrimary } from '@/shared/fonts/Fonts.style'
import { LayoutBaseDePagina } from '@/shared/layout/LayoutBaseDePagina'
import { theme } from '@/shared/theme'

export function Home() {
  return (
    <LayoutBaseDePagina>
      <Container display="flex" flexDir="column" gap={1} height="" width="">
        <THeadingPrimary txtColor={theme.gray[50]}>
          Bem-vindo ao nosso incrível mundo de tecnologia móvel!
        </THeadingPrimary>
        <TTitlePrimary txtColor={theme.gray[200]} fontSize={1.2}>
          Explore nosso site agora e descubra uma infinidade de recursos,
          ofertas irresistíveis e a conveniência de fazer suas compras online.
          Não se contente com menos do que você merece.
        </TTitlePrimary>
      </Container>
    </LayoutBaseDePagina>
  )
}
