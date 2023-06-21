interface ISetItem {
  key: string
  value: any
}

export const setItem = ({ key, value }: ISetItem) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const getItem = (key: any) => {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : null
}
