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
import { ToppingObject } from "@/src/lib/PizzaTopping"

export const PageClientComponent: FC = () => {
  const { canvasObjects, replaceLayer } = useCanvasData()

  const allToppingObjects = mockToppingsData.reduce(
    (prev, current) => [...prev, ...current.toppings],
    [] as ToppingObject[]
  )

  const selectToppingLayer = (layerIndex: number) => (toppingId: string) => {
    const toppingObject = allToppingObjects.find(
      ({ id }) => id === toppingId
    ) as ToppingObject
    replaceLayer(layerIndex, toppingObject)
  }

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.stickyCanvasWrapper}>
        <PizzaBuilderCanvas canvasObjects={canvasObjects} />
      </div>
      <div className={styles.toppings}>
        {mockToppingsData.map(({ name, toppings }, index) => (
          <PizzaToppingsSection
            key={StringFormatter.getIdSlugFromString(name)}
            name={name}
            toppings={toppings}
            onSelect={selectToppingLayer(index)}
          />
        ))}
      </div>
    </div>
  )
}
