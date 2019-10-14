import {SeparatorType} from "../types";
import getNumberAndDecimalSeparators from "./getNumberAndDecimalSeparators";

const getValueAsNumber = (value: string, separatorType?: SeparatorType): number => {
  const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);

  const [ wholeNumber, decimalNumber ] = value.split(decimalSeparator);
  const sanitizedWholeNumber = wholeNumber.replace(/[^0-9]+/g, '');

  if (!decimalNumber) {
    return Number(sanitizedWholeNumber);
  }
  return Number(`${sanitizedWholeNumber}.${decimalNumber}`);
};

export default getValueAsNumber;
