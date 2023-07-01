import {
  AccordionDetails,
  Accordion as AccordionMui,
  AccordionSummary,
} from '@mui/material'
import { ChevronDown } from 'lucide-react'

import { TTitlePrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

interface AccordionProps {
  label: string
  text: string
}

export function Accordion({ label, text }: AccordionProps) {
  return (
    <AccordionMui className="accordion">
      <AccordionSummary
        expandIcon={<ChevronDown color={theme.gray[50]} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <TTitlePrimary fontSize={1.5}>{label}</TTitlePrimary>
      </AccordionSummary>
      <AccordionDetails>
        <TTitlePrimary fontSize={1.2}>{text}</TTitlePrimary>
      </AccordionDetails>
    </AccordionMui>
  )
}
