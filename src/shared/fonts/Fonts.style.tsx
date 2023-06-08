import React from 'react'
import styled from 'styled-components'

interface ITextProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  txtColor?: string
  txtShadow?: string
  fontSize?: number
  textAlign?: 'start' | 'center' | 'end'
  display?: 'flex' | 'none'
  className?: string
  whiteSpace?: 'nowrap' | 'normal'
  children: React.ReactNode
}

const THeadingPrimaryStyle = styled.h1<ITextProps>`
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  text-align: ${(props) => props.textAlign};
  line-height: 100%;

  color: ${(props) => props.txtColor};
  text-shadow: ${(props) => props.txtShadow};
`

const THeadingSecondaryStyle = styled.h2<ITextProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  text-align: ${(props) => props.textAlign};
  line-height: 100%;

  color: ${(props) => props.txtColor};
  text-shadow: ${(props) => props.txtShadow};
`

const TTitlePrimaryStyle = styled.strong<ITextProps>`
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: ${(props) => props.fontSize}rem;
  white-space: ${(props) => props.whiteSpace};
  text-align: ${(props) => props.textAlign};
  line-height: 100%;

  color: ${(props) => props.txtColor};
  text-shadow: ${(props) => props.txtShadow};
`

export const THeadingPrimary: React.FC<ITextProps> = ({
  txtColor,
  className,
  txtShadow,
  textAlign,
  whiteSpace = 'normal',
  fontSize = 2,
  display,
  children,
}) => {
  return (
    <THeadingPrimaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      fontSize={fontSize}
      className={className}
      display={display}
    >
      {children}
    </THeadingPrimaryStyle>
  )
}

export const THeadingSecondary: React.FC<ITextProps> = ({
  txtColor,
  className,
  txtShadow,
  textAlign,
  whiteSpace = 'normal',
  fontSize = 2,
  display,
  children,
}) => {
  return (
    <THeadingSecondaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      fontSize={fontSize}
      className={className}
      display={display}
    >
      {children}
    </THeadingSecondaryStyle>
  )
}

export const TTitlePrimary: React.FC<ITextProps> = ({
  txtColor,
  className,
  txtShadow,
  textAlign,
  whiteSpace = 'normal',
  fontSize = 2,
  display,
  children,
}) => {
  return (
    <TTitlePrimaryStyle
      txtColor={txtColor}
      txtShadow={txtShadow}
      textAlign={textAlign}
      whiteSpace={whiteSpace}
      fontSize={fontSize}
      className={className}
      display={display}
    >
      {children}
    </TTitlePrimaryStyle>
  )
}
