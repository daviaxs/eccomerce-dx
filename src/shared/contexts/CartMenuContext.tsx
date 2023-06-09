import React, { createContext, useCallback, useContext, useState } from 'react'

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
  const [expandedCartMenu, setExpandedCartMenu] = useState(false)

  const toggleCartMenu = useCallback(() => {
    const newExpandedCartMenu = !expandedCartMenu
    setExpandedCartMenu(newExpandedCartMenu)
  }, [expandedCartMenu])

  return (
    <CartMenuContext.Provider value={{ toggleCartMenu, expandedCartMenu }}>
      {children}
    </CartMenuContext.Provider>
  )
}
