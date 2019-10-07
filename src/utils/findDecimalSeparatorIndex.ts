import {SeparatorType} from "../types";
import getNumberAndDecimalSeparators from "./getNumberAndDecimalSeparators";

const findDecimalSeparatorIndex = (value: string, separatorType?: SeparatorType) => {
  const [, decimalSeparator] = getNumberAndDecimalSeparators(separatorType);
  return value.indexOf(decimalSeparator);
};

export default findDecimalSeparatorIndex;
