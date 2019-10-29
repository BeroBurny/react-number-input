const getValidSelectionPosition = (position: number, beforeValue: string, afterValue: string) => {
  const offset = afterValue.length - beforeValue.length - 1;

  if (position !== 0 && beforeValue.length > 2 && afterValue.length === 1) {
    return 1;
  }

  if (afterValue.length === beforeValue.length && position >= 0) {
    return position;
  }

  if (offset >= 0) {
    return position + offset;
  }
  if (position + offset + 2 >= 0) {
    return position + offset + 2;
  }
  return 0
};

export default getValidSelectionPosition;
