const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = Number(input[0]);

  for (let i = 1; i <= t; i++) {
    const str = input[i];
    console.log(str[0] + str[str.length - 1]);
  }
});
