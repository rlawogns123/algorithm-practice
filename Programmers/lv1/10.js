// 문자열 다루기 기본

function solution(s) {
  var answer = true;
  const data = s.split("");
  if (s.length !== 4 && s.length !== 6) {
    answer = false;
  }
  if (data.some((str) => isNaN(str))) {
    answer = false;
  }
  return answer;
}
