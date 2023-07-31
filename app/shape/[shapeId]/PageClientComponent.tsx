"use client"

import { FC } from "react"
import { PizzaToppingsSection } from "@/src/components/PizzaToppingsSection"
import { StringFormatter } from "@/src/lib/StringFormatter"
import { mockToppingsData } from "./mockToppings"
import styles from "./pizzaBuilderPage.module.scss"

import {
  PizzaBuilderCanvas,
  useCanvasData
} from "@/src/components/PizzaBuilderCanvas"

export const PageClientComponent: FC = () => {
  const {} = useCanvasData()

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.stickyCanvasWrapper}>
        <PizzaBuilderCanvas />
      </div>
      <div className={styles.toppings}>
        {mockToppingsData.map(({ name, toppings }) => (
          <PizzaToppingsSection
            key={StringFormatter.getIdSlugFromString(name)}
            name="Meat"
            toppings={toppings}
          />
        ))}
      </div>
    </div>
  )
}
