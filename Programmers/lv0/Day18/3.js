// 간단한 식 계산하기

function solution(binomial) {
  var answer = 0;
  const str = binomial.split(" ");
  const a = Number(str[0]);
  const b = Number(str[2]);
  const op = str[1];
  switch (op) {
    case "+":
      answer = a + b;
      break;
    case "-":
      answer = a - b;
      break;
    case "*":
      answer = a * b;
      break;
    case "/":
      answer = a / b;
      break;
  }
  return answer;
}
