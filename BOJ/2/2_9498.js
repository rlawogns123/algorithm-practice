const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const Score = Number(input);

  if (90 <= Score && Score <= 100) return console.log("A");
  if (80 <= Score && Score <= 89) return console.log("B");
  if (70 <= Score && Score <= 79) return console.log("C");
  if (60 <= Score && Score <= 69) return console.log("D");
  console.log("F");
});
