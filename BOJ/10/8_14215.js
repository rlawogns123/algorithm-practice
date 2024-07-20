const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [a, b, c] = input
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

while (a + b <= c) {
  c = c - 1;
}

console.log(a + b + c);
