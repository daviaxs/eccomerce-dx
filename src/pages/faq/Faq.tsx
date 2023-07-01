import { Container } from '@/shared/components/container/Container'
import { LayoutBaseDePagina } from '@/shared/layout'

export function Faq() {
  return (
    <LayoutBaseDePagina>
      <Container
        display="flex"
        align="center"
        justifyContent="start"
        flexDir="column"
        width="100%"
        height="100%"
      ></Container>
    </LayoutBaseDePagina>
  )
}
