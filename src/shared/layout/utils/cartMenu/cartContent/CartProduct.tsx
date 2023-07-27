import { Minus, Plus } from 'lucide-react'
import { useContext } from 'react'
import styled from 'styled-components'

import { Container } from '@/shared/components/container/Container'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingPrimary, TTextPrimary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import { ButtonAddAndRemove } from './ButtonAddAndRemove'

interface ProductProps {
  title: string
  thumbnail: string
  price: number
  originalPrice: number | undefined

  counterProduct: number
  onClickAdd: () => void
  onClickRemove: () => void
}

interface IProductStyleProps {
  height: number
}

const ProductStyle = styled.li<IProductStyleProps>`
  display: flex;
  align-items: center;
  justify-content: start;

  gap: 1rem;
  padding: 1rem;
  height: ${(props) => props.height}rem;
  width: 100%;

  border-bottom: 1px solid ${theme.gray[400]};

  .productImage {
    border-radius: 0.5rem;
  }

  .text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .numberCounter {
    margin-bottom: 0.2rem;
  }
`

export function CartProduct({
  originalPrice,
  price,
  thumbnail,
  title,
  counterProduct,
  onClickAdd,
  onClickRemove,
}: ProductProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <ProductStyle height={windowWidth <= 400 ? 10 : 7.5}>
      <img src={thumbnail} className="productImage" alt="" />
      <Container
        display="flex"
        flexDir="column"
        align="start"
        justifyContent="space-between"
        width="100%"
        height="100%"
        gap={windowWidth <= 400 ? 1 : 0}
      >
        <THeadingPrimary fontSize={0.8} className="text">
          {title}
        </THeadingPrimary>

        <Container
          display="flex"
          flexDir={windowWidth <= 400 ? 'column' : 'row'}
          align={windowWidth <= 400 ? 'start' : 'center'}
          justifyContent="space-between"
          width="100%"
          height=""
        >
          <Container display="flex" flexDir="column" width="" height="">
            {originalPrice === undefined ? null : (
              <TTextPrimary
                fontSize={0.8}
                txtColor={theme.gray[400]}
                txtDecoration="line-through"
              >
                {originalPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })}
              </TTextPrimary>
            )}
            <THeadingPrimary fontSize={windowWidth <= 400 ? 1.2 : 1.5}>
              {price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </THeadingPrimary>
          </Container>

          <Container
            display="flex"
            align="center"
            gap={0.5}
            width=""
            height=""
            marginLeft={-0.2}
            className="buttonsCounter"
          >
            <ButtonAddAndRemove variant="default" onClick={onClickRemove}>
              <Minus className="icon iconRemove" />
            </ButtonAddAndRemove>

            <THeadingPrimary fontSize={1} className="numberCounter">
              {counterProduct}
            </THeadingPrimary>

            <ButtonAddAndRemove variant="green" onClick={onClickAdd}>
              <Plus className="icon iconAdd" />
            </ButtonAddAndRemove>
          </Container>
        </Container>
      </Container>
    </ProductStyle>
  )
}
