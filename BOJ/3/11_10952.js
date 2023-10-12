const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input.length - 1; i++) {
    const data = input[i].split(" ").map(Number);
    console.log(data[0] + data[1]);
  }
});
