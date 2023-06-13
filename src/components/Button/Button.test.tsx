import { render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button component", () => {
  it("should render with 'test1234' text", () => {
    const testText = "test1234"

    render(<Button>{testText}</Button>)
    expect(screen.getByText(testText)).toBeInTheDocument()
  })
})
