const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  const score = input[1].split(" ").map(Number);
  const maxScore = Math.max(...score);
  let newScore = 0;

  for (let i = 0; i < n; i++) newScore += (score[i] / maxScore) * 100;

  console.log(newScore / n);
});
