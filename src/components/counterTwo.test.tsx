import { render, renderHook, screen } from "@testing-library/react";
import CounterTwo from "./CounterTwo";
import user from "@testing-library/user-event";

describe.skip("counter two testing", () => {
  test("renders correctly", () => {
    render(<CounterTwo counter={10} />);
    const counterElement = screen.getByTitle("counter-amount");
    expect(counterElement).toBeInTheDocument();
    expect(+(counterElement.textContent as string)).toBe(10);
  });
  test("buttons render correctly", async () => {
    user.setup();
    const incrementHandler = jest.fn();
    const decrementHandler = jest.fn();
    render(
      <CounterTwo
        counter={0}
        handleDecrement={decrementHandler}
        handleIncrement={incrementHandler}
      />
    );

    const dec_button = screen.getByRole("button", { name: "decrement" });
    const inc_button = screen.getByRole("button", { name: "increment" });
    [dec_button, inc_button].forEach((el) => expect(el).toBeInTheDocument());
    await user.click(dec_button);
    await user.click(inc_button);
    await user.click(inc_button);
    expect(decrementHandler).toHaveBeenCalledTimes(1);
    expect(incrementHandler).toHaveBeenCalledTimes(2);
  });
});
