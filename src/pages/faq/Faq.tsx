import { Container } from '@/shared/components/container/Container'
import { THeadingPrimary } from '@/shared/fonts/Fonts.style'
import { LayoutBaseDePagina } from '@/shared/layout'
import { Accordion } from './utils/Accordion'
import { Accordions } from './utils/Accordions'

export function Faq() {
  return (
    <LayoutBaseDePagina>
      <Container
        display="flex"
        align="center"
        justifyContent="start"
        gap={2}
        flexDir="column"
        width="100%"
        height="100%"
      >
        <THeadingPrimary>FAQ - Perguntas Frequentes</THeadingPrimary>

        <Accordions>
          <Accordion>
        </Accordions>
      </Container>
    </LayoutBaseDePagina>
  )
}
