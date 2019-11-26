import {SeparatorType} from "../types";
import getNumberAndDecimalSeparators from "./getNumberAndDecimalSeparators";

const fixFirstNumber = (value: string, separatorType?: SeparatorType): [string, boolean] => {
  const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);

  if (value[0] === '0' && value[1] !== decimalSeparator && (value[2] === decimalSeparator || (value[2] === undefined && value.length === 2))) {
    return [value.substr(1), true];
  }
  if (value[0] === '-' && value[1] === '0' && (value[3] === decimalSeparator || (value[3] === undefined && value.length === 3))) {
    return [`-${value.substr(2)}`, true];
  }
  return [value, false];
};

export default fixFirstNumber;
