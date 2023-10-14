const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let data = [];
  for (let i = 0; i < 10; i++) {
    let n = Number(input[i]);
    data.push(n % 42);
  }

  const result = [...new Set(data)];
  console.log(result.length);
});
