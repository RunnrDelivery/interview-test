import { vigenereEncrypt, vigenereDecrypt } from "./problem3.js";
import { assertEquals, test } from "./utils/test.js";

await test("problem3: encrypts properly", async () => {
  const plaintext = "attacking tonight";
  const key = "oculorhinolaryngology";
  assertEquals(vigenereEncrypt(plaintext, key), "ovnlqbpvthznzeuz");
});

await test("problem3: decrypts properly", async () => {
  const ciphertext = "ovnlqbpvthznzeuz";
  const key = "oculorhinolaryngology";
  assertEquals(vigenereDecrypt(ciphertext, key), "attackingtonight");
});

await test("problem 3: encrypts attack at dawn", async () => {
  const plaintext = "attack at dawn";
  const key = "lemon";
  assertEquals(vigenereEncrypt(plaintext, key), "lxfopvefrnhr");
});

await test("problem 3: decrypts attach at dawn", async () => {
  const ciphertext = "lxfopvefrnhr";
  const key = "lemon";
  assertEquals(vigenereDecrypt(ciphertext, key), "attackatdawn");
});
