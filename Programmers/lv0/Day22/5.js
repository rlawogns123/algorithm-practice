// 부분 문자열인지 확인하기

function solution(my_string, target) {
  var answer = 0;
  answer = my_string.includes(target) ? 1 : 0;
  return answer;
}
