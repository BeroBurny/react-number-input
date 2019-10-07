import getNumberAndDecimalSeparators from "./getNumberAndDecimalSeparators";
import findIndexesOf from "./findIndexesOf";
import { SeparatorType } from "../types";

const isCursorOnSeparator = (value: string, cursorLocation: number, separatorType?: SeparatorType) => {
  const [numberSeparator] = getNumberAndDecimalSeparators(separatorType);

  return findIndexesOf(value, numberSeparator).some(index => index === cursorLocation);
};

export default isCursorOnSeparator;
