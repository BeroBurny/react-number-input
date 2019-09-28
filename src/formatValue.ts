import {SeparatorType} from "./types";
import {getNumberAndDecimalSeparators} from "./utils";

const formatValue = (value: number | string, digits: number = 0, separatorType: SeparatorType = 'eu') => {
  const [numberSeparator, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);

  if (typeof value === 'number') {
    if (separatorType === 'eu') {
      value = value.toFixed(digits).replace('.', ',');
    } else {
      value = value.toFixed(digits);
    }
  }

  const [ wholeNumber, decimalNumber ] = value.split(decimalSeparator);
  const sanitizedWholeNumber = wholeNumber.replace(/[^0-9]+/g, '');

  if (digits === 0) {
    return sanitizedWholeNumber.replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${numberSeparator}`);
  }
  return sanitizedWholeNumber
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, `$1${numberSeparator}`)
    .concat(decimalSeparator, decimalNumber);
};

export default formatValue;
