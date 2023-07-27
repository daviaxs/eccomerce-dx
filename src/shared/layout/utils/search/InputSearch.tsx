import { ChangeEventHandler, FocusEventHandler, useContext } from 'react'

import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { theme } from '@/shared/theme'

interface InputSearchProps {
  localInputValue: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onFocus: FocusEventHandler<HTMLInputElement>
  onBlur: FocusEventHandler<HTMLInputElement>
  isFocused: boolean
}

export function InputSearch({
  onChange,
  localInputValue,
  onBlur,
  onFocus,
  isFocused,
}: InputSearchProps) {
  const { width: windowWidth } = useContext(WindowDimensionsContext)

  return (
    <input
      type="text"
      name="search"
      onChange={onChange}
      value={localInputValue}
      className="search"
      placeholder={
        windowWidth >= 870
          ? 'Busque por produtos, marcas e muito mais...'
          : 'Buscar'
      }
      onFocus={onFocus}
      onBlur={onBlur}
      style={
        isFocused
          ? {
              borderTop: `2px solid ${theme.gray[200]}`,
              borderLeft: `2px solid ${theme.gray[200]}`,
              borderRight: `1px solid ${theme.gray[200]}`,
              borderBottom: `2px solid ${theme.gray[200]}`,
            }
          : {}
      }
    />
  )
}
