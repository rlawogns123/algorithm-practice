const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ").map(Number).sort();
}).on("close", function () {
  const a = input[0];
  const b = input[1];
  const c = input[2];

  let result;

  if (a === b && b === c) result = 10000 + a * 1000;
  else if (a === b || b === c) {
    result = 1000 + b * 100;
  } else result = c * 100;

  console.log(result);
});
