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
  const data = input[1].split(" ").map(Number);
  const v = Number(input[2]);

  const result = data.filter((num) => num === v);
  console.log(result.length);
});
