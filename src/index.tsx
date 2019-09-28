import React, {ChangeEvent, FunctionComponent, useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import formatValue from "./formatValue";
import {getValueAsNumber} from "./utils";

const NumberInput: FunctionComponent<Props> = ({value: propsValue, separatorType, digits, onBlur, onChange, ...props}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [value, setValue] = useState(formatValue(propsValue, digits, separatorType));
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const selectionStart = target.selectionStart || 0;
    const selectionEnd = target.selectionEnd || 0;
    setSelectionStart(selectionStart);
    setSelectionEnd(selectionEnd);

    if (target.value.match(/[^0-9.,]/g) === null) {
      const formattedValue = formatValue(target.value, digits, separatorType);
      setValue(formattedValue);
      if (onChange) {
        onChange(getValueAsNumber(formattedValue, separatorType));
      }
    } else {
      inputRef.current!.value = value;
      inputRef.current!.setSelectionRange(selectionStart - 1, selectionEnd - 1);
    }

  };

  useEffect(
    () => {
      if (inputRef.current) {
        inputRef.current.value = value;
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
