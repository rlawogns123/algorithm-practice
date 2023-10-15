const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const str = input.split(" ");
  let result = str.length;
  if (str[0] === "") result -= 1;
  if (str[str.length - 1] === "") result -= 1;

  console.log(result);
});
