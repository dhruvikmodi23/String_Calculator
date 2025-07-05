const add = require("../stringCalculator");

describe("String Calculator TDD Kata", () => {
  
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
  test("throws exception for negative numbers", () => {
    expect(() => add("1,-2,3,-4")).toThrow(
      "negative numbers not allowed -2,-4"
    );
  });

  //Add test for missing '/n' in custom delimeter
  test('throws error for missing newline in custom delimiter', () => {
    expect(() => add("//;1;2")).toThrow("Missing newline after '//delimiter'");
  });

  //Add test for missing delimiter in custom delimiter
  test('throws error for empty custom delimiter', () => {
    expect(() => add("//\n1,2")).toThrow("Custom delimiter cannot be empty");
  });

  //Add test for number as custom delimiter
  test('throws error for empty custom delimiter', () => {
    expect(() => add("//1\n1,2")).toThrow(`Custom delimiter cannot contain numbers: "1"`);
  });

  //Add test for delimiter as special character
  test('throws error for empty custom delimiter', () => {
    expect(() => add("//$\n1,2")).toThrow(`Regex special characters not allowed in delimiter: "$"`);
  });
});
