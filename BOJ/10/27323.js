const fs = require("fs");
const [A, B] = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
console.log(A * B);
