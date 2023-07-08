import { PizzaTopping } from "@/src/lib/PizzaTopping"

export const meatToppings = [
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

export const vegetableToppings = [
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

export const otherToppings = [
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
