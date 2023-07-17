interface PizzaToppingArguments {
  img: string
  name: string
  price: number
}

export interface ToppingObject {
  id: string
  name: string
  img: string
  price: number
}

export class PizzaTopping {
  private static classId = 0

  private readonly id: string
  private readonly img: string
  private readonly name: string
  private readonly price: number

  constructor({ img, name, price }: PizzaToppingArguments) {
    this.img = img
    this.name = name
    this.price = price
    this.id = `topping_${PizzaTopping.classId++}`
  }

  getToppingObject() {
    return {
      id: this.id,
      name: this.name,
      img: this.img,
      price: this.price
    }
  }
}
