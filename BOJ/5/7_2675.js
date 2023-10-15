const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = Number(input[0]);

  for (let i = 1; i <= t; i++) {
    const data = input[i].split(" ");
    const r = data[0];
    const s = data[1];
    let result = [];

    for (let j = 0; j < s.length; j++) {
      result.push(s[j].repeat(r));
    }
    console.log(result.join(""));
  }
});
