import { render, screen } from "@testing-library/react"
import { PizzaShape } from "./PizzaShape"

describe("PizzaShape component", () => {
  it("should render with 'Circle' title and '/test.png' image", () => {
    const shape = "Circle"
    const image = "/test.png"

    render(<PizzaShape title={shape} image={image} />)

    expect(screen.getByText(shape)).toBeInTheDocument()
    expect(screen.getByRole("img")).toHaveAttribute("src", image)
  })
})
