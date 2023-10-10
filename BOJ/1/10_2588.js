const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const A = Number(input[0]);
  const B = Number(input[1]);

  console.log(A * (B % 10));
  console.log(A * Math.floor((B % 100) / 10));
  console.log(A * Math.floor(B / 100));
  console.log(A * B);
});
