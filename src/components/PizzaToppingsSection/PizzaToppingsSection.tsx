"use client"

import { FC, useState } from "react"
import Image from "next/image"
import { ToppingObject } from "@/src/lib/PizzaTopping"
import styles from "./pizzaToppingsSection.module.scss"

interface PizzaToppingsSectionProps {
  name: string
  toppings: ToppingObject[]
}

const DEFAULT_TOPPING_INDEX = 0

export const PizzaToppingsSection: FC<PizzaToppingsSectionProps> = ({
  name,
  toppings
}) => {
  const [selectedToppingId, setSelectedToppingId] = useState(
    toppings[DEFAULT_TOPPING_INDEX].id
  )

  const onLabelInputChange = (id: string) => () => setSelectedToppingId(id)

  return (
    <div className={styles.section}>
      <b>{name}</b>
      <div className={styles.toppingsList}>
        {toppings.map((topping) => (
          <label
            htmlFor={`topping_${topping.id}`}
            className={styles.topping}
            key={topping.id}
          >
            <Image
              src={topping.img}
              width={40}
              height={40}
              alt={topping.name}
            />
            <p>{topping.name}</p>
            <p>+ ${topping.price}</p>
            <input
              onChange={onLabelInputChange(topping.id)}
              type="radio"
              id={`topping_${topping.id}`}
              name={`topping_section_${name}`}
              checked={selectedToppingId === topping.id}
            />
          </label>
        ))}
      </div>
    </div>
  )
}

PizzaToppingsSection.defaultProps = {
  name: "Category",
  toppings: []
}
