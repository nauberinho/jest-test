const summ = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(summ(1, 2)).toBe(3);
});
