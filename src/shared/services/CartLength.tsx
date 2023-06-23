import { useEffect, useState } from 'react'
import { getItem } from './LocalStorageFuncs'

export function useCartLength() {
  const [dataCart, setDataCart] = useState(getItem('shopCart'))
  const [cartLength, setCartLength] = useState(0)

  useEffect(() => {
    const handleCartChange = (event: any) => {
      setDataCart(event.detail)
    }

    window.addEventListener('cartChange', handleCartChange)

    return () => {
      window.removeEventListener('cartChange', handleCartChange)
    }
  }, [])

  useEffect(() => {
    setCartLength(dataCart.length)
  }, [dataCart])

  return cartLength
}
