import sanitizeDecimalNumber from "../sanitizeDecimalNumber";

test(`if value is undefined without minimumDigits and maximumDigits`, () => {
  const result = sanitizeDecimalNumber();

  expect(result).toBe('');
});

test(`if value is undefined with minimumDigits of '4' and without maximumDigits`, () => {
  const result = sanitizeDecimalNumber(undefined, 4);

  expect(result).toBe('0000');
});

test(`if value is undefined without minimumDigits and with maximumDigits of '4'`, () => {
  const result = sanitizeDecimalNumber(undefined, undefined,4);

  expect(result).toBe('');
});

test(`if value is '430' without minimumDigits and maximumDigits`, () => {
  const result = sanitizeDecimalNumber('430');

  expect(result).toBe('430');
});

test(`if value is '430' with minimumDigits of '4' and without maximumDigits`, () => {
  const result = sanitizeDecimalNumber('430', 4);

  expect(result).toBe('4300');
});

test(`if value is '430' without minimumDigits and with maximumDigits of '4'`, () => {
  const result = sanitizeDecimalNumber('430', undefined, 4);

  expect(result).toBe('430');
});

test(`if value is '42760' without minimumDigits and maximumDigits`, () => {
  const result = sanitizeDecimalNumber('42760');

  expect(result).toBe('42760');
});

test(`if value is '42760' with minimumDigits of '4' and without maximumDigits`, () => {
  const result = sanitizeDecimalNumber('42760', 4);

  expect(result).toBe('42760');
});

test(`if value is '42760' without minimumDigits and with maximumDigits of '4'`, () => {
  const result = sanitizeDecimalNumber('42760', undefined, 4);

  expect(result).toBe('4276');
});