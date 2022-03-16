import create from "zustand";
import { combine } from "zustand/middleware";
import { produce } from "immer";

import { initialState, IInitalState } from "./state";

export const useZustandStore = create(
  combine(initialState, (set) => ({
    resetState: () => {
      set(initialState);
    },
    setTextInput: (value: string) => {
      set(
        produce((state: IInitalState) => {
          state.textInput = value;
        })
      );
    },
    increaseCount: () => {
      set(
        produce((state: IInitalState) => {
          state.count += 1;
        })
      );
    },
    decreaseCount: () => {
      set(
        produce((state: IInitalState) => {
          state.count -= 1;
        })
      );
    },
  }))
);
