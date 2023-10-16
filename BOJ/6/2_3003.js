const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

// 킹 : 1, 퀸 : 1, 룩 : 2, 비숍 : 2, 나이트 : 2, 폰 8
rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const chess = [1, 1, 2, 2, 2, 8];
  const data = input.split(" ").map(Number);
  let result = [];

  for (let i = 0; i < chess.length; i++) result.push(chess[i] - data[i]);
  console.log(result.join(" "));
});
