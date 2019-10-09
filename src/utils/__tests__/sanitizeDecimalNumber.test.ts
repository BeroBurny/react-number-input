import sanitizeDecimalNumber from "../sanitizeDecimalNumber";

test('if value is undefined with \'4\' digits', () => {
  const result = sanitizeDecimalNumber(undefined, 4);

  expect(result).toBe('0000');
});

test('if value is \'430\' with \'4\' digits', () => {
  const result = sanitizeDecimalNumber('430', 4);

  expect(result).toBe('4300');
});

test('if value is \'12345\' with \'4\' digits', () => {
  const result = sanitizeDecimalNumber('12345', 4);

  expect(result).toBe('1234');
});

test('if value is \'9865\' with \'4\' digits', () => {
  const result = sanitizeDecimalNumber('9865', 4);

  expect(result).toBe('9865');
});