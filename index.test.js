import { expect, test } from "vitest";
import { AddNumbers } from ".";

test("addNumbers 1 + 2 result in 3", () => {
  expect(AddNumbers(1, 2)).eq(3);
});
