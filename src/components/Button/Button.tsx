import { ButtonHTMLAttributes, FC } from "react"
import styles from "./button.module.scss"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export const Button: FC<ButtonProps> = ({ children, ...buttonAttributes }) => {
  return (
    <button {...buttonAttributes} className={styles.button}>
      {children}
    </button>
  )
}
