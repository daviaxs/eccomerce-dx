import React, { createContext, useCallback, useContext, useState } from 'react'

interface MenuNavContextData {
  expandedMenu: boolean
  toggleMenuNav: () => void
}

interface MenuNavProviderProps {
  children: React.ReactNode
}

const MenuNavContext = createContext({} as MenuNavContextData)

export const useMenuNavContext = () => {
  return useContext(MenuNavContext)
}

export const MenuNavProvider: React.FC<MenuNavProviderProps> = ({
  children,
}) => {
  const [expandedMenu, setExpandedMenu] = useState(false)

  const toggleMenuNav = useCallback(() => {
    const newExpandedMenu = !expandedMenu
    setExpandedMenu(newExpandedMenu)
  }, [expandedMenu])

  return (
    <MenuNavContext.Provider value={{ toggleMenuNav, expandedMenu }}>
      {children}
    </MenuNavContext.Provider>
  )
}
