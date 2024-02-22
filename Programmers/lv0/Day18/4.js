// 문자열 바꿔서 찾기

function solution(myString, pat) {
  var answer = 0;
  myString = myString
    .replaceAll("A", "C")
    .replaceAll("B", "A")
    .replaceAll("C", "B");
  answer = myString.includes(pat) ? 1 : 0;
  return answer;
}
