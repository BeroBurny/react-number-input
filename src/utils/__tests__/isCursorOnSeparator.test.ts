import isCursorOnSeparator from "../isCursorOnSeparator";

test('on value 12.345,36', () => {
  const value = '12.345,36';
  expect(isCursorOnSeparator(value, 2)).toBeTruthy();
  expect(isCursorOnSeparator(value, 3)).not.toBeTruthy();
  expect(isCursorOnSeparator(value, 6)).not.toBeTruthy();
});

test('on value 12.345.6789', () => {
  const value = '12.345.6789';
  expect(isCursorOnSeparator(value, 2)).toBeTruthy();
  expect(isCursorOnSeparator(value, 3)).not.toBeTruthy();
  expect(isCursorOnSeparator(value, 6)).toBeTruthy();
  expect(isCursorOnSeparator(value, 8)).not.toBeTruthy();
});

test('on value 12.345.6789 with separator \'eu\'', () => {
  const value = '12.345.6789';
  expect(isCursorOnSeparator(value, 2, 'eu')).toBeTruthy();
  expect(isCursorOnSeparator(value, 3, 'eu')).not.toBeTruthy();
  expect(isCursorOnSeparator(value, 6, 'eu')).toBeTruthy();
  expect(isCursorOnSeparator(value, 8, 'eu')).not.toBeTruthy();
});

test('on value 12,345,6789 with separator \'us\'', () => {
  const value = '12,345,6789';
  expect(isCursorOnSeparator(value, 2, 'us')).toBeTruthy();
  expect(isCursorOnSeparator(value, 3, 'us')).not.toBeTruthy();
  expect(isCursorOnSeparator(value, 6, 'us')).toBeTruthy();
  expect(isCursorOnSeparator(value, 8, 'us')).not.toBeTruthy();
});

