import { PizzaBuilderCanvas } from "@/src/components/PizzaBuilderCanvas"
import { PizzaToppingsSection } from "@/src/components/PizzaToppingsSection"
import styles from "./pizzaBuilderPage.module.scss"

interface PizzaBuilderPageProps {
  params: { shapeId: string }
}

export default function PizzaBuilderPage({ params }: PizzaBuilderPageProps) {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Pizza Builder</h1>

      <div className={styles.contentWrapper}>
        <div className={styles.stickyCanvasWrapper}>
          <PizzaBuilderCanvas />
        </div>
        <div className={styles.toppings}>
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
          <PizzaToppingsSection />
        </div>
      </div>
    </main>
  )
}
