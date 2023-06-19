import { PizzaShape } from "@/src/components/PizzaShape"
import styles from "./shapePage.module.scss"

export default function Shape() {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Select shape</h1>

      <div className={styles.pizzaShapesGrid}>
        <PizzaShape image="/complete_pizza.png" title="Circle" id="circle" />
      </div>
    </main>
  )
}
