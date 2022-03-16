import { ChangeEvent } from "react";

interface IInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
}

export function Input({ inputValue, setInputValue }: IInputProps) {
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <div>
        <input value={inputValue} onChange={handleInputChange} />
      </div>
    </>
  );
}
