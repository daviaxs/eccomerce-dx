import styled from 'styled-components'
import { Product } from './Product'

const ContainerProductsStyle = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  margin-bottom: 2rem;
  gap: 4rem;
`

export function ContainerProducts() {
  return (
    <ContainerProductsStyle>
      <Product
        key={1}
        img="http://http2.mlstatic.com/D_916456-MLA52626408897_112022-I.jpg"
        price={20}
        description="Teclado Gamer Mecânico Cougar Lakshmi, Rainbow, Switch Blue, ABNT2, 60%, Black, K606R"
      />
      <Product
        key={1}
        img=""
        price={20}
        description="Teclado Gamer Mecânico Cougar Lakshmi, Rainbow, Switch Blue, ABNT2, 60%, Black, K606R"
      />
      <Product
        key={1}
        img=""
        price={20}
        description="Teclado Gamer Mecânico Cougar Lakshmi, Rainbow, Switch Blue, ABNT2, 60%, Black, K606R"
      />
      <Product
        key={1}
        img=""
        price={20}
        description="Teclado Gamer Mecânico Cougar Lakshmi, Rainbow, Switch Blue, ABNT2, 60%, Black, K606R"
      />
      <Product
        key={1}
        img=""
        price={20}
        description="Teclado Gamer Mecânico Cougar Lakshmi, Rainbow, Switch Blue, ABNT2, 60%, Black, K606R"
      />
      <Product
        key={1}
        img=""
        price={20}
        description="Teclado Gamer Mecânico Cougar Lakshmi, Rainbow, Switch Blue, ABNT2, 60%, Black, K606R"
      />
    </ContainerProductsStyle>
  )
}
