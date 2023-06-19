import { Button } from "@/src/components/Button"
import { FC } from "react"
import Image from "next/image"
import styles from "./pizzaShape.module.scss"

interface PizzaShapeProps {
  title: string
  image: string
  id: string
}

export const PizzaShape: FC<PizzaShapeProps> = ({ image, title, id }) => {
  return (
    <div className={styles.base}>
      <Image
        src={image}
        width={150}
        height={150}
        alt={title}
        className={styles.image}
      />
      <b className={styles.title}>{title}</b>
      <Button href={`/shape/${id}`}>Select</Button>
    </div>
  )
}
