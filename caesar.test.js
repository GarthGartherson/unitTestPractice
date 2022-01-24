const caesar = require("./caesar");

test("Letter Shift", () => {
  expect(caesar("abc", 5)).toMatch(/fgh/);
});

test("Word Shift", () => {
  expect(caesar("attack at dawn", 5)).toMatch(/fyyfhp fy ifbs/);
});

test("Puncuation Test", () => {
  expect(caesar("Hurry! The people are coming. Hide.", 5)).toMatch(
    /mzwwd! ymj ujtuqj fwj htrnsl. mnij./
  );
});
