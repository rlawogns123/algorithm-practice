const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const data = input.split(" ");
  const a = data[0];
  const b = data[1];
  const reverseA = Number(a.split("").reverse().join(""));
  const reverseB = Number(b.split("").reverse().join(""));

  console.log(reverseA > reverseB ? reverseA : reverseB);
});
