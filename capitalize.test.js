let capitalize = require("./capitalize");

test("Capitalize First Letter", () => {
  expect(capitalize("word")).toMatch(/Word/);
});

// test('but there is a "stop" in Christoph', () => {
//   expect("Christoph").toMatch(/stop/);
// });
