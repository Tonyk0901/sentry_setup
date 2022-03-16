import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, shallowEqual } from "react-redux";

export interface IInitialState {
  textInput: string;
  count: number;
}

const initialState: IInitialState = {
  textInput: "",
  count: 0,
};

const slice = createSlice({
  name: "reduxStore",
  initialState,
  reducers: {
    setTextInput: (state, action: PayloadAction<string>) => {
      state.textInput = action.payload;
    },
    setCountUp: (state) => {
      state.count += 1;
    },
    setCountDown: (state) => {
      state.count -= 1;
    },
  },
});

export const { reducer, actions } = slice;

export type RootState = ReturnType<typeof reducer>;

export const useShallowSelector: TypedUseSelectorHook<RootState> = (selector) =>
  useSelector(selector, shallowEqual);
