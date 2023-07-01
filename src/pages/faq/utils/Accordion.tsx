import {
  AccordionDetails,
  Accordion as AccordionMui,
  AccordionSummary,
} from '@mui/material'
import { ChevronDown } from 'lucide-react'
import { useContext } from 'react'

import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { TTitlePrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

interface AccordionProps {
  label: string
  text: string
}

export function Accordion({ label, text }: AccordionProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <AccordionMui className="accordion">
      <AccordionSummary
        expandIcon={<ChevronDown color={theme.gray[50]} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <TTitlePrimary fontSize={windowWidth <= 600 ? 1 : 1.5}>
          {label}
        </TTitlePrimary>
      </AccordionSummary>
      <AccordionDetails>
        <TTitlePrimary fontSize={windowWidth <= 600 ? 0.8 : 1.2}>
          {text}
        </TTitlePrimary>
      </AccordionDetails>
    </AccordionMui>
  )
}
