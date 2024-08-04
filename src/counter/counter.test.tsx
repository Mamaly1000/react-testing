import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import user from "@testing-library/user-event";

describe.skip("counter", () => {
  test("counter renders correctly", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", {
      name: "add",
    });
    expect(buttonElement).toBeInTheDocument();
  });
  test("counter renders 0", () => {
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    expect(counterElement).toHaveTextContent("0");
  });
  test("counter renders 1 after clicking it", async () => {
    user.setup();
    render(<Counter />);
    const counterElement = screen.getByRole("heading");
    expect(counterElement).toBeInTheDocument();
    const buttonElement = screen.getByRole("button", {
      name: "add",
    });
    expect(buttonElement).toBeInTheDocument();
    await user.click(buttonElement);
    expect(counterElement).toHaveTextContent("1");
  });
  test("render 10 after typing and clicking set button", async () => {
    user.setup();
    render(<Counter />);
    const counterElement = screen.getByTitle("counter");
    const setButton = screen.getByTitle("set-amount-button");
    const inputElement = screen.getByTitle("counter-input");

    await user.type(inputElement, "10");
    expect(inputElement).toHaveValue(10);

    await user.click(setButton);
    expect(counterElement).toHaveTextContent("10");
  });
  test("all inputs focued on order", async () => {
    user.setup();
    render(<Counter />);
    const counterElement = screen.getByTitle("counter");
    const addButton = screen.getByTitle("add-counter-button");
    const setButton = screen.getByTitle("set-amount-button");
    const inputElement = screen.getByTitle("counter-input");

    await user.tab();
    expect(addButton).toHaveFocus();
    await user.tab();
    expect(inputElement).toHaveFocus();
    await user.tab();
    expect(setButton).toHaveFocus();
  });
});
