const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, "a").length);
});
