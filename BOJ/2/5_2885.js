const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  const H = Number(input[0]);
  const M = Number(input[1]);

  let resultH;
  let resultM;

  if (M < 45) {
    resultM = M + 15;
    if (H === 0) {
      resultH = 23;
    } else {
      resultH = H - 1;
    }
  } else {
    resultH = H;
    resultM = M - 45;
  }

  console.log(resultH, resultM);
});
