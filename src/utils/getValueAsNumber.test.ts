import getValueAsNumber from "./getValueAsNumber";

test('string \'21,312.23\' to be returned as number', () => {
  const result = getValueAsNumber('21,312.23', 'us');

  expect(result).toBe(21312.23);
});
