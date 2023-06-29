import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/CartContext'

export function useCartLength() {
  const { data } = useContext(CartContext)
  const [cartLength, setCartLength] = useState(0)

  useEffect(() => {
    setCartLength(data.length)
  }, [data])

  return cartLength
}
