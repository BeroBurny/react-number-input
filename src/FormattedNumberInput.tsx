import React, {
  ChangeEvent,
  FunctionComponent,
  MouseEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
  useCallback
} from 'react';
import {Props} from "./types";
import formatValue from "./utils/formatValue";
import {
  findDecimalSeparatorIndex,
  getNumberAndDecimalSeparators,
  getValidSelectionPosition,
  getValueAsNumber,
  isCursorOnSeparator
} from "./utils";

const FormattedNumberInput: FunctionComponent<Props> = React.forwardRef(({
  value: propsValue, separatorType, onChange, onClick, minimumFractionDigits, maximumFractionDigits, onKeyDown,
  ...props
}, ref) => {
  if (minimumFractionDigits! >  maximumFractionDigits!) {
    minimumFractionDigits = maximumFractionDigits;
  }

  const inputRef = useRef<HTMLInputElement>(null);
  const refCB = useCallback((r) => {
    (inputRef as any).current = r;
    if (ref) {
      (ref as any).current = r;
    }
  }, [ref]);

  const [value, setValue] = useState(formatValue(propsValue, minimumFractionDigits, maximumFractionDigits, separatorType));
  const [selectionStart, setSelectionStart] = useState(0);
  const [selectionEnd, setSelectionEnd] = useState(0);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const selectionStart = target.selectionStart || 0;
    const selectionEnd = target.selectionEnd || 0;
    setSelectionStart(selectionStart);
    setSelectionEnd(selectionEnd);

    const regexMatch = target.value.match(/^(?=[\-])|[^0-9.,]/g);
    if (regexMatch === null || (regexMatch.length === 1 && regexMatch[0].length === 0)) {

      const formattedValue = formatValue(target.value, minimumFractionDigits, maximumFractionDigits, separatorType);

      const validSelection = getValidSelectionPosition(selectionStart, value, formattedValue);
      setSelectionStart(validSelection);
      setSelectionEnd(validSelection);

      target.value = formattedValue;
      target.setSelectionRange(validSelection, validSelection);

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
        const formattedValue = formatValue(propsValue, minimumFractionDigits, maximumFractionDigits, separatorType);

        if (inputRef.current) {
          inputRef.current.value = formattedValue;
          inputRef.current.setSelectionRange(selectionStart, selectionEnd);
        }

        setValue(formattedValue);
      }
    }, [propsValue]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    // TODO: if is not set minimumFractionDigits user need to be able to add decimal point by own

    if (key === '.' || key === ',') {
      const isAllSelected = (inputRef.current!.selectionStart || 0) === 0 && inputRef.current!.value.length === (inputRef.current!.selectionEnd || 0);

      const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);
      if (key === decimalSeparator && !isAllSelected) {
        event.preventDefault();

        if (value.indexOf(decimalSeparator) === selectionStart) {
          inputRef.current!.setSelectionRange(selectionStart + 1, selectionEnd + 1);
        }
      } else if (key === decimalSeparator && isAllSelected) {
        inputRef.current!.value = '0';
      } else {
        event.preventDefault();
      }
    }

    if (key === 'Backspace') {
      const index = findDecimalSeparatorIndex(value, separatorType);
      if (isCursorOnSeparator(value, selectionStart - 1, separatorType) && selectionStart === selectionEnd) {
        inputRef.current!.setSelectionRange(selectionStart - 1, selectionEnd - 1);
      }
      if (selectionStart === (index + 1) && index !== -1 && selectionStart === selectionEnd) {
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
      if (selectionStart === index && selectionStart === selectionEnd) {
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
    ref={refCB}
    onClick={handleClick}
    onKeyDown={handleKeyDown}
  />);
});

export default FormattedNumberInput;
