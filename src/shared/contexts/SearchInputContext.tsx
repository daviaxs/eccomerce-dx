import React, { createContext, useContext, useState } from 'react'

interface SearchInputProps {
  inputValue: string
  setInputValue: (value: string) => void
}

interface SearchInputType {
  children: React.ReactNode
}

const SearchInputContext = createContext({} as SearchInputProps)

export const useSearchInputContext = () => {
  return useContext(SearchInputContext)
}

export const SearchInputProvider: React.FC<SearchInputType> = ({
  children,
}) => {
  const [inputValue, setInputValue] = useState('')

  return (
    <SearchInputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchInputContext.Provider>
  )
}
