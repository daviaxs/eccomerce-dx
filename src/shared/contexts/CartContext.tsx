import React, { createContext, useState } from 'react'
import { setItem } from '../services/LocalStorageFuncs'

interface ProductProps {
  id: string
  title: string
  thumbnail: string
  price: number
  original_price: number
}

interface CartContextProps {
  data: ProductProps[]
  quantity: { [key: string]: number }
  addProduct: (product: ProductProps) => void
  removeProduct: (id: string) => void
  removeProductQuantity: (id: string) => void
  clearCart: () => void
}

type CartProviderProps = {
  children: React.ReactNode
}

export const CartContext = createContext<CartContextProps>(
  {} as CartContextProps,
)

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const shopCart = localStorage.getItem('shopCart')
  const quantityCart = localStorage.getItem('quantity')

  const [data, setData] = useState(shopCart ? JSON.parse(shopCart) : [])
  const [quantity, setQuantity] = useState(
    quantityCart ? JSON.parse(quantityCart) : 1,
  )

  const addProduct = (product: ProductProps) => {
    const productInCart = data.find((e: ProductProps) => e.id === product.id)

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
    const newData = data.filter((e: ProductProps) => e.id !== id)
    setData(newData)
    setItem({ key: 'shopCart', value: newData })

    const newQuantity = { ...quantity }
    delete newQuantity[id]
    setQuantity(newQuantity)
    setItem({ key: 'quantity', value: newQuantity })

    const event = new CustomEvent('cartChange', { detail: newData })
    window.dispatchEvent(event)
  }

  const removeProductQuantity = (id: string) => {
    if (quantity[id] === 1) {
      removeProduct(id)
    } else {
      const newQuantity = { ...quantity, [id]: quantity[id] - 1 }
      setQuantity(newQuantity)
      setItem({ key: 'quantity', value: newQuantity })

      const event = new CustomEvent('cartChange', { detail: data })
      window.dispatchEvent(event)
    }
  }

  const clearCart = () => {
    setData([])
    setQuantity({})
    localStorage.removeItem('shopCart')
    localStorage.removeItem('quantity')
  }

  return (
    <CartContext.Provider
      value={{
        data,
        addProduct,
        quantity,
        removeProduct,
        removeProductQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
