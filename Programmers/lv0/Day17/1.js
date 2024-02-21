// 특정 문자열로 끝나는 가장 긴 부분 문자열 찾기

function solution(myString, pat) {
  var answer = "";
  const idx = myString.lastIndexOf(pat);
  answer += myString.slice(0, idx + pat.length);
  return answer;
}
