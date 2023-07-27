import { X } from 'lucide-react'
import { useContext } from 'react'
import styled from 'styled-components'

import { OptionsIcon } from '@/shared/assets/OptionsIcon'
import { IconButton } from '@/shared/components/iconButton/IconButton'
import { useMenuNavContext } from '@/shared/contexts/MenuNavContext'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { theme } from '@/shared/theme'
import { useLocation } from 'react-router-dom'
import { OpenCartButton } from './OpenCartButton'
import { Search } from './search/Search'

interface HeaderProps {
  openCart: () => void
}

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

export function Header({ openCart }: HeaderProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const { toggleMenuNav, expandedMenu } = useMenuNavContext()
  const currentPage = useLocation()

  return (
    <HeaderStyle>
      <>
        <IconButton
          onClick={toggleMenuNav}
          size={3}
          borderRadius={9999}
          className="icon"
          disabled={expandedMenu}
        >
          {expandedMenu && windowWidth >= 450 ? (
            <X color={theme.gray[100]} size={40} />
          ) : (
            <OptionsIcon color={theme.gray[100]} size={30} />
          )}
        </IconButton>
        <OpenCartButton onClick={openCart} />
        {currentPage.pathname === '/pagina-inicial' && <Search />}
      </>
    </HeaderStyle>
  )
}
