// 내적

function solution(a, b) {
  var answer = 0;
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  answer = sum;
  return answer;
}
