const add = require("../stringCalculator");

//Add test for empty string
test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

//Add test for single number
test("returns number for single number string", () => {
  expect(add("4")).toBe(4);
});

//Add test for two numbers which is separated with comma
test("returns the sum of two comma-separated numbers", () => {
  expect(add("1,5")).toBe(6);
});

//Add test for unknown amount of numbers
test("returns the sum of any amount of numbers", () => {
  expect(add("1,2,3,4,5")).toBe(15);
});

//Add test for newline delimiter
test("handles new lines between numbers", () => {
  expect(add("1\n2,3")).toBe(6);
});

//Add test for custom delimiter
test("supports custom delimiters", () => {
  expect(add("//;\n1;2")).toBe(3);
});

//Add test for negative numbers
test('throws exception for negative numbers', () => {
  expect(() => add('1,-2,3,-4')).toThrow('negative numbers not allowed -2,-4');
});

