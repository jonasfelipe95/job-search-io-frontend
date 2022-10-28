import React, { useEffect, useState } from 'react';
import './Input.scss';

interface IInput {
  type?: string;
  value: string | number;
  onInput?: React.FormEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ value, type, onInput, onKeyDown, onChange, ...props }: IInput) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <input
      className="jsi-input-field"
      defaultValue={inputValue}
      type={type}
      onChange={onChange}
      onInput={onInput}
      onKeyDown={onKeyDown}
      {...props}
    />
  );
};

export default Input;
