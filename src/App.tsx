import { BrowserRouter } from 'react-router-dom'

import { AppRoutes } from '@/routes'
import { CartMenuProvider } from './shared/contexts/CartMenuContext'
import { WindowDimensionsProvider } from './shared/contexts/WindowDimensionsContext'

export function App() {
  return (
    <WindowDimensionsProvider>
      <CartMenuProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CartMenuProvider>
    </WindowDimensionsProvider>
  )
}
