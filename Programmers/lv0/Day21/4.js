// 문자열 정수의 합

function solution(num_str) {
  var answer = 0;
  for (let num of num_str) {
    answer += Number(num);
  }
  return answer;
}
