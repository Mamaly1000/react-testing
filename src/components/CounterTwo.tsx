interface props {
  counter: number;
  handleIncrement?: () => void;
  handleDecrement?: () => void;
}

const CounterTwo = ({ counter, handleDecrement, handleIncrement }: props) => {
  return (
    <div>
      <h1 title="counter-amount">{counter}</h1>
      {handleDecrement && <button onClick={handleDecrement}>decrement</button>}
      {handleIncrement && <button onClick={handleIncrement}>increment</button>}
    </div>
  );
};

export default CounterTwo;
