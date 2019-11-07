import getValidSelectionPosition from "./utils/getValidSelectionPosition";

// simple test to help me check if function work as intended
// 🤔 probably need to add property to function for end cursor position
// 🤔 check how do i received pointer location

it('1,239.48 => 13.48', () => {
  const result = getValidSelectionPosition(2, '1,239.48', '13.48');

  expect(result).toBe(1);
});

it('4,896.66 => 496.66', () => {
  const result = getValidSelectionPosition(2, '4,896.66', '496.66');

  expect(result).toBe(1);
});

it('6,987.33 => 697.33', () => {
  const result = getValidSelectionPosition(3, '6,987.33 ', '697.33');

  expect(result).toBe(2);
});

it('487.93 => 48.93', () => {
  const result = getValidSelectionPosition(2, '487.93', '48.93');

  expect(result).toBe(2);
});

it('87,467 => 7', () => {
  const result = getValidSelectionPosition(0, '87,467', '7');

  expect(result).toBe(0);
});

it('64,593 => 6', () => {
  const result = getValidSelectionPosition(1, '64,593', '6');

  expect(result).toBe(1);
});