interface ICounterProps {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

export function Counter({
  count,
  increaseCount,
  decreaseCount,
}: ICounterProps) {
  return (
    <div>
      <div>카운트: {count}</div>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  );
}
