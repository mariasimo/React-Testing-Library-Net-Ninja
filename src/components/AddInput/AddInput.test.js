import { fireEvent, render, screen } from "@testing-library/react";
import AddInput from "./AddInput";

const mockSetTodos = jest.fn();

describe("AddInput", () => {
  it("should render input element", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);

    expect(input).toBeInTheDocument();
  });

  it("should change input value on change", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(input, { target: { value: "new text" } });

    expect(input.value).toBe("new text");
  });

  it("should reset input after `add` button is clicked", () => {
    render(<AddInput todos={[]} setTodos={mockSetTodos} />);
    const input = screen.getByPlaceholderText(/Add a new task here.../i);
    const button = screen.getByRole("button", { name: /Add/i });

    fireEvent.click(button);

    expect(input.value).toBeFalsy();
  });
});
