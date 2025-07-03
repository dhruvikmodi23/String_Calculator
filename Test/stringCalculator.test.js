const add = require("../stringCalculator");

test("returns 0 for empty string", () => {
  expect(add("")).toBe(0);
});

test('returns number for single number string', () => {
    expect(add("4")).toBe(4);
  });
