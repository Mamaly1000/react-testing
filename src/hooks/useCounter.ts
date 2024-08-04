import { useState } from "react";

const useCounter = ({
  init = 0,
}: {
  init?: number;
}): {
  counter: number;
  increment: () => void;
  decrement: () => void;
} => {
  const [counter, setCounter] = useState(init);
  const decrement = () => setCounter((prev) => prev - 1);
  const increment = () => setCounter((prev) => prev + 1);
  return { counter, increment, decrement };
};

export default useCounter;
