const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line;
}).on("close", function () {
  const data = input.toUpperCase();
  const setData = [...new Set(data)];
  let result = [];

  for (let i = 0; i < setData.length; i++) {
    let n = 0;
    for (let j = 0; j < data.length; j++) {
      if (setData[i] === data[j]) n++;
    }
    result.push(n);
  }

  const max = Math.max(...result);
  const maxIndex = result.indexOf(max);
  let check = true;

  for (let i = 0; i < result.length; i++) {
    if (result[i] === max && setData[maxIndex] !== setData[i]) {
      check = false;
    }
  }

  console.log(check ? setData[maxIndex] : "?");
});
