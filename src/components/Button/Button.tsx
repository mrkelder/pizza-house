import { FC } from "react"

interface ButtonProps {
  children: string
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
}
