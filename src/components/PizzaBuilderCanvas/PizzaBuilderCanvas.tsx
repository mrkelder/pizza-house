"use client"

import { FC, useEffect, useRef, useState } from "react"
import { env } from "@/src/lib/env"
import styles from "./pizzaBuilderCanvas.module.scss"

export const PizzaBuilderCanvas: FC = () => {
  // TODO: remember, canvas can be unsupported
  const canvasWrapperRef = useRef<null | HTMLDivElement>(null)
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(false)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)

  useEffect(() => {
    function setCanvasDimensions() {
      if (canvasWrapperRef.current) {
        const { current: canvasWrapper } = canvasWrapperRef
        setCanvasWidth(canvasWrapper.clientWidth)
        setCanvasHeight(canvasWrapper.clientHeight)
        setIsCanvasLoaded(true)
      }
    }

    window.addEventListener("resize", setCanvasDimensions)
    setCanvasDimensions()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  useEffect(() => {
    if (canvasRef.current && isCanvasLoaded) {
      // TODO: ugly code (function has to do 1 thing only)
      const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D
      const pizzaBaseImage = new Image()
      pizzaBaseImage.src = env.hostname + "pizza_builder/base.webp"

      const drawPizzaBase = () => {
        ctx.drawImage(pizzaBaseImage, 0, 0, canvasWidth, canvasHeight)
      }

      pizzaBaseImage.addEventListener("load", drawPizzaBase)

      return () => {
        pizzaBaseImage.removeEventListener("load", drawPizzaBase)
      }
    }
  }, [canvasHeight, canvasWidth, isCanvasLoaded])

  return (
    <div className={styles.canvasWrapper} ref={canvasWrapperRef}>
      <canvas
        width={canvasWidth}
        height={canvasHeight}
        ref={canvasRef}
        style={isCanvasLoaded ? { opacity: 1 } : { opacity: 0 }}
        className={styles.canvas}
      />
    </div>
  )
}
