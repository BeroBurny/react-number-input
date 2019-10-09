import getValidSelectionPosition from "./getValidSelectionPosition";

test('position is negative', () => {
  const result = getValidSelectionPosition(-1, '0000', '0000');

  expect(result).toBe(0);
});

test('position if both values are same', () => {
  const result = getValidSelectionPosition(3, '0000', '0000');

  expect(result).toBe(3);
});

test('position if before value is longer', () => {
  const result = getValidSelectionPosition(3, '00000', '0000');

  expect(result).toBe(3);
});

test('position if after value is longer', () => {
  const result = getValidSelectionPosition(3, '0000', '00000');

  expect(result).toBe(3);
});

test('position get to negative number', () => {
  const result = getValidSelectionPosition(1, '000000', '000');

  expect(result).toBe(0);
});
