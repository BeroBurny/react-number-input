import { SeparatorType } from "./types";

export const getNumberAndDecimalSeparators = (separatorType: SeparatorType = 'eu') => [
  separatorType === 'eu' ? '.' : ',',
  separatorType === 'eu' ? ',' : '.',
];

export const getValueAsNumber = (value: string, separatorType?: SeparatorType): number => {
  const [_, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);

  const [ wholeNumber, decimalNumber ] = value.split(decimalSeparator);
  const sanitizedWholeNumber = wholeNumber.replace(/[^0-9]+/g, '');

  return Number(`${sanitizedWholeNumber}.${decimalNumber}`);
};
