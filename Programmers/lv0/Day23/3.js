// 정수 찾기

function solution(num_list, n) {
  var answer = 0;
  answer = num_list.includes(n) ? 1 : 0;
  return answer;
}
