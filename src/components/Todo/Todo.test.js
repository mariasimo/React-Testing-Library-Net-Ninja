import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import Todo from "./Todo";

const MockTodo = () => (
  <BrowserRouter>
    <Todo />
  </BrowserRouter>
);

const addTasks = (tasks) => {
  const input = screen.getByPlaceholderText(/Add a new task/i);
  const button = screen.getByRole("button", { name: /Add/i });

  tasks.forEach((t) => {
    fireEvent.change(input, { target: { value: t } });
    fireEvent.click(button);
  });
};

describe("Todo", () => {
  it("should have 0 pending task at first", () => {
    render(<MockTodo />);

    const todolist = screen.queryAllByTestId("todo-item");
    expect(todolist).toHaveLength(0);
  });

  it("should add new inputed task to the todo list", () => {
    render(<MockTodo />);
    addTasks(["new task"]);

    const task = screen.queryByText(/new task/i);
    expect(task).toBeInTheDocument();
  });

  it("should render multiple tasks", () => {
    render(<MockTodo />);
    addTasks(["feed the cat", "water the plants"]);

    const todolist = screen.queryAllByTestId("todo-item");
    expect(todolist).toHaveLength(2);
  });
  it("should not have active class when initially rendered", () => {
    render(<MockTodo />);
    addTasks(["feed the cat"]);

    const task = screen.getByText("feed the cat");
    expect(task).not.toHaveClass("todo-item-active");
  });

  it("should have active class after completed", () => {
    render(<MockTodo />);
    addTasks(["feed the cat"]);

    const task = screen.getByText("feed the cat");
    fireEvent.click(task);

    expect(task).toHaveClass("todo-item-active");
  });
});
