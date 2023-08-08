"use client"

import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react"
import { ToppingObject } from "@/src/lib/PizzaTopping"
import { env } from "@/src/lib/env"
import styles from "./pizzaBuilderCanvas.module.scss"
import { toast } from "react-toastify"

interface PizzaBuilderCanvasProps {
  canvasObjects: (ToppingObject | undefined)[]
}

export const PizzaBuilderCanvas: FC<PizzaBuilderCanvasProps> = ({
  canvasObjects
}) => {
  const cachedImages = useMemo<Map<string, HTMLImageElement>>(
    () => new Map(),
    []
  )
  const canvasWrapperRef = useRef<null | HTMLDivElement>(null)
  const canvasRef = useRef<null | HTMLCanvasElement>(null)
  const [isCanvasLoaded, setIsCanvasLoaded] = useState(false)
  const [canvasWidth, setCanvasWidth] = useState(0)
  const [canvasHeight, setCanvasHeight] = useState(0)

  const modifyCanvasIfAvailable = useCallback(
    (callback: (ctx: CanvasRenderingContext2D) => Promise<unknown>) => {
      if (canvasRef.current && isCanvasLoaded) {
        const ctx = canvasRef.current.getContext("2d")
        if (ctx) return callback(ctx)
      }
    },
    [isCanvasLoaded]
  )

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

  const rerenderCanvas = useCallback(
    async (ctx: CanvasRenderingContext2D) => {
      const pizzaBaseImage = await getImageAndCacheIt(
        env.hostname + "pizza_builder/base.webp"
      )
      ctx.clearRect(0, 0, canvasWidth, canvasHeight)
      ctx.drawImage(pizzaBaseImage, 0, 0, canvasWidth, canvasHeight)
    },
    [canvasHeight, canvasWidth, getImageAndCacheIt]
  )

  useEffect(() => {
    if (isCanvasLoaded) {
      const ctx = canvasRef.current?.getContext("2d")
      if (!ctx) {
        toast.warn(
          "Sorry, canvas is unavailable in your browser, we cannot visually display your selection.",
          {
            autoClose: false
          }
        )
      }
    }
  }, [isCanvasLoaded])

  useEffect(() => {
    modifyCanvasIfAvailable(async (ctx) => {
      const unloadedImages: Promise<HTMLImageElement>[] = []
      const toppingObjects = canvasObjects.filter((i) => i) as ToppingObject[]
      for (const toppingObject of toppingObjects) {
        unloadedImages.push(
          getImageAndCacheIt(env.hostname + toppingObject.img)
        )
      }

      const loadedImages = await Promise.all(unloadedImages)
      await rerenderCanvas(ctx)
      loadedImages.forEach((image) =>
        ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight)
      )
    })
  }, [
    canvasHeight,
    canvasWidth,
    getImageAndCacheIt,
    modifyCanvasIfAvailable,
    rerenderCanvas,
    canvasObjects
  ])

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
    modifyCanvasIfAvailable(async (ctx) => {
      await rerenderCanvas(ctx)
    })
  }, [
    canvasHeight,
    canvasWidth,
    getImageAndCacheIt,
    isCanvasLoaded,
    modifyCanvasIfAvailable,
    rerenderCanvas
  ])

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
