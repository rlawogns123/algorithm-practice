// l로 만들기

function solution(myString) {
  var answer = "";
  for (let str of myString) {
    if (str.charCodeAt() < 108) {
      answer += "l";
    } else {
      answer += str;
    }
  }
  return answer;
}
