const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const data = input[0].split(" ");
  const cookTime = Number(input[1]);

  const h = Number(data[0]);
  const m = Number(data[1]);

  let resultH = h;
  let resultM = m + cookTime;

  if (resultM >= 60) {
    resultH += Math.floor(resultM / 60);
    resultM %= 60;
  }

  if (resultH > 23) resultH -= 24;

  console.log(resultH, resultM);
});
