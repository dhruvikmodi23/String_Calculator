const add = require("../stringCalculator");

//Add test for empty string
test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

//Add test for single number
test('returns number for single number string', () => {
    expect(add("4")).toBe(4);
  });

  //Add test for two numbers which is separated with comma
  test('returns the sum of two comma-separated numbers', () => {
    expect(add('1,5')).toBe(6);
  });
