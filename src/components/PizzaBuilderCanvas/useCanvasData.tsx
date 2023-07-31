"use client"

import { ToppingObject } from "@/src/lib/PizzaTopping"
import { useState } from "react"

export const useCanvasData = () => {
  const [canvasObjects, setCanvasObjects] = useState<ToppingObject[]>([])

  const addLayer = (topping: ToppingObject) => {
    setCanvasObjects((prevData) => [...prevData, topping])
  }

  const replaceLayer = (index: number, newTopping: ToppingObject) => {
    setCanvasObjects((prevData) =>
      prevData.map((prevObject, objectIndex) =>
        index === objectIndex ? newTopping : prevObject
      )
    )
  }

  return { canvasObjects, addLayer, replaceLayer }
}
