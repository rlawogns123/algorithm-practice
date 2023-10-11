const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const A = Number(input);

  if (A % 4 === 0 && (A % 100 !== 0 || A % 400 === 0)) return console.log(1);
  console.log(0);
});
