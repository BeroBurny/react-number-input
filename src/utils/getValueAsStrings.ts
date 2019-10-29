import { SeparatorType } from '../types';

const getValueAsStrings = (value: number, minimumDigits?: number,  maximumDigits?: number, separatorType: SeparatorType = 'eu') => {
  if (minimumDigits && maximumDigits && minimumDigits > maximumDigits) {
    minimumDigits = maximumDigits;
  }

  let valueAsString: string;
  const decimalLength = value % 1 === 0 ? 0 : (String(value).split('.')[1] || '').length;
  if (minimumDigits !== undefined && maximumDigits !== undefined && minimumDigits === maximumDigits || decimalLength < minimumDigits!) {
    valueAsString = value.toFixed(minimumDigits);
  } else if (decimalLength > maximumDigits!) {
    valueAsString = value.toFixed(maximumDigits);
  } else {
    valueAsString = value.toString();
  }

  if (separatorType === 'eu') {
    return valueAsString.replace('.', ',');
  }
  return valueAsString;
};

export default getValueAsStrings;
