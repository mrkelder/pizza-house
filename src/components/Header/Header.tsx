import { FC } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "react-feather"
import styles from "./header.module.scss"

export const Header: FC = () => {
  return (
    <header>
      <div className={styles.headerContainer}>
        <div className={styles.logo}>
          <Image src="/logo.png" fill alt="pizza slice" />
        </div>
        <Link href="/cart" className={styles.cartLink}>
          <ShoppingCart className={styles.cartIcon} />
        </Link>
      </div>
    </header>
  )
}
