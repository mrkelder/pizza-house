"use client"

import { FC, ReactNode, createContext, useState } from "react"
import { ToppingObject } from "@/src/lib/PizzaTopping"

interface CanvasDataProviderProps {
  children: ReactNode
}

interface CanvasDataContext {
  data: ToppingObject[]
  addLayer: (topping: ToppingObject) => void
  replaceLayer: (index: number, topping: ToppingObject) => void
}

export const canvasDataContext = createContext<CanvasDataContext | null>(null)

export const CanvasDataProvider: FC<CanvasDataProviderProps> = ({
  children
}) => {
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

  return (
    <canvasDataContext.Provider
      value={{
        data: canvasObjects,
        addLayer,
        replaceLayer
      }}
    >
      {children}
    </canvasDataContext.Provider>
  )
}
