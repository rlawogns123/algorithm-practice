const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const n = Number(input);
  let result = "int";
  for (let i = 0; i < n / 4; i++) {
    result = "long " + result;
  }

  console.log(result);
});
