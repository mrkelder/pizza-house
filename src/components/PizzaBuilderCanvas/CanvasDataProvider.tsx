"use client"

import { FC, ReactNode, createContext, useState } from "react"
import { ToppingObject } from "@/src/lib/PizzaTopping"

interface CanvasDataProviderProps {
  children: ReactNode
}

interface CanvasDataContext {
  data: ToppingObject[]
  addLayer: (index: number, topping: ToppingObject) => void
  replaceLayer: (index: number, topping: ToppingObject) => void
}

export const canvasDataContext = createContext<CanvasDataContext | null>(null)

export const CanvasDataProvider: FC<CanvasDataProviderProps> = ({
  children
}) => {
  const [canvasObjects, setCanvasObjects] = useState<ToppingObject[]>([])

  const addLayer = (index: number, topping: ToppingObject) => {}

  const replaceLayer = (index: number, topping: ToppingObject) => {}

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
