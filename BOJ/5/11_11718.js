const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  for (let i = 0; i < input.length; i++) {
    let str = input[i];
    if (str[0] === " ") str.shift();
    if (str[str.length - 1] === " ") str.pop();

    console.log(str);
  }
});
