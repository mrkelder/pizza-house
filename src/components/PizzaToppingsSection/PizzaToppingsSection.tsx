import { FC } from "react"
import Image from "next/image"
import { PizzaTopping } from "@/src/lib/PizzaTopping"
import styles from "./pizzaToppingsSection.module.scss"

interface PizzaToppingsSectionProps {
  name: string
  toppings: PizzaTopping[]
}

export const PizzaToppingsSection: FC<PizzaToppingsSectionProps> = ({
  name,
  toppings
}) => {
  return (
    <div className={styles.section}>
      <b>{name}</b>
      <div className={styles.toppingsList}>
        {toppings.map((topping) => (
          <div className={styles.topping} key={topping.id}>
            <Image
              src={topping.img}
              width={40}
              height={40}
              alt={topping.name}
            />
            <p>{topping.name}</p>
            <p>+ ${topping.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
