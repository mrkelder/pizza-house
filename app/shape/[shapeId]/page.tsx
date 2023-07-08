import { PizzaBuilderCanvas } from "@/src/components/PizzaBuilderCanvas"
import { PizzaTopping } from "@/src/lib/PizzaTopping"
import { PizzaToppingsSection } from "@/src/components/PizzaToppingsSection"
import styles from "./pizzaBuilderPage.module.scss"

interface PizzaBuilderPageProps {
  params: { shapeId: string }
}

const meatToppings = [
  new PizzaTopping({
    img: "/pizza_builder/bacon.webp",
    price: 0.56,
    name: "Bacon"
  }),
  new PizzaTopping({
    img: "/pizza_builder/chicken.webp",
    price: 0.16,
    name: "Chicken"
  }),
  new PizzaTopping({
    img: "/pizza_builder/pepperoni",
    price: 1.48,
    name: "Pepperoni"
  })
]

const vegetableToppings = [
  new PizzaTopping({
    img: "/pizza_builder/peppers",
    price: 0.56,
    name: "Peppers"
  }),
  new PizzaTopping({
    img: "/pizza_builder/red_onions.webp",
    price: 0.16,
    name: "Red Onions"
  }),
  new PizzaTopping({
    img: "/pizza_builder/tomatoes.webp",
    price: 0.16,
    name: "Tomatoes"
  })
]

const otherToppings = [
  new PizzaTopping({
    img: "/pizza_builder/mushrooms.webp",
    price: 0.56,
    name: "Mushrooms"
  }),
  new PizzaTopping({
    img: "/pizza_builder/olives.webp",
    price: 0.16,
    name: "Olives"
  }),
  new PizzaTopping({
    img: "/pizza_builder/pepperoni",
    price: 1.48,
    name: "Pepperoni"
  })
]

export default function PizzaBuilderPage({ params }: PizzaBuilderPageProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Pizza Builder</h1>

      <div className={styles.contentWrapper}>
        <div className={styles.stickyCanvasWrapper}>
          <PizzaBuilderCanvas />
        </div>
        <div className={styles.toppings}>
          <PizzaToppingsSection name="Meat" toppings={meatToppings} />
          <PizzaToppingsSection
            name="Vegetables"
            toppings={vegetableToppings}
          />
          <PizzaToppingsSection name="Other" toppings={otherToppings} />
        </div>
      </div>
    </main>
  )
}
