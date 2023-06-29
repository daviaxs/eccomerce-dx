import React, { createContext } from 'react'

interface IProductProps {
  id: string
  title: string
  thumbnail: string
  price: number
  original_price: number
}

interface ICartContext {
  data: IProductProps[]
  quantity: { [key: string]: number }
  addProduct: (product: IProductProps) => void
  removeProduct: (id: string) => void
}

type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext<ICartContext>({} as ICartContext)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  return <>{children}</>
}
