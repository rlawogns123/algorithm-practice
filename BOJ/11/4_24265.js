const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let num = 0;
for (let i = 1; i <= input - 1; i++) {
  num += i;
}
console.log(num);
console.log(2);
