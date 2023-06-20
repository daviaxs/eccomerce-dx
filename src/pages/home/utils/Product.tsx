import styled from 'styled-components'

import { ButtonPrimary } from '@/shared/components/buttons/ButtonPrimary'
import { Container } from '@/shared/components/container/Container'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingPrimary, TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import { useContext } from 'react'

interface IProductProps {
  img: string
  price: number
  description: string

  oldPrice?: number | undefined
  discount?: number | undefined

  buttonColorVariant: 'green' | 'purple' | 'red'
  buttonText: string
  onClick: () => void
}

interface IProductStyleProps {
  width: string
}

const ProductStyle = styled.li<IProductStyleProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;

  background-color: ${theme.gray[700]};

  width: ${(props) => props.width};
  height: 23rem;
  border-radius: 1rem;

  .img {
    width: 8rem;
    border-radius: 0.5rem;
  }

  .button {
    display: flex;
    position: absolute;
    bottom: 0;
    margin-bottom: 1rem;
  }

  .discount {
    margin-bottom: 0.4rem;
    @media screen and (max-width: 450px) {
      margin-bottom: 0.2rem;
    }
  }
`

export function Product({
  img,
  price,
  description,
  oldPrice,
  discount,
  buttonColorVariant: buttonVariant = 'purple',
  buttonText,
  onClick,
}: IProductProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <ProductStyle width={windowWidth <= 450 ? '100%' : '23rem'}>
      <img src={img} alt="" className="img" />
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

      <ButtonPrimary
        variant={buttonVariant}
        width="90%"
        onClick={onClick}
        className="button"
      >
        <THeadingPrimary
          fontSize={windowWidth <= 450 ? 1 : 1.5}
          txtColor="white"
        >
          {buttonText}
        </THeadingPrimary>
      </ButtonPrimary>
    </ProductStyle>
  )
}
