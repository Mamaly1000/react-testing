import { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);
  const [amount, setAmount] = useState(0);
  return (
    <div>
      <h1 title="counter">{number}</h1>
      <button
        title="add-counter-button"
        onClick={() => setNumber((prev) => prev + 1)}
      >
        add
      </button>
      <input
        type="number"
        name="counter-input"
        title="counter-input"
        value={amount}
        onChange={(e) => setAmount(+e.target.value)}
      />
      <button title="set-amount-button" onClick={() => setNumber(amount)}>
        set
      </button>
    </div>
  );
};

export default Counter;
