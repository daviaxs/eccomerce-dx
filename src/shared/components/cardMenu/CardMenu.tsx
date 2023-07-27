import React, { useCallback, useContext, useEffect, useState } from 'react'
import styled from 'styled-components'

import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { theme } from '@/shared/theme'
import { ButtonClose } from './utils/ButtonClose'
import { CardHeader } from './utils/CardHeader'

interface CardMenuProps {
  label: React.ReactNode | string
  expanded: boolean
  children: React.ReactNode
  closeCard: () => void
}

const CardMenuBG = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;

  &.open {
    animation: bgIn 0.3s forwards ease-out;
  }

  &.close {
    animation: bgOut 0.3s forwards ease-out;
  }

  @keyframes bgIn {
    0% {
      background-color: rgba(0, 0, 0, 0);
    }
    100% {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }

  @keyframes bgOut {
    0% {
      opacity: 1;
    }
    100% {
      background-color: rgba(0, 0, 0, 0);
      visibility: hidden;
    }
  }
`

const CardMenuStyle = styled.div<{ width: string }>`
  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;

  background-color: ${theme.gray[500]};
  box-shadow: -11px 0px 56px #000;
  height: 100vh;
  width: ${(props) => props.width};

  &.open {
    animation: menuAnimationIn 0.3s forwards ease-out;
  }

  &.close {
    animation: menuAnimationOut 0.3s forwards ease-out;
  }

  @keyframes menuAnimationIn {
    0% {
      right: -26rem;
    }
    100% {
      right: 0;
    }
  }

  @keyframes menuAnimationOut {
    0% {
      right: 0;
    }
    100% {
      right: -26rem;
    }
  }
`

export function CardMenu({
  label,
  children,
  expanded,
  closeCard,
}: CardMenuProps) {
  const [shouldRenderCardMenu, setShouldRenderCardMenu] = useState(expanded)
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  useEffect(
    () => (expanded ? setShouldRenderCardMenu(true) : undefined),
    [expanded],
  )

  const handleAnimationEnd = useCallback(
    () => (!expanded ? setShouldRenderCardMenu(false) : null),
    [expanded],
  )

  return shouldRenderCardMenu ? (
    <CardMenuBG
      className={expanded ? 'open' : 'close'}
      onAnimationEnd={handleAnimationEnd}
    >
      <CardMenuStyle
        width={windowWidth > 450 ? '26rem' : '100vw'}
        className={expanded ? 'open' : 'close'}
      >
        {windowWidth > 450 && <ButtonClose onClick={closeCard} />}
        <CardHeader label={label} closeCard={closeCard} />
        {children}
      </CardMenuStyle>
    </CardMenuBG>
  ) : null
}
