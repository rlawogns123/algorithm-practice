const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const data = input.map(Number);
  const sortData = [...data].sort((a, b) => a - b);
  const maxIndex = data.findIndex((num) => num === sortData[8]);

  console.log(sortData[8]);
  console.log(maxIndex + 1);
});
