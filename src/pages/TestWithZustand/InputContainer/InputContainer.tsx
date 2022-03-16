import React from "react";
import { shallowEqual } from "react-redux";

import { Input } from "@/components/Input";

import { useZustandStore } from "../store/actions";

export function InputContainer() {
  const { textInput, setTextInput } = useZustandStore(
    (state) => ({
      textInput: state.textInput,
      setTextInput: state.setTextInput,
    }),
    shallowEqual
  );

  return (
    <div>
      <Input
        inputValue={textInput}
        setInputValue={(value) => setTextInput(value)}
      />
    </div>
  );
}
