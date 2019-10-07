import getNumberAndDecimalSeparators from "./getNumberAndDecimalSeparators";

test('function without parameters', () => {
  const [numberSeparator, decimalSeparator] = getNumberAndDecimalSeparators();

  expect(numberSeparator).toBe('.');
  expect(decimalSeparator).toBe(',');
});

test('use \'eu\' as separator type', () => {
  const [numberSeparator, decimalSeparator] = getNumberAndDecimalSeparators('eu');

  expect(numberSeparator).toBe('.');
  expect(decimalSeparator).toBe(',');
});

test('use \'us\' as separator type', () => {
  const [numberSeparator, decimalSeparator] = getNumberAndDecimalSeparators('us');

  expect(numberSeparator).toBe(',');
  expect(decimalSeparator).toBe('.');
});
