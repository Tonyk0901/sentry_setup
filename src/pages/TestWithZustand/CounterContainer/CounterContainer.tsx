import React from "react";
import { shallowEqual } from "react-redux";

import { Counter } from "@/components/Counter";

import { useZustandStore } from "../store/actions";

export function CounterContainer() {
  const { count, increaseCount, decreaseCount } = useZustandStore(
    (state) => ({
      count: state.count,
      increaseCount: state.increaseCount,
      decreaseCount: state.decreaseCount,
    }),
    shallowEqual
  );

  return (
    <div>
      <Counter
        count={count}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
      />
    </div>
  );
}
