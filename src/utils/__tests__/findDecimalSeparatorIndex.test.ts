import findDecimalSeparatorIndex from "../findDecimalSeparatorIndex";

test('value 10.123,69 without separator type', () => {
  const index = findDecimalSeparatorIndex('10.123,69');

  expect(index).toBe(6);
});

test('value 10.123,69 with \'eu\' as separator type', () => {
  const index = findDecimalSeparatorIndex('10.123,69', 'eu');

  expect(index).toBe(6);
});

test('value 10.123,69 with \'us\' as separator type', () => {
  const index = findDecimalSeparatorIndex('10.123,69', 'us');

  expect(index).not.toBe(6);
});

test('value 10,123.69 with \'eu\' as separator type', () => {
  const index = findDecimalSeparatorIndex('10,123.69', 'eu');

  expect(index).not.toBe(6);
});

test('value 10,123.69 with \'us\' as separator type', () => {
  const index = findDecimalSeparatorIndex('10,123.69', 'us');

  expect(index).toBe(6);
});