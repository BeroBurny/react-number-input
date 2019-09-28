import React, {ChangeEvent, FunctionComponent, useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import formatValue from "./formatValue";
import {getNumberAndDecimalSeparators, getValueAsNumber} from "./utils";

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
      target.value = value;
      target.setSelectionRange(selectionStart - 1, selectionEnd - 1);
    }
  };

  useEffect(() => {
      if (inputRef.current) {
        inputRef.current.value = value;
        inputRef.current.selectionStart = selectionStart;
        inputRef.current.selectionEnd = selectionEnd;
      }
    },
    [value]
  );

  const keyPressHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === '.' || key === ',') {
      event.preventDefault();

      const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);
      if (value.indexOf(decimalSeparator) === selectionStart) {
        if (inputRef.current) {
          inputRef.current.selectionStart = selectionStart + 1;
          inputRef.current.selectionEnd = selectionEnd + 1;
        }
      }
    }
  };

  return (<input
    {...props}
    onChange={handleChange}
    type="text"
    ref={inputRef}
    onKeyDown={keyPressHandler}
  />);
};

export default NumberInput;
