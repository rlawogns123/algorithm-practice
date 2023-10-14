const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = [];
  for (let i = 1; i <= 30; i++) n.push(i);

  let data = [];
  for (let i = 0; i < 28; i++) data.push(Number(input[i]));

  for (let i = 0; i < n.length; i++) {
    for (let k = 0; k < data.length; k++) {
      if (n[i] === data[k]) {
        n.splice(i, 1);
        i--;
      }
    }
  }

  for (let i = 0; i < n.length; i++) console.log(n[i]);
});
