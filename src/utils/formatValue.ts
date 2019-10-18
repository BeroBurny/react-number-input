import {SeparatorType} from "../types";
import {getNumberAndDecimalSeparators, sanitizeDecimalNumber} from "./index";
import getValueAsStrings from './getValueAsStrings';

const formatValue = (value: number | string, minimumDigits?: number,  maximumDigits?: number, separatorType: SeparatorType = 'eu') => {
  const [numberSeparator, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);

  if (typeof value === 'number') {
    value = getValueAsStrings(value, minimumDigits, maximumDigits, separatorType);
  }

  const [ wholeNumber, decimalNumber ] = value.split(decimalSeparator);
  const sanitizedWholeNumber = wholeNumber.replace(/^(?=[\-])+|[^0-9]+/g, '');
  const sanitizedDecimalNumber = sanitizeDecimalNumber(decimalNumber, minimumDigits,  maximumDigits);

  if (!sanitizedDecimalNumber) {
    return sanitizedWholeNumber.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${numberSeparator}`);
  }
  return sanitizedWholeNumber
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${numberSeparator}`)
    .concat(decimalSeparator, sanitizedDecimalNumber);
};

export default formatValue;
