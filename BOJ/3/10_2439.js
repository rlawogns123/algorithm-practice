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
  let result = " ";
  let cnt = 1;

  for (let i = n - 1; i >= 0; i--) {
    result = " ".repeat(i) + "*".repeat(cnt);
    cnt++;
    console.log(result);
  }
});
