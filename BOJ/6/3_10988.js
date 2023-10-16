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

  for (let i = 1; i <= 2 * n - 1; i++) {
    console.log(
      " ".repeat(i < n ? n - i : i - n) +
        "*".repeat(i < n ? 2 * (i - 1) + 1 : (2 * n - i) * 2 - 1)
    );
  }
});
