import getValueAsStrings from '../getValueAsStrings';

test('value is a number without decimal point', () => {
  const result = getValueAsStrings(1000);

  expect(result).toBe('1000');
});

test('value is a number with decimal point and without minimum and maximum digits', () => {
  const resultA = getValueAsStrings(1000.11);
  const resultB = getValueAsStrings(1000.10);

  expect(resultA).toBe('1000,11');
  expect(resultB).toBe('1000,1');
});

test('value decimal point is less that minimum digits', () => {
  const result = getValueAsStrings(1000.3, 3);

  expect(result).toBe('1000,300');
});

test('value decimal point is more that maximum digits', () => {
  const result = getValueAsStrings(1000.321, undefined, 2);

  expect(result).toBe('1000,32');
});

test('value is a negative number', () => {
  const result = getValueAsStrings(-1000);

  expect(result).toBe('-1000');
});

test('value is a number without decimal point and \'us\' separator', () => {
  const result = getValueAsStrings(1000, undefined, undefined,'us');

  expect(result).toBe('1000');
});

test('value is a number with decimal point without minimum and maximum digits and \'us\' separator', () => {
  const resultA = getValueAsStrings(1000.11, undefined, undefined,'us');
  const resultB = getValueAsStrings(1000.10, undefined, undefined,'us');

  expect(resultA).toBe('1000.11');
  expect(resultB).toBe('1000.1');
});

test('value is a negative number and \'us\' separator', () => {
  const result = getValueAsStrings(-1000, undefined, undefined,'us');

  expect(result).toBe('-1000');
});

test('minimum digits bigger that maximum digits', () => {
  const result = getValueAsStrings(10.23, 5, 3,'us');

  expect(result).toBe('10.230');
});