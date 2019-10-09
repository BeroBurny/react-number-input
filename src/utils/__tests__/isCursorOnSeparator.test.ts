import isCursorOnSeparator from "../isCursorOnSeparator";

test('on value 12.345.6789', () => {
  const value = '12.345.6789';
  expect(isCursorOnSeparator(value, 2)).toBeTruthy();
  expect(isCursorOnSeparator(value, 3)).not.toBeTruthy();
  expect(isCursorOnSeparator(value, 6)).toBeTruthy();
  expect(isCursorOnSeparator(value, 8)).not.toBeTruthy();
});

