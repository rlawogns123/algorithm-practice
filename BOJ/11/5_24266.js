const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let num = BigInt(input);

console.log(`${num * num * num}`);
console.log("3");
