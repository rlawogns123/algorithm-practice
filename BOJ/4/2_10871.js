const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const arr = input[0].split(" ").map(Number);
  const n = arr[0];
  const x = arr[1];
  const a = input[1].split(" ").map(Number);

  const data = a.filter((num) => num < x);
  let result = "";

  for (let i = 0; i < data.length; i++) result += data[i] + " ";

  console.log(result);
});
