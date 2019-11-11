import getValidSelectionPosition from "../getValidSelectionPosition";

test('position is negative', () => {
  const result = getValidSelectionPosition(-1, '0000', '0000');

  expect(result).toBe(0);
});

test('position if both values are same', () => {
  const result = getValidSelectionPosition(3, '0000', '0000');

  expect(result).toBe(3);
});

test('position if before value is longer', () => {
  const result = getValidSelectionPosition(3, '00000', '0000');

  expect(result).toBe(3);
});

test('position if after value is longer', () => {
  const result = getValidSelectionPosition(3, '0000', '00000');

  expect(result).toBe(3);
});

describe('multiple number delete', () => {
  it('1.239,48 => 19,48', () => {
    const result = getValidSelectionPosition(2, '1.239,48', '19,48');

    expect(result).toBe(1);
  });

  it('1.869,48 => 19,48', () => {
    const result = getValidSelectionPosition(1, '1.239,48', '19,48');

    expect(result).toBe(1);
  });

  it('4.896,66 => 496,66', () => {
    const result = getValidSelectionPosition(2, '4.896,66', '496,66');

    expect(result).toBe(1);
  });

  it('6.987,33 => 697,33', () => {
    const result = getValidSelectionPosition(3, '6.987,33 ', '697,33');

    expect(result).toBe(2);
  });

  it('48.793 => 4.893', () => {
    const result = getValidSelectionPosition(3, '48.793', '4.893');

    expect(result).toBe(3);
  });

  it('87,467 => 7', () => {
    const result = getValidSelectionPosition(0, '87,467', '7');

    expect(result).toBe(0);
  });

  it('64,593 => 6,000', () => {
    const result = getValidSelectionPosition(1, '64,593', '6,000');

    expect(result).toBe(1);
  });

  it('64,593 => 64', () => {
    const result = getValidSelectionPosition(2, '64,593', '64');

    expect(result).toBe(2);
  });
});
