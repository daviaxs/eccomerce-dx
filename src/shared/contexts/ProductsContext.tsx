import React, { createContext } from 'react'

interface IProductProps {
  id: string
  title: string
  thubnail: string
  price: number
  original_price: number
}

interface IProductsContext {
  products: IProductProps[]
}

type ProductsProviderProps = {
  children: React.ReactNode
}

export const ProductsContext = createContext<IProductsContext>(
  {} as IProductsContext,
)

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  return <>{children}</>
}
