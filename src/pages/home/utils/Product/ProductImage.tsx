interface ImageProps {
  img: string
}

export function ProductImage({ img }: ImageProps) {
  return <img src={img} alt="" className="img" />
}
