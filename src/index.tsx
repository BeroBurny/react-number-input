import React, {ChangeEvent, FunctionComponent, MouseEvent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import {Props} from "./types";
import formatValue from "./formatValue";
import {
  findDecimalSeparatorIndex,
  getNumberAndDecimalSeparators,
  getValidSelectionPosition,
  getValueAsNumber,
  isCursorOnSeparator
} from "./utils";

const NumberInput: FunctionComponent<Props> = ({value: propsValue, separatorType, digits, onBlur, onChange, onClick, onKeyDown, ...props}) => {
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
      const validSelectionStart = getValidSelectionPosition(selectionStart, value, formattedValue);
      const validSelectionEnd = getValidSelectionPosition(selectionEnd, value, formattedValue);
      setSelectionStart(validSelectionStart);
      setSelectionEnd(validSelectionEnd);

      target.value = formattedValue;
      target.setSelectionRange(validSelectionStart, validSelectionEnd);

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
        inputRef.current.setSelectionRange(selectionStart, selectionEnd);
      }
    }, []);

  useEffect(() => {
      if (getValueAsNumber(value, separatorType) !== propsValue) {
        if (inputRef.current) {
          inputRef.current.value = value;
          inputRef.current.setSelectionRange(selectionStart, selectionEnd);
        }

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
      const index = findDecimalSeparatorIndex(value, separatorType);
      if (isCursorOnSeparator(value, selectionStart - 1, separatorType)) {
        inputRef.current!.setSelectionRange(selectionStart - 1, selectionEnd - 1);
      }
      if (selectionStart === (index + 1)) {
        setSelectionStart(selectionStart - 1);
        setSelectionEnd(selectionEnd - 1);
        inputRef.current!.setSelectionRange(selectionStart - 1, selectionEnd -1 );

        event.preventDefault();
      }
    }

    if (key === 'Delete') {
      const index = findDecimalSeparatorIndex(value, separatorType);
      if (isCursorOnSeparator(value, selectionStart, separatorType)) {
        inputRef.current!.setSelectionRange(selectionStart + 1, selectionEnd + 1);
      }
      if (selectionStart === index) {
        setSelectionStart(selectionStart + 1);
        setSelectionEnd(selectionEnd + 1);
        inputRef.current!.setSelectionRange(selectionStart + 1, selectionEnd + 1);

        event.preventDefault();
      }
    }

    if (key === 'ArrowLeft' && selectionStart > 0) {
        setSelectionStart(selectionStart - 1);
        setSelectionEnd(selectionEnd - 1);
    }

    if (key === 'ArrowRight' && selectionEnd < value.length) {
      setSelectionStart(selectionStart + 1);
      setSelectionEnd(selectionEnd + 1);
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleClick = (event: MouseEvent<HTMLInputElement>) => {
    if (inputRef.current) {
      setSelectionStart(inputRef.current.selectionStart || 0);
      setSelectionEnd(inputRef.current.selectionEnd || 0);
    }

    if (onClick) {
      onClick(event);
    }
  };

  return (<input
    {...props}
    onChange={handleChange}
    type="text"
    ref={inputRef}
    onClick={handleClick}
    onKeyDown={handleKeyDown}
  />);
};

export default NumberInput;
