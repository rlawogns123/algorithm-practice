// x 사이의 개수

function solution(myString) {
  var answer = [];
  const data = myString.split("x");
  for (let str of data) {
    answer.push(str.length);
  }
  return answer;
}
