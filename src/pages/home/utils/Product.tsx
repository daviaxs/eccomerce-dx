interface IProductProps {
  img: string
  price: number
  description: string

  oldPrice?: number
  discount?: number
}

export function Product({
  img,
  price,
  description,
  oldPrice,
  discount,
}: IProductProps) {
  return <></>
}
