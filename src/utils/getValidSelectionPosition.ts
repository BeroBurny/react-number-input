const getValidSelectionPosition = (position: number, beforeValue: string, afterValue: string) => {
  const offset = afterValue.length - beforeValue.length - 1;

  if (afterValue.length === beforeValue.length) {
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
