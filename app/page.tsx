import { Button } from "@/src/components/Button"
import Image from "next/image"
import styles from "./rootPage.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.titleBox}>
        <h1>The ultimate pizza builder to create your own 🍕😎</h1>
        <Button>Start</Button>
      </div>

      <div className={styles.pizza_image_cropper}>
        <div className={styles.pizza_image_wrapper}>
          <Image fill src="/complete_pizza.png" alt="pepperoni pizza" />
        </div>
      </div>
    </main>
  )
}
