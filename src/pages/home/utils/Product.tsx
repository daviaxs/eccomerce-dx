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

  oldPrice?: number
  discount?: number
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
`

export function Product({
  img,
  price,
  description,
  oldPrice,
  discount,
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
        <THeadingPrimary txtColor={theme.gray[50]}>R$ {price}</THeadingPrimary>
        <TTextPrimary fontSize={0.8} txtColor={theme.gray[50]}>
          {description}
        </TTextPrimary>
      </Container>
      <ButtonPrimary
        variant="purple"
        width="90%"
        onClick={() => alert('Hello world')}
        className="button"
      >
        <THeadingPrimary
          fontSize={windowWidth <= 450 ? 1 : 1.5}
          txtColor="white"
        >
          Adicionar ao carrinho
        </THeadingPrimary>
      </ButtonPrimary>
    </ProductStyle>
  )
}
