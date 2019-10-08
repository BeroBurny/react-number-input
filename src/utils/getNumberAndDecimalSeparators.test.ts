import getNumberAndDecimalSeparators from "./getNumberAndDecimalSeparators";

test('without parameters', () => {
  const [numberSeparator, decimalSeparator] = getNumberAndDecimalSeparators();

  expect(numberSeparator).toBe('.');
  expect(decimalSeparator).toBe(',');
});

test('\'eu\' as separator type', () => {
  const [numberSeparator, decimalSeparator] = getNumberAndDecimalSeparators('eu');

  expect(numberSeparator).toBe('.');
  expect(decimalSeparator).toBe(',');
});

test('\'us\' as separator type', () => {
  const [numberSeparator, decimalSeparator] = getNumberAndDecimalSeparators('us');

  expect(numberSeparator).toBe(',');
  expect(decimalSeparator).toBe('.');
});
