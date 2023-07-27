import React, { createContext, useEffect, useState } from 'react'
import { apiBaseUrl } from '../api/api'
import { useSearchInputContext } from './SearchInputContext'

interface ProductProps {
  id: string
  title: string
  thumbnail: string
  price: number
  original_price: number
}

interface ProductsContextProps {
  products: ProductProps[]
}

type ProductsProviderProps = {
  children: React.ReactNode
}

export const ProductsContext = createContext<ProductsContextProps>(
  {} as ProductsContextProps,
)

export const ProductsProvider: React.FC<ProductsProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductProps[]>([])
  const { inputValue } = useSearchInputContext()

  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch(
        `${apiBaseUrl}${inputValue.length > 0 ? inputValue : 'em alta'}`,
      )
      const objJson = await response.json()
      setProducts(objJson.results)
    }
    fetchApi()
  }, [inputValue])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}
