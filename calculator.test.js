const calculator = require("./calculator");

test("Check Addition", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("Check Subtraction", () => {
  expect(calculator.subtract(6, 2)).toBe(4);
});

test("Check Multiplication", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});

test("Check Division", () => {
  expect(calculator.divide(120, 10)).toBe(12);
});
