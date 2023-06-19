import { ButtonHTMLAttributes, FC } from "react"
import Link from "next/link"
import styles from "./button.module.scss"

interface DefaultButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
  href?: undefined
}

interface LinkButtonProps {
  children: string
  href?: string
}

type ButtonProps = DefaultButtonProps | LinkButtonProps

export const Button: FC<ButtonProps> = ({
  children,
  href,
  ...buttonAttributes
}) => {
  return href ? (
    <Link href={href} className={styles.button}>
      {children}
    </Link>
  ) : (
    <button {...buttonAttributes} className={styles.button}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  children: "Text",
  href: undefined
}
