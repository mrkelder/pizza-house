import { fireEvent, render, screen } from "@testing-library/react"
import { Button } from "./Button"

describe("Button component", () => {
  it("should render with 'test1234' text", () => {
    const testText = "test1234"

    render(<Button>{testText}</Button>)
    expect(screen.getByText(testText)).toBeInTheDocument()
  })

  it("should accept title, type, and role native button props", () => {
    render(
      <Button type="reset" title="Test title" role="button">
        Text
      </Button>
    )

    const buttonComponent = screen.getByText("Text")

    expect(buttonComponent).toHaveAttribute("type", "reset")
    expect(buttonComponent).toHaveAttribute("title", "Test title")
    expect(buttonComponent).toHaveAttribute("role", "button")
  })

  it("should react to any native button DOM events", () => {
    const mockClick = jest.fn()
    const mockFocus = jest.fn()
    const mockKeyDown = jest.fn()

    render(
      <Button onClick={mockClick} onFocus={mockFocus} onKeyDown={mockKeyDown}>
        Text
      </Button>
    )

    const buttonComponent = screen.getByText("Text")

    fireEvent.click(buttonComponent)
    fireEvent.focus(buttonComponent)
    fireEvent.keyDown(buttonComponent)

    expect(mockClick).toBeCalled()
    expect(mockFocus).toBeCalled()
    expect(mockKeyDown).toBeCalled()
  })

  it("should render anchor instead of button", () => {
    render(<Button href="/test">Test</Button>)

    expect(screen.getByRole("link")).toHaveTextContent("Test")
  })
})
