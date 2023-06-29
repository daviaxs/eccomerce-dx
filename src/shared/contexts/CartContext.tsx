import React, { createContext, useState } from 'react'
import { setItem } from '../services/LocalStorageFuncs'

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

  const addProduct = (product: IProductProps) => {
    const element = data.find((e: IProductProps) => e.id === product.id)

    if (element) {
      const newData = data.find((e: IProductProps) => e.id !== product.id)
      setData(newData)
      setItem({ key: 'shopCart', value: newData })

      const newQuantity = { ...quantity }
      delete newQuantity[product.id]
      setQuantity(newQuantity)
      setItem({ key: 'quantity', value: newQuantity })

      const event = new CustomEvent('cartChange', { detail: newData })
      window.dispatchEvent(event)
    } else {
      setData([...data, product])
      setItem({ key: 'shopCart', value: [...data, product] })

      const newQuantity = { ...quantity, [product.id]: 1 }
      setQuantity(newQuantity)
      setItem({ key: 'quantity', value: newQuantity })

      const event = new CustomEvent('cartChange', {
        detail: [...data, product],
      })
      window.dispatchEvent(event)
    }
  }

  return <>{children}</>
}
