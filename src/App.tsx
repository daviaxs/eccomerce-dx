import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/routes'
import { CartMenuProvider } from '@/shared/contexts/CartMenuContext'
import { WindowDimensionsProvider } from '@/shared/contexts/WindowDimensionsContext'
import { CartProvider } from './shared/contexts/CartContext'
import { MenuNavProvider } from './shared/contexts/MenuNavContext'
import { ProductsProvider } from './shared/contexts/ProductsContext'

export function App() {
  return (
    <WindowDimensionsProvider>
      <CartProvider>
        <ProductsProvider>
          <MenuNavProvider>
            <CartMenuProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </CartMenuProvider>
          </MenuNavProvider>
        </ProductsProvider>
      </CartProvider>
    </WindowDimensionsProvider>
  )
}
