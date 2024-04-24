// 두 정수 사이의 합

function solution(a, b) {
  let answer = 0;
  let min = a > b ? b : a;
  let max = a > b ? a : b;
  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}
