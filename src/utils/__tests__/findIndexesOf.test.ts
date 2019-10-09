import findIndexesOf from "../findIndexesOf";

test('\'.\' index location in \'10.1.23\'', () => {
  const number = '10.1.23';
  const result = findIndexesOf(number, '.');

  expect(result.length).toBe(2);
  expect(result[0]).toBe(2);
  expect(result[1]).toBe(4);
});
