// A 강조하기

function solution(myString) {
  for (let str of myString) {
    if (str === "a") myString = myString.replace(str, str.toUpperCase());
    if (str !== "A") myString = myString.replace(str, str.toLowerCase());
  }
  var answer = "";
  answer += myString;
  return answer;
}
