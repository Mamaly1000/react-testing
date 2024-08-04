import { renderHook } from "@testing-library/react";
import useCounter from "./useCounter";
import { act } from "react";

describe.skip("useCounter hook test", () => {
  test("initial value is 0", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {},
    });
    expect(result.current.counter).toBe(0);
  });
  test("initial value is 10", () => {
    const { result } = renderHook(useCounter, {
      initialProps: { init: 10 },
    });
    expect(result.current.counter).toBe(10);
  });
  test("value descrement and it is -1", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {},
    });
    act(() => result.current.decrement());
    expect(result.current.counter).toBe(-1);
  });
  test("value increment and it is 1", () => {
    const { result } = renderHook(useCounter, {
      initialProps: {},
    });
    act(() => result.current.increment());
    expect(result.current.counter).toBe(1);
  });
});
