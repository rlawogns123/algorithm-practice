// 숫자 짝꿍

function solution(X, Y) {
  var answer = "";
  X = X.split("");
  Y = Y.split("");
  for (let i = 9; i >= 0; i--) {
    const tempX = X.filter((e) => Number(e) === i).length;
    const tempY = Y.filter((e) => Number(e) === i).length;
    answer += String(i).repeat(Math.min(tempX, tempY));
  }
  answer = answer.length === 0 ? "-1" : Number(answer) === 0 ? "0" : answer;
  return answer;
}
