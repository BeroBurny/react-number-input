import getValueAsNumber from "../getValueAsNumber";

test('string \'21.312,23\' to be returned as number without separator', () => {
  const result = getValueAsNumber('21.312,23');

  expect(result).toBe(21312.23);
});

test('string \'-21.312,23\' to be returned as number without separator', () => {
  const result = getValueAsNumber('-21.312,23');

  expect(result).toBe(21312.23);
});


test('string \'21.312,23\' to be returned as number with separator \'eu\'', () => {
  const result = getValueAsNumber('21.312,23', 'eu');

  expect(result).toBe(21312.23);
});

test('string \'-21.312,23\' to be returned as number with separator \'eu\'', () => {
  const result = getValueAsNumber('-21.312,23', 'eu');

  expect(result).toBe(-21312.23);
});

test('string \'21,312.23\' to be returned as number with separator \'us\'', () => {
  const result = getValueAsNumber('21,312.23', 'us');

  expect(result).toBe(21312.23);
});

test('string \'-21,312.23\' to be returned as number with separator \'us\'', () => {
  const result = getValueAsNumber('-21,312.23', 'us');

  expect(result).toBe(-21312.23);
});
