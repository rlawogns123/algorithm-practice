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
  let result = "";
  for (let i = 1; i <= t; i++) {
    const data = input[i].split(" ").map(Number);
    const a = data[0];
    const b = data[1];
    result += a + b + "\n";
  }

  console.log(result);
});
