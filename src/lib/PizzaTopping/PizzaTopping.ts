interface PizzaToppingArguments {
  img: string
  name: string
  price: number
}

export class PizzaTopping {
  private static classId = 0
  private instanceId: number
  public readonly img: string
  public readonly name: string
  public readonly price: number

  constructor({ img, name, price }: PizzaToppingArguments) {
    this.img = img
    this.name = name
    this.price = price
    this.instanceId = PizzaTopping.classId++
  }

  get id(): string {
    return `topping_${this.instanceId}`
  }
}
