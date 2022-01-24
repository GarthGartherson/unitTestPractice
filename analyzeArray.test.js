const analyzeArray = require("./analyzeArray");

test("Identify Array Length", () => {
  expect(analyzeArray([1, 2, 3]).length).toBe(3);
});

test("Identify Array Average", () => {
  expect(analyzeArray([1, 2, 3]).average).toBe(2);
});

test("Identify Array Min", () => {
  expect(analyzeArray([2, 3, 4, 5]).min).toBe(2);
});

test("Identify Array Max", () => {
  expect(analyzeArray([2, 3, 4, 5]).max).toBe(5);
});

// const object = analyzeArray([1, 8, 3, 4, 2, 6]);

// object ==
//   {
//     average: 4,
//     min: 1,
//     max: 8,
//     length: 6,
//   };
