import { FC } from "react"
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
      {toppings.map((topping) => (
        <div key={topping.id} data-id={topping.id}>
          {topping.name}
        </div>
      ))}
    </div>
  )
}
