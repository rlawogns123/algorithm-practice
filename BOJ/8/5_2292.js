const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", function (line) {
  input = +line.toString();
}).on("close", function () {
  let count = [0];
  let bee = [1];
  while (true) {
    if (input <= bee[bee.length - 1]) {
      break;
    }
    count.push(count[count.length - 1] + 6);
    bee.push(count[count.length - 1] + bee[bee.length - 1]);
  }
  console.log(bee.length);
  process.exit();
});
