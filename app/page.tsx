import Image from "next/image"
import styles from "./homePage.module.scss"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.pizza_image_cropper}>
        <div className={styles.pizza_image_wrapper}>
          <Image fill src="/complete_pizza.png" alt="pepperoni pizza" />
        </div>
      </div>
    </main>
  )
}
