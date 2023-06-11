import styled from 'styled-components'

import { ButtonPrimary } from '@/shared/components/buttons/ButtonPrimary'
import { Container } from '@/shared/components/container/Container'
import { THeadingPrimary, TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'

interface IProductProps {
  img: string
  price: number
  description: string

  oldPrice?: number
  discount?: number
}

const ProductStyle = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 1rem;

  background-color: ${theme.gray[700]};

  width: 23rem;
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
  return (
    <ProductStyle>
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
        <THeadingPrimary fontSize={1.5} txtColor="white">
          Adicionar ao carrinho
        </THeadingPrimary>
      </ButtonPrimary>
    </ProductStyle>
  )
}
