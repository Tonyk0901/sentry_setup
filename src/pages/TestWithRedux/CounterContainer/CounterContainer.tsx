import { useDispatch } from "react-redux";

import { Counter } from "@/components/Counter";

import { actions, useShallowSelector } from "@/store/reducer";

export function CounterContainer() {
  const dispatch = useDispatch();
  const { setCountUp, setCountDown } = actions;
  const { count } = useShallowSelector((state) => ({
    count: state.count,
  }));

  return (
    <div>
      <Counter
        count={count}
        increaseCount={() => dispatch(setCountUp())}
        decreaseCount={() => dispatch(setCountDown())}
      />
    </div>
  );
}
