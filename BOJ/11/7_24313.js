const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const c = parseInt(input[1]);
const n0 = parseInt(input[2]);

b <= (c - a) * n0 && c >= a ? console.log(1) : console.log(0);
