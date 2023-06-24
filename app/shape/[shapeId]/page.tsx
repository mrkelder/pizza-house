import styles from "./pizzaBuilderPage.module.scss"

interface PizzaBuilderPageProps {
  params: { shapeId: string }
}

export default function PizzaBuilderPage({ params }: PizzaBuilderPageProps) {
  console.log(params)
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Pizza Builder</h1>
    </main>
  )
}
