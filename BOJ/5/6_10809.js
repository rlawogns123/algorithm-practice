const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const s = input;

  for (let i = 97; i < 123; i++) {
    process.stdout.write(s.indexOf(String.fromCharCode(i)) + " ");
  }
});
