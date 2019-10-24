import formatValue from "../formatValue";

describe('value as a number', () => {
  test('if value is a number without decimal point', () => {
    const result = formatValue(1000);

    expect(result).toBe('1.000');
  });

  test('if value is a number with decimal point and without minimum and maximum digits', () => {
    const resultA = formatValue(1000.11);
    const resultB = formatValue(1000.10);

    expect(resultA).toBe('1.000,11');
    expect(resultB).toBe('1.000,1');
  });

  test('if value decimal point is less that minimum digits', () => {
    const result = formatValue(1000.3, 3);

    expect(result).toBe('1.000,300');
  });

  test('if value decimal point is more that maximum digits', () => {
    const result = formatValue(1000.321, undefined, 2);

    expect(result).toBe('1.000,32');
  });

  test('if value is a negative number', () => {
    const result = formatValue(-1000);

    expect(result).toBe('-1.000');
  });

  test('if value is a number without decimal point and \'us\' separator', () => {
    const result = formatValue(1000, undefined, undefined,'us');

    expect(result).toBe('1,000');
  });

  test('if value is a number with decimal point without minimum and maximum digits and \'us\' separator', () => {
    const resultA = formatValue(1000.11, undefined, undefined,'us');
    const resultB = formatValue(1000.10, undefined, undefined,'us');

    expect(resultA).toBe('1,000.11');
    expect(resultB).toBe('1,000.1');
  });

  test('if value is a negative number and \'us\' separator', () => {
    const result = formatValue(-1000, undefined, undefined,'us');

    expect(result).toBe('-1,000');
  });
});

describe('value as a string', () => {
  test('if value is a number without decimal point', () => {
    const resultA = formatValue('1000');
    const resultB = formatValue('1000');

    expect(resultA).toBe('1.000');
    expect(resultB).toBe('1.000');
  });

  test('if value is a number with decimal point and without minimum and maximum digits', () => {
    const resultA = formatValue('1000,11');
    const resultB = formatValue('1000,10');
    const resultC = formatValue('1.000,11');
    const resultD = formatValue('1.000,10');

    expect(resultA).toBe('1.000,11');
    expect(resultB).toBe('1.000,10');
    expect(resultC).toBe('1.000,11');
    expect(resultD).toBe('1.000,10');
  });

  test('if value decimal point is less that minimum digits', () => {
    const resultA = formatValue('1000,3', 3);
    const resultB = formatValue('1.000,3', 3);

    expect(resultA).toBe('1.000,300');
    expect(resultB).toBe('1.000,300');
  });

  test('if value decimal point is more that maximum digits', () => {
    const resultA = formatValue('1000,321', undefined, 2);
    const resultB = formatValue('1.000,321', undefined, 2);

    expect(resultA).toBe('1.000,32');
    expect(resultB).toBe('1.000,32');
  });

  test('if value is a negative number', () => {
    const resultA = formatValue('-1000');
    const resultB = formatValue('-1.000');

    expect(resultA).toBe('-1.000');
    expect(resultB).toBe('-1.000');
  });

  test('if value is a number without decimal point and \'us\' separator', () => {
    const resultA = formatValue('1000', undefined, undefined,'us');
    const resultB = formatValue('1,000', undefined, undefined,'us');

    expect(resultA).toBe('1,000');
    expect(resultB).toBe('1,000');
  });

  test('if value is a number with decimal point without minimum and maximum digits and \'us\' separator', () => {
    const resultA = formatValue('1000.11', undefined, undefined,'us');
    const resultB = formatValue('1000.10', undefined, undefined,'us');
    const resultC = formatValue('1,000.11', undefined, undefined,'us');
    const resultD = formatValue('1,000.10', undefined, undefined,'us');

    expect(resultA).toBe('1,000.11');
    expect(resultB).toBe('1,000.10');
    expect(resultC).toBe('1,000.11');
    expect(resultD).toBe('1,000.10');
  });

  test('if value is a negative number and \'us\' separator', () => {
    const resultA = formatValue('-1000', undefined, undefined,'us');
    const resultB = formatValue('-1,000', undefined, undefined,'us');

    expect(resultA).toBe('-1,000');
    expect(resultB).toBe('-1,000');
  });
});
