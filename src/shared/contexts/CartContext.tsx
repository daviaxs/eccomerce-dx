import React, { createContext, useState } from 'react'

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
  const shopCart = localStorage.getItem('shopCart')
  const quantityCart = localStorage.getItem('quantity')

  const [data, setData] = useState(shopCart ? JSON.parse(shopCart) : [])
  const [quantity, setQuantity] = useState(
    quantityCart ? JSON.parse(quantityCart) : {},
  )

  return <>{children}</>
}
