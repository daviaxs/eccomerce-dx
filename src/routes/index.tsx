import { Navigate, Route, Routes } from 'react-router-dom'

import { Faq, Home } from '@/pages'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Home />} />
      <Route path="/faq" element={<Faq />} />

      <Route path="*" element={<Navigate to="/pagina-inicial" />} />
    </Routes>
  )
}
