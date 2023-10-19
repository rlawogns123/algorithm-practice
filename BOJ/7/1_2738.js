const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, m] = input[0].split(" ").map(Number);

  let arrayA = [];
  for (let i = 1; i <= n; i++) {
    let row = input[i].split(" ").map(Number);
    for (let k = 0; k < m; k++) {
      arrayA.push(row);
    }
  }
  let arrayB = [];
  for (let i = n + 1; i <= n * 2; i++) {
    let row = input[i].split(" ").map(Number);
    for (let k = 0; k < m; k++) {
      arrayB.push(row);
    }
  }
  let answer = [];
  for (let i = 0; i < n; i++) {
    let row = [];
    for (let k = 0; k < m; k++) {
      row.push(arrayA[i][k] + arrayB[i][k]);
    }
    answer.push(row.join(" "));
  }
  console.log(answer.join("\n"));
});
