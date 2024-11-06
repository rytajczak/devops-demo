import { expect, test } from "vitest";

test("server returns hello world text", async () => {
  const res = await fetch("http://localhost:3000/");
  const body = await res.json();

  expect(body.msg).toEqual("hello, world!");
});
