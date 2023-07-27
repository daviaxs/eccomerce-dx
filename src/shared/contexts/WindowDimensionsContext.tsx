import React, { createContext, useEffect, useState } from 'react'

interface WindowDimensionsContextProps {
  width: number
  height: number
}

interface WindowDimensionsProviderProps {
  children: React.ReactNode
}

export const WindowDimensionsContext =
  createContext<WindowDimensionsContextProps>(
    {} as WindowDimensionsContextProps,
  )

export const WindowDimensionsProvider: React.FC<
  WindowDimensionsProviderProps
> = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <WindowDimensionsContext.Provider value={windowDimensions}>
      {children}
    </WindowDimensionsContext.Provider>
  )
}
