// 정수 제곱근 판별

function solution(n) {
  var answer = 0;
  const x = Math.sqrt(n);
  answer = Number.isInteger(x) ? Math.pow(x + 1, 2) : -1;
  return answer;
}
