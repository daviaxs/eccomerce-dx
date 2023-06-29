import React, { createContext, useEffect, useState } from 'react'
import { apiBaseUrl } from '../api/api'

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
  const [products, setProducts] = useState<IProductProps[]>([])

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(apiBaseUrl)
      const objJson = await response.json()
      setProducts(objJson.results)
    }
    fetchApi()
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
