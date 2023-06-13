import { useContext } from 'react'
import styled from 'styled-components'

import LogoDX from '@/shared/assets/logo-page.png'
import { NavButton } from '@/shared/components/navButton/NavButton'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { theme } from '@/shared/theme'

const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 4rem;
  padding: 1.5rem;

  background-color: ${theme.gray[700]};
  border-bottom: 1px solid ${theme.gray[500]};

  .logo {
    position: absolute;
    width: 4rem;
    left: 0;
    margin-left: 1rem;
  }
`

export function Header() {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <HeaderStyle>
      {windowWidth >= 600 && (
        <>
          <img src={LogoDX} alt="Logo DX" className="logo" />
          <NavButton to="/pagina-inicial">Página inicial</NavButton>
          <NavButton to="/faq">FAQ</NavButton>
        </>
      ) : (
        
      )}
    </HeaderStyle>
  )
}
