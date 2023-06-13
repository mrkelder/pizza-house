import { FC } from "react"
import styles from "./button.module.scss"

interface ButtonProps {
  children: string
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className={styles.button}>{children}</button>
}
