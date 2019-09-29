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

export const findSeparatorIndex = (value: string, separatorType?: SeparatorType) => {
  const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);
  return value.indexOf(decimalSeparator);
};
