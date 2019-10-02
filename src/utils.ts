import { SeparatorType } from "./types";

export const getNumberAndDecimalSeparators = (separatorType: SeparatorType = 'eu') => [
  separatorType === 'eu' ? '.' : ',',
  separatorType === 'eu' ? ',' : '.',
];

export const getValueAsNumber = (value: string, separatorType?: SeparatorType): number => {
  const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);

  const [ wholeNumber, decimalNumber ] = value.split(decimalSeparator);
  const sanitizedWholeNumber = wholeNumber.replace(/[^0-9]+/g, '');

  return Number(`${sanitizedWholeNumber}.${decimalNumber}`);
};

export const findDecimalSeparatorIndex = (value: string, separatorType?: SeparatorType) => {
  const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);
  return value.indexOf(decimalSeparator);
};

const findIndexesOf = (word: string, searchElement: string): number[] => {
  const indexes: number[] = [];

  word.split('').forEach((letter, index) => {
    if (letter === searchElement) {
      indexes.push(index);
    }
  });

  return indexes;
};

export const isCursorOnSeparator = (value: string, cursorLocation: number, separatorType?: SeparatorType) => {
  const [numberSeparator] = getNumberAndDecimalSeparators(separatorType);

  return findIndexesOf(value, numberSeparator).some(index => index === cursorLocation);
};