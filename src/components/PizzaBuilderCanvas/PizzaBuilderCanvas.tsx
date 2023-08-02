"use client"

import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ToppingObject } from "@/src/lib/PizzaTopping"
import { env } from "@/src/lib/env"
import styles from "./pizzaBuilderCanvas.module.scss"

interface PizzaBuilderCanvasProps {
  // toppingObjects: ToppingObject[]
}

export const PizzaBuilderCanvas: FC<PizzaBuilderCanvasProps> = (
  {
    // toppingObjects
  }
) => {
  // TODO: remember, canvas can be unsupported
  const cachedImages = useMemo<Map<string, HTMLImageElement>>(
    () => new Map(),
    []
  )
  const canvasWrapperRef = useRef<null | HTMLDivElement>(null)
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(false)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)

  // const modifyCanvasIfAvailable = useCallback(
  //   (callback: (ctx: CanvasRenderingContext2D) => (() => void) | void) => {
  //     if (canvasRef.current && isCanvasLoaded) {
  //       const ctx = canvasRef.current.getContext(
  //         "2d"
  //       ) as CanvasRenderingContext2D
  //       return callback(ctx)
  //     }
  //   },
  //   [isCanvasLoaded]
  // )

  const loadImage = (src: string): Promise<HTMLImageElement> =>
    new Promise((res, rej) => {
      const image = new Image()

      image.onload = () => res(image)
      image.onerror = rej
      image.src = src
    })

  const getImageAndCacheIt = useCallback(
    async (src: string): Promise<HTMLImageElement> => {
      if (cachedImages.has(src))
        return cachedImages.get(src) as HTMLImageElement
      else {
        const toppingImage = await loadImage(src)
        cachedImages.set(src, toppingImage)
        return toppingImage
      }
    },
    [cachedImages]
  )

  // useEffect(
  //   () =>
  //     modifyCanvasIfAvailable((ctx) => {
  //       const unloadedImages: any[] = []
  //       for (const toppingObject of toppingObjects) {
  //         const toppingImage = new Image()
  //         toppingImage.src = env.hostname + toppingObject.img
  //         ctx.drawImage(toppingImage, 0, 0, canvasWidth, canvasHeight)
  //         unloadedImages.push()
  //       }

  //       console.log(unloadedImages)

  //       window.addEventListener("resize", setCanvasDimensions)
  //       setCanvasDimensions()

  //       return () => {
  //         window.removeEventListener("resize", setCanvasDimensions)
  //       }
  //     }),
  //   [
  //     canvasHeight,
  //     canvasWidth,
  //     isCanvasLoaded,
  //     modifyCanvasIfAvailable,
  //     toppingObjects
  //   ]
  // )

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
    // TODO: ugly code (function has to do 1 thing only)
    const drawPizzaBase = async () => {
      if (canvasRef.current && isCanvasLoaded) {
        const ctx = canvasRef.current.getContext(
          "2d"
        ) as CanvasRenderingContext2D
        const pizzaBaseImage = await getImageAndCacheIt(
          env.hostname + "pizza_builder/base.webp"
        )
        ctx.drawImage(pizzaBaseImage, 0, 0, canvasWidth, canvasHeight)
      }
    }

    drawPizzaBase()
  }, [canvasHeight, canvasWidth, getImageAndCacheIt, isCanvasLoaded])

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
