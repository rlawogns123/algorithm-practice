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
  const data = input[1].split("").map(Number);
  let result = 0;

  for (let i = 0; i < data.length; i++) result += data[i];
  console.log(result);
});
