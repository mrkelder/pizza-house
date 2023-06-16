import { Button } from "@/src/components/Button"
import { FC } from "react"
import Image from "next/image"

interface PizzaShapeProps {
  title: string
  image: string
}

export const PizzaShape: FC<PizzaShapeProps> = ({ image, title }) => {
  return (
    <div>
      <Image src={image} width={24} height={24} alt={title} />
      <p>{title}</p>
      <Button>Select</Button>
    </div>
  )
}
