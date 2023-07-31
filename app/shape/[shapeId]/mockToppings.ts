import { PizzaTopping } from "@/src/lib/PizzaTopping"

const meatToppings = [
  new PizzaTopping({
    img: "/pizza_builder/bacon.webp",
    price: 0.56,
    name: "Bacon"
  }).getToppingObject(),
  new PizzaTopping({
    img: "/pizza_builder/chicken.webp",
    price: 0.16,
    name: "Chicken"
  }).getToppingObject(),
  new PizzaTopping({
    img: "/pizza_builder/pepperoni.webp",
    price: 1.48,
    name: "Pepperoni"
  }).getToppingObject()
]

const vegetableToppings = [
  new PizzaTopping({
    img: "/pizza_builder/peppers.png",
    price: 0.56,
    name: "Peppers"
  }).getToppingObject(),
  new PizzaTopping({
    img: "/pizza_builder/red_onions.png",
    price: 0.16,
    name: "Red Onions"
  }).getToppingObject(),
  new PizzaTopping({
    img: "/pizza_builder/tomatoes.png",
    price: 0.16,
    name: "Tomatoes"
  }).getToppingObject(),
  new PizzaTopping({
    img: "/pizza_builder/red_onions.png",
    price: 0.16,
    name: "Red Onions"
  }).getToppingObject(),
  new PizzaTopping({
    img: "/pizza_builder/tomatoes.png",
    price: 0.16,
    name: "Tomatoes"
  }).getToppingObject()
]

const otherToppings = [
  new PizzaTopping({
    img: "/pizza_builder/mushrooms.webp",
    price: 0.56,
    name: "Mushrooms"
  }).getToppingObject(),
  new PizzaTopping({
    img: "/pizza_builder/olives.png",
    price: 0.16,
    name: "Olives"
  }).getToppingObject()
]

export const mockToppingsData = [
  { name: "Meat", toppings: meatToppings },
  { name: "Vegetables", toppings: vegetableToppings },
  { name: "Other", toppings: otherToppings }
]
