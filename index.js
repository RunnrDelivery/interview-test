if (process.argv[2] === "1") {
  await import("./problem1.test.js");
} else if (process.argv[2] === "2") {
  await import("./problem2.test.js");
} else if (process.argv[2] === "3") {
  await import("./problem3.test.js");
} else {
  await Promise.all([
    import("./problem1.test.js"),
    import("./problem2.test.js"),
    import("./problem3.test.js"),
  ]);
}
