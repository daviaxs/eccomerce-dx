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
          <Accordion
            label="1 • Quais são os métodos de pagamento aceitos?"
            text="Aceitamos várias formas de pagamento, incluindo cartões de crédito (Visa, Mastercard, American Express), PayPal e transferência bancária. Escolha a opção que melhor atende às suas necessidades durante o processo de compra."
          />

          <Accordion
            label="2 • Qual é a política de garantia dos produtos?"
            text="Todos os produtos em nosso site estão cobertos pela garantia do fabricante, que pode variar de acordo com o produto e a marca. Além disso, oferecemos uma garantia de satisfação, que permite a devolução do produto dentro de um prazo determinado caso você não esteja completamente satisfeito. Consulte nossa página de Garantia e Devolução para obter mais informações."
          />

          <Accordion
            label="3 • Vocês oferecem frete grátis?"
            text="Sim, oferecemos frete grátis para pedidos acima de um determinado valor. O valor mínimo para frete grátis pode variar dependendo da sua localização. Durante o processo de compra, você poderá visualizar se o seu pedido atende aos requisitos para frete grátis."
          />

          <Accordion
            label="4 • Quanto tempo leva para meu pedido ser entregue?"
            text="O prazo de entrega pode variar dependendo da sua localização e da opção de envio escolhida. Geralmente, processamos e despachamos os pedidos dentro de 1 a 2 dias úteis. O prazo de entrega estimado será informado durante o processo de compra, levando em consideração a sua localização e a opção de envio selecionada."
          />

          <Accordion
            label="5 • Posso acompanhar o status do meu pedido?"
            text="Sim, você poderá acompanhar o status do seu pedido através da sua conta em nosso site. Assim que o pedido for despachado, você receberá um código de rastreamento que permitirá acompanhar a entrega do seu produto."
          />

          <Accordion
            label="6 • O que devo fazer se receber um produto com defeito ou danificado?"
            text="Se você receber um produto com defeito ou danificado, entre em contato conosco imediatamente. Nossa equipe de suporte ao cliente terá prazer em ajudar a resolver o problema. Providenciaremos a substituição do produto ou ofereceremos uma solução adequada para garantir sua total satisfação."
          />

          <Accordion
            label="7 • Vocês realizam envios internacionais?"
            text="Sim, realizamos envios internacionais para a maioria dos países. Durante o processo de compra, verifique se a sua localização está disponível para envio."
          />

          <Accordion
            label="8 • Como posso entrar em contato com o suporte ao cliente?"
            text="Você pode entrar em contato com o nosso suporte ao cliente por meio do formulário de contato em nosso site ou pelo nosso endereço de e-mail de suporte. Nossa equipe estará pronta para responder a todas as suas perguntas e auxiliá-lo da melhor maneira possível."
          />
        </Accordions>
      </Container>
    </LayoutBaseDePagina>
  )
}
