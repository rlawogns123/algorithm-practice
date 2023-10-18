const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = Number(input[0]);
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const str = input[i];
    let data = [];
    let isGroup = true;
    for (let j = 0; j < str.length; j++) {
      if (data.indexOf(str[j]) === -1) data.push(str[j]);

      if (data.indexOf(str[j]) !== data.length - 1) isGroup = false;
    }
    if (isGroup === true) answer++;
  }
  console.log(answer);
});
