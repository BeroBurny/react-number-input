import React, {ChangeEvent, FunctionComponent, FocusEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import formatValue from "./formatValue";
import {findSeparatorIndex, getNumberAndDecimalSeparators, getValueAsNumber} from "./utils";

const NumberInput: FunctionComponent<Props> = ({value: propsValue, separatorType, digits, onBlur, onChange, onFocus, onKeyDown, ...props}) => {
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

      // TODO: improve pointer position if is multiple numbers selected and deleted
      const offset = formattedValue.length - value.length - 1;
      if (offset >= 0) {
        setSelectionStart(selectionStart + offset);
        setSelectionEnd(selectionEnd + offset);
      } else if (selectionStart + offset + 2 >= 0 && selectionEnd + offset + 2 >= 0) {
        setSelectionStart(selectionStart + offset + 2);
        setSelectionEnd(selectionEnd + offset + 2);
      } else {
        setSelectionStart(0);
        setSelectionEnd(0);
      }

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
    }, [value]);

  useEffect(() => {
      if (getValueAsNumber(value, separatorType) !== propsValue) {
        setValue(formatValue(propsValue, digits, separatorType));
      }
    }, [propsValue]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key === '.' || key === ',') {
      event.preventDefault();

      const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);
      if (value.indexOf(decimalSeparator) === selectionStart) {
        inputRef.current!.setSelectionRange(selectionStart + 1, selectionEnd + 1);
      }
    }

    if (key === 'Backspace') {
      const index = findSeparatorIndex(value, separatorType);
      if (selectionStart === (index + 1)) {
        setSelectionStart(selectionStart - 1);
        setSelectionEnd(selectionEnd - 1);
        inputRef.current!.setSelectionRange(selectionStart - 1, selectionEnd -1 );

        event.preventDefault();
      }
    }

    if (key === 'Delete') {
      const index = findSeparatorIndex(value, separatorType);
      if (selectionStart === index) {
        setSelectionStart(selectionStart + 1);
        setSelectionEnd(selectionEnd + 1);
        inputRef.current!.setSelectionRange(selectionStart + 1, selectionEnd + 1);

        event.preventDefault();
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    const { target } = event;
    setTimeout(() => {
      const selectionStart = target.selectionStart || 0;
      const selectionEnd = target.selectionEnd || 0;
      setSelectionStart(selectionStart);
      setSelectionEnd(selectionEnd);
    });

    if (onFocus) {
      onFocus(event);
    }
  };

  return (<input
    {...props}
    onChange={handleChange}
    type="text"
    ref={inputRef}
    onKeyDown={handleKeyDown}
    onFocus={handleFocus}
  />);
};

export default NumberInput;
