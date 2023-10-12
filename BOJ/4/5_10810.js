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
  for (let i = 0; i < n; i++) result.push(0);

  for (let l = 0; l < m; l++) {
    const nums = input[l + 1].split(" ").map(Number);
    const i = nums[0] - 1;
    const j = nums[1] - 1;
    const k = nums[2];

    for (let l = i; l <= j; l++) result.splice(l, 1, k);
  }
  for (let i = 0; i < result.length; i++) process.stdout.write(result[i] + " ");
});
