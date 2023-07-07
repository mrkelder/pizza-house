"use client"

import { FC, useEffect, useRef } from "react"
import styles from "./pizzaBuilderCanvas.module.scss"

export const PizzaBuilderCanvas: FC = () => {
  // TODO: remember, canvas can be unsupported
  const canvasRef = useRef<null | HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d") as CanvasRenderingContext2D

      ctx.fillStyle = "rgb(200, 0, 0)"
      ctx.fillRect(10, 10, 50, 50)

      ctx.fillStyle = "rgba(0, 0, 200, 0.5)"
      ctx.fillRect(30, 30, 50, 50)
    }
  }, [])

  return (
    <canvas
      width={500}
      height={500}
      ref={canvasRef}
      className={styles.canvas}
    />
  )
}
