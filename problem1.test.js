import { reverseString } from "./problem1.js";
import { assertEquals, test } from "./utils/test.js";

await test("reverses a basic string", () => {
  assertEquals(reverseString("hello"), "olleh");
});
