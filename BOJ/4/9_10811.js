const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [n, m] = input[0].split(" ").map((x) => parseInt(x));
  let data = [];

  for (let i = 1; i <= n; i++) data.push(i);

  for (let i = 1; i <= m; i++) {
    const a = Number(input[i][0]);
    const b = Number(input[i][2]);

    let temp = [];
    for (let i = a - 1; i < b; i++) temp.push(data[i]);

    temp.reverse();
    data.splice(a - 1, b - a + 1, ...temp);
  }
  console.log(data.join(" "));
});
