import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render title prop as heading content", () => {
    render(<Header title="My title" />);
    const headingElement = screen.getByRole("heading", {
      level: 1,
      name: /my title/i,
    });
    expect(headingElement).toBeInTheDocument();
  });
});
