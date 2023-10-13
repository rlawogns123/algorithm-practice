const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const data = input[0].split(" ").map(Number);
  const n = data[0];
  const m = data[1];
  let result = [];
  for (let i = 1; i <= n; i++) result.push(i);

  for (let l = 1; l <= m; l++) {
    const nums = input[l].split(" ").map(Number);
    const i = nums[0] - 1;
    const j = nums[1] - 1;

    const x = result[i];
    const y = result[j];

    result.splice(i, 1, y);
    result.splice(j, 1, x);
  }

  for (let i = 0; i < result.length; i++) process.stdout.write(result[i] + " ");
});
