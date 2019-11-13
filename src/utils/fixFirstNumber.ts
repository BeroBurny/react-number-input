import {SeparatorType} from "../types";
import getNumberAndDecimalSeparators from "./getNumberAndDecimalSeparators";

const fixFirstNumber = (value: string, separatorType?: SeparatorType): [string, boolean] => {
  const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);

  if (value[0] === '0' && (value[2] === decimalSeparator || value[2] === undefined)) {
    return [value.substr(1), true];
  }
  return [value, false];
};

export default fixFirstNumber;
