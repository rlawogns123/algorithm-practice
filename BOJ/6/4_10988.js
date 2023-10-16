const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const result = input.split("").reverse().join("");
  console.log(input === result ? 1 : 0);
});
