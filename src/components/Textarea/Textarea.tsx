import React, { useEffect, useState } from 'react';
import './Textarea.scss';

interface ITextarea {
  type?: string;
  height?: string;
  value: string | number;
  onInput?: React.FormEventHandler<HTMLTextAreaElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}

const Textarea = ({ value, type, onInput, onKeyDown, height, onChange, ...props }: ITextarea) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <textarea
      className="jsi-textarea-field"
      style={{ height }}
      value={inputValue}
      onInputCapture={onInput}
      onKeyDownCapture={onKeyDown}
      onChange={onChange}
      {...props}
    ></textarea>
  );
};

export default Textarea;
