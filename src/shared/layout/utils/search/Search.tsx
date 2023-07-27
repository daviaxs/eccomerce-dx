import { ChangeEvent, useContext, useEffect, useState } from 'react'

import { SearchIcon } from '@/shared/assets/SearchIcon'
import { useSearchInputContext } from '@/shared/contexts/SearchInputContext'
import { WindowDimensionsContext } from '@/shared/contexts/WindowDimensionsContext'
import { InputSearch } from '@/shared/layout/utils/search/InputSearch'
import { theme } from '@/shared/theme'
import { X } from 'lucide-react'
import { ButtonSubmitSeachStyle, SearchStyle } from './Search.styles'

export function Search() {
  const { width: windowWidth } = useContext(WindowDimensionsContext)
  const [isFocused, setIsFocused] = useState(false)
  const [localInputValue, setLocalInputValue] = useState('')
  const { setInputValue } = useSearchInputContext()

  const handleFocus = () => {
    setIsFocused(true)
  }

  const handleBlur = () => {
    setIsFocused(false)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLocalInputValue(event.target.value)
  }

  const handleSearchClick = () => {
    setInputValue(localInputValue)
  }

  const clearInputSearch = () => {
    setLocalInputValue('')
  }

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        setInputValue(localInputValue)
      }
    }
    window.addEventListener('keydown', keyDownHandler)

    return () => {
      window.removeEventListener('keydown', keyDownHandler)
    }
  }, [localInputValue, setInputValue])

  return (
    <SearchStyle>
      <InputSearch
        localInputValue={localInputValue}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        isFocused={isFocused}
      />
      {localInputValue.length > 0 && windowWidth >= 470 && (
        <X
          className="clearInput"
          color={theme.gray[300]}
          onClick={clearInputSearch}
        />
      )}
      <ButtonSubmitSeachStyle
        onClick={handleSearchClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={
          isFocused
            ? {
                borderTop: `2px solid ${theme.gray[200]}`,
                borderLeft: `0px solid ${theme.gray[200]}`,
                borderRight: `2px solid ${theme.gray[200]}`,
                borderBottom: `2px solid ${theme.gray[200]}`,
              }
            : {}
        }
      >
        <SearchIcon color={theme.gray[300]} size={24} />
      </ButtonSubmitSeachStyle>
    </SearchStyle>
  )
}
