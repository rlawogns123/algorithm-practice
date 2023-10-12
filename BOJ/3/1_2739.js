const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const n = Number(input);

  for (i = 1; i <= 9; i++) {
    console.log(n, "*", i, "=", n * i);
  }
});
