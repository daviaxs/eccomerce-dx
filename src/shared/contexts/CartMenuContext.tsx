import React, { createContext, useContext } from 'react'

interface ICartMenuContextData {
  expandedCartMenu: boolean
  toggleCartMenu: () => void
}

interface ICartMenuProviderProps {
  children: React.ReactNode
}

const CartMenuContext = createContext({} as ICartMenuContextData)

export const useCartMenuContext = () => {
  return useContext(CartMenuContext)
}

export function CartMenuProvider({ children }: ICartMenuProviderProps) {
  return <>{children}</>
}
