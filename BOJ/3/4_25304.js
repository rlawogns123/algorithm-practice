const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const x = Number(input[0]);
  const n = Number(input[1]);

  //   let sum = 0;
  let result = 0;

  for (let i = 2; i <= n + 1; i++) {
    const data = input[i].split(" ").map(Number);
    const a = data[0];
    const b = data[1];

    result += a * b;
  }

  if (result === x) return console.log("Yes");
  console.log("No");
});
