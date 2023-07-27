interface SetItemProps {
  key: string
  value: any
}

export const setItem = ({ key, value }: SetItemProps) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: string) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}
