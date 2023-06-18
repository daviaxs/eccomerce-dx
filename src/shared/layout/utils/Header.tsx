import { ArrowLeft } from 'lucide-react'
import { useContext } from 'react'
import styled from 'styled-components'

import { OptionsIcon } from '@/shared/assets/OptionsIcon'
import LogoDX from '@/shared/assets/logo-page.png'
import { IconButton } from '@/shared/components/iconButton/IconButton'
import { NavButton } from '@/shared/components/navButton/NavButton'
import { useMenuNavContext } from '@/shared/contexts/MenuNavContext'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { THeadingSecondary } from '@/shared/fonts/Fonts.style'
import { theme } from '@/shared/theme'
import { OpenCartButton } from './OpenCartButton'

const HeaderStyle = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 100%;
  height: 4rem;
  padding: 2rem;

  background-color: ${theme.gray[700]};
  border-bottom: 1px solid ${theme.gray[500]};
  z-index: 2;

  .logo {
    position: absolute;
    width: 4rem;
    left: 0;
    margin-left: 1rem;
  }

  .OpenCartButton {
    position: absolute;
    right: 0;
  }

  .icon {
    position: absolute;
    left: 0;
    margin-left: 1rem;
  }
`

export function Header() {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { toggleMenuNav, expandedMenu } = useMenuNavContext()

  return (
    <HeaderStyle>
      {windowWidth >= 600 ? (
        <>
          <img src={LogoDX} alt="Logo DX" className="logo" />
          <NavButton to="/pagina-inicial">Página inicial</NavButton>
          <NavButton to="/faq">FAQ</NavButton>
          <OpenCartButton />
        </>
      ) : (
        <>
          {expandedMenu && (
            <THeadingSecondary fontSize={1.5} txtColor={theme.gray[100]}>
              Navegar
            </THeadingSecondary>
          )}
          {!expandedMenu && <OpenCartButton />}
          <IconButton
            onClick={toggleMenuNav}
            borderRadius={9999}
            size={2.9}
            className="icon"
          >
            {expandedMenu ? (
              <ArrowLeft color={theme.gray[100]} size={30} />
            ) : (
              <OptionsIcon color={theme.gray[100]} size={30} />
            )}
          </IconButton>
        </>
      )}
    </HeaderStyle>
  )
}
