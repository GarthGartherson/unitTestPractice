const reverse = require("./reverse");

test("Reverses the word test", () => {
  expect(reverse("dog")).toMatch(/god/);
});
