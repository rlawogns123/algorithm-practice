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
  let result = 0;

  for (let i = 1; i <= n; i++) {
    result += i;
  }

  console.log(result);
});
