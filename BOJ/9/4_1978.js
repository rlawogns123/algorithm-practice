const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();

const N = Number(input.shift());
const array = input.shift().split(" ").slice(0, N).map(Number);

const answer = array.filter((number) => {
  for (let i = 2; number > i; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}).length;

console.log(answer);
