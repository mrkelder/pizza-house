import { render, screen } from "@testing-library/react"
import { PizzaShape } from "./PizzaShape"

describe("PizzaShape component", () => {
  it("should render with 'Circle' title, '/test.png' image, and link to shape", () => {
    const shape = "Circle"
    const image = "/test.png"
    const id = "pizza-shape-1"

    render(<PizzaShape title={shape} image={image} id={id} />)

    expect(screen.getByText(shape)).toBeInTheDocument()
    expect(screen.getByRole("img").getAttribute("src")).toContain("test.png")
    expect(screen.getByRole("link").getAttribute("href")).toContain(
      "/shape/pizza-shape-1"
    )
  })
})
