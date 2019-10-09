import formatValue from "../formatValue";

test('if value is a number', () => {
  const result = formatValue(1000);

  expect(result).toBe('1.000');
});

test('if value is a number and \'us\' separator', () => {
  const result = formatValue(1000, 0, 'us');

  expect(result).toBe('1,000');
});

test('if value is a with digits', () => {
  const result = formatValue(1000, 3);

  expect(result).toBe('1.000,000');
});