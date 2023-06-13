interface IIconProps {
  size: number
  color: string
}

export function OptionsIcon({ color = 'white', size }: IIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 35 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1.5H33M2 15H33M2 28.5H33"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
