// 원하는 문자열 찾기

function solution(myString, pat) {
  var answer = 0;
  const a = myString.toUpperCase();
  const b = pat.toUpperCase();
  if (a.indexOf(b) === -1) {
    answer = 0;
  } else {
    answer = 1;
  }
  return answer;
}
