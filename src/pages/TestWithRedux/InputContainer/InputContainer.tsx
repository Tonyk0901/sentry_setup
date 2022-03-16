import { useDispatch } from "react-redux";

import { Input } from "@/components/Input";
import { useShallowSelector, actions } from "@/store/reducer";

export function InputContainer() {
  const dispatch = useDispatch();
  const { setTextInput } = actions;

  const { textInput } = useShallowSelector((state) => ({
    textInput: state.textInput,
  }));

  return (
    <div>
      <Input
        inputValue={textInput}
        setInputValue={(value) => dispatch(setTextInput(value))}
      />
    </div>
  );
}
