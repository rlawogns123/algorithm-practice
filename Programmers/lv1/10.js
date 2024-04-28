// 문자열 다루기 기본

function solution(s) {
  var answer = true;
  if (s.length !== 4 && s.length !== 6) {
    answer = false;
  }
  if (isNaN(s)) {
    answer = false;
  }
  return answer;
}
