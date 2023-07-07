"use client"

import { FC, useEffect, useRef, useState } from "react"
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
      const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D

      ctx.fillStyle = "rgb(200, 0, 0)"
      ctx.fillRect(10, 10, 50, 50)

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)"
      ctx.fillRect(30, 30, 50, 50)
    }
  }, [isCanvasLoaded])

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
