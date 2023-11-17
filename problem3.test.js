import { isPrime } from "./problem3.js";
import { assertEquals, test } from "./utils/test.js";

await test("isPrime", () => {
  assertEquals(isPrime(1), false);
  assertEquals(isPrime(2), true);
  assertEquals(isPrime(3), true);
  assertEquals(isPrime(4), false);
  assertEquals(isPrime(5), true);
  assertEquals(isPrime(6), false);
  assertEquals(isPrime(7), true);
  assertEquals(isPrime(8), false);
  assertEquals(isPrime(9), false);
  assertEquals(isPrime(10), false);
  assertEquals(isPrime(11), true);
  assertEquals(isPrime(12), false);
  assertEquals(isPrime(13), true);
  assertEquals(isPrime(14), false);
  assertEquals(isPrime(15), false);
  assertEquals(isPrime(16), false);
  assertEquals(isPrime(17), true);
  assertEquals(isPrime(18), false);
  assertEquals(isPrime(19), true);
  assertEquals(isPrime(20), false);
});
