import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/routes'
import { CartProvider } from '@/shared/contexts/CartContext'
import { MenuNavProvider } from '@/shared/contexts/MenuNavContext'
import { ProductsProvider } from '@/shared/contexts/ProductsContext'
import { SearchInputProvider } from '@/shared/contexts/SearchInputContext'
import { WindowDimensionsProvider } from '@/shared/contexts/WindowDimensionsContext'

export function App() {
  return (
    <WindowDimensionsProvider>
      <CartProvider>
        <SearchInputProvider>
          <ProductsProvider>
            <MenuNavProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </MenuNavProvider>
          </ProductsProvider>
        </SearchInputProvider>
      </CartProvider>
    </WindowDimensionsProvider>
  )
}
