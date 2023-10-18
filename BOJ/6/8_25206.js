const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let sumScore = 0;
  let scoreGrade = 0;
  for (let i = 0; i < input.length; i++) {
    let grade = input[i].slice(-2, input[i].length);
    let score = Number(input[i].slice(-6, input[i].length - 2));
    switch (grade) {
      case "A+":
        grade = 4.5;
        break;
      case "A0":
        grade = 4.0;
        break;
      case "B+":
        grade = 3.5;
        break;
      case "B0":
        grade = 3.0;
        break;
      case "C+":
        grade = 2.5;
        break;
      case "C0":
        grade = 2.0;
        break;
      case "D+":
        grade = 1.5;
        break;
      case "D0":
        grade = 1.0;
        break;
      case " F":
        grade = 0.0;
        break;
      case " P":
        grade = 0;
        score = 0;
        break;
    }
    scoreGrade += score * grade;
    sumScore += score;
  }
  console.log(scoreGrade / sumScore);
});
