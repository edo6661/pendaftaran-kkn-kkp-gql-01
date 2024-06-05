import { sum } from "./index.ts";
const result = sum(1, 2);
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(result);
});
