import { useContext, useMemo } from 'react'
import { CartContext } from '../contexts/CartContext'

export function useCartLength() {
  const { data } = useContext(CartContext)

  const cartLength = useMemo(() => data?.length || 0, [data])

  return cartLength
}
