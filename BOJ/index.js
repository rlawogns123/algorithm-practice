// 1. 입력값이 한 개일 때
{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = line;
  }).on("close", function () {
    // 솔루션
  });
}

// 2. 입력값이 여러 개일 때
// ex) 110 78 158
{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input = line.split(" ");
  }).on("close", function () {
    // 솔루션
  });
}

// 3. 입력값이 여러 줄일 때
// ex)
// 110
// 78
// 158
{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input.push(line);
  }).on("close", function () {
    // 솔루션
  });
}

// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에는 공백으로 구분된 입력값이 주어질 때
// ex)
// 3
// 110 78 158
{
  const readline = require("readline");
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  let input = [];

  rl.on("line", function (line) {
    input.push(line);
  }).on("close", function () {
    const A = Number(input[0]);
    const B = input[1].split(" ");

    // 솔루션
  });
}
