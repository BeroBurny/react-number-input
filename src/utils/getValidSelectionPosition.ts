import getNumberAndDecimalSeparators from "./getNumberAndDecimalSeparators";
import findIndexesOf from "./findIndexesOf";
import {SeparatorType} from "../types";

const getValidSelectionPosition = (position: number, beforeValue: string, afterValue: string, separatorType?: SeparatorType) => {
  const [numberSeparator] = getNumberAndDecimalSeparators(separatorType);

  const beforeIndexes = findIndexesOf(beforeValue, numberSeparator).filter(value => position >= value);
  const afterIndexes =  findIndexesOf(afterValue, numberSeparator).filter(value => position >= value);

  const offset = afterIndexes.length - beforeIndexes.length + (beforeIndexes.some(value => value === position) ? 1 : 0);

  const newPosition = position + offset
  return newPosition > 0 ? newPosition : 0;
};

export default getValidSelectionPosition;
