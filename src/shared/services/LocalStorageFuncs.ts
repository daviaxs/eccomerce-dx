interface ISetItem {
  key: string
  value: string
}

export const setItem = ({ key, value }: ISetItem) => {
  localStorage.setItem(key, JSON.stringify(value))
}
