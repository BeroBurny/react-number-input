import React, {ChangeEvent, FunctionComponent, useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import formatValue from "./formatValue";

const NumberInput: FunctionComponent<Props> = ({value: propsValue, separatorType, digits, onBlur, onChange, ...props}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(formatValue(propsValue, digits, separatorType));
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    // save cursor position
    setSelectionStart(target.selectionStart || 0);
    setSelectionEnd(target.selectionEnd || 0);
    setValue(formatValue(target.value, digits, separatorType));
  };

  useEffect(
    () => {
      if (inputRef.current) {
        inputRef.current.value = value;

        // make it happen
        inputRef.current.selectionStart = selectionStart;
        inputRef.current.selectionEnd = selectionEnd;
      }
    },
    [value]
  );

  return (<input
    {...props}
    onChange={handleChange}
    type="text"
    ref={inputRef}
  />);
};

export default NumberInput;
