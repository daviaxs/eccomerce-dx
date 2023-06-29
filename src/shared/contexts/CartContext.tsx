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
  removeQuantity: (id: string) => void
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
    quantityCart ? JSON.parse(quantityCart) : 1,
  )

  const addProduct = (product: IProductProps) => {
    const productInCart = data.find((e: IProductProps) => e.id === product.id)

    if (productInCart) {
      const newQuantity = {
        ...quantity,
        [product.id]: quantity[product.id] + 1,
      }
      setQuantity(newQuantity)
      setItem({ key: 'quantity', value: newQuantity })
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

  const removeProduct = (id: string) => {
    const newData = data.filter((e: IProductProps) => e.id !== id)
    setData(newData)
    setItem({ key: 'shopCart', value: newData })

    const newQuantity = { ...quantity }
    delete newQuantity[id]
    setQuantity(newQuantity)
    setItem({ key: 'quantity', value: newQuantity })

    const event = new CustomEvent('cartChange', { detail: newData })
    window.dispatchEvent(event)
  }

  const removeQuantity = (id: string) => {
    const newQuantity = { ...quantity, [id]: quantity[id] - 1 }
    setQuantity(newQuantity)
    setItem({ key: 'quantity', value: newQuantity })

    const event = new CustomEvent('cartChange', { detail: data })
    window.dispatchEvent(event)
  }

  return (
    <CartContext.Provider
      value={{ data, addProduct, quantity, removeProduct, removeQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
