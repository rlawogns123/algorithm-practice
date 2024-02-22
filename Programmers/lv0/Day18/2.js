// 문자열 잘라서 정렬하기

function solution(myString) {
  var answer = [];
  const str = myString.split("x").sort();
  answer = str.filter((e) => e !== "");
  return answer;
}
