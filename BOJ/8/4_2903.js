const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  let n = Number(input);
  let dot = 2;
  for (let i = 0; i < n; i++) {
    dot += Math.pow(2, i);
  }
  console.log(Math.pow(dot, 2));
});
