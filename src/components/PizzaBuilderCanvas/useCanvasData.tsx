"use client"

import { ToppingObject } from "@/src/lib/PizzaTopping"
import { useState } from "react"

export const useCanvasData = () => {
  const [canvasObjects, setCanvasObjects] = useState<
    (ToppingObject | undefined)[]
  >([])

  const replaceLayer = (index: number, newTopping: ToppingObject) => {
    setCanvasObjects((prevData) => {
      const prevDataCopy = Array.from(prevData)
      prevDataCopy[index] = newTopping
      return prevDataCopy
    })
  }

  return { canvasObjects, replaceLayer }
}
