import {
  AccordionDetails,
  Accordion as AccordionMui,
  AccordionSummary,
} from '@mui/material'
import { ChevronDown } from 'lucide-react'

import { TTitlePrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

export function Accordion() {
  return (
    <AccordionMui className="accordion">
      <AccordionSummary
        expandIcon={<ChevronDown color={theme.gray[50]} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <TTitlePrimary fontSize={1.5}>
          Quais são os métodos de pagamento aceitos?
        </TTitlePrimary>
      </AccordionSummary>
      <AccordionDetails>
        <TTitlePrimary fontSize={1.2}>
          Aceitamos várias formas de pagamento, incluindo cartões de crédito
          (Visa, Mastercard, American Express), PayPal e transferência bancária.
          Escolha a opção que melhor atende às suas necessidades durante o
          processo de compra.
        </TTitlePrimary>
      </AccordionDetails>
    </AccordionMui>
  )
}
