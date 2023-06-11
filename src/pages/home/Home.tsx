import styled from 'styled-components'

import { ContainerProducts } from '@/pages/home/utils/ContainerProducts'
import { Container } from '@/shared/components/container/Container'
import { THeadingPrimary, TTitlePrimary } from '@/shared/fonts/Fonts.style'
import { LayoutBaseDePagina } from '@/shared/layout/LayoutBaseDePagina'
import { theme } from '@/shared/theme'

const Separator = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  margin-bottom: 2rem;
`

const LineStyle = styled.span`
  background-color: ${theme.gray[600]};
  width: 100%;
  height: 0.2rem;
`

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
        <Separator>
          <LineStyle />
          <THeadingPrimary txtColor={theme.gray[600]} fontSize={1.3}>
            Produtos
          </THeadingPrimary>
          <LineStyle />
        </Separator>
      </Container>
      <Container
        display="flex"
        align="start"
        justifyContent="center"
        width="100%"
        height=""
      >
        <ContainerProducts />
      </Container>
    </LayoutBaseDePagina>
  )
}
