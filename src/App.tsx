import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/routes'
import { CartMenuProvider } from '@/shared/contexts/CartMenuContext'
import { WindowDimensionsProvider } from '@/shared/contexts/WindowDimensionsContext'
import { MenuNavProvider } from './shared/contexts/MenuNavContext'

export function App() {
  return (
    <WindowDimensionsProvider>
      <MenuNavProvider>
        <CartMenuProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CartMenuProvider>
      </MenuNavProvider>
    </WindowDimensionsProvider>
  )
}
