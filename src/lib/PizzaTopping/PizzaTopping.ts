interface PizzaToppingArguments {
  img: string
  name: string
  price: number
}

export class PizzaTopping {
  private static _id = 0
  public readonly img: string
  public readonly name: string
  public readonly price: number

  constructor({ img, name, price }: PizzaToppingArguments) {
    this.img = img
    this.name = name
    this.price = price
    PizzaTopping._id++
  }

  get id(): string {
    return `topping_${PizzaTopping._id}`
  }
}
