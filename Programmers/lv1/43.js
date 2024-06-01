// 3진법 뒤집기

function solution(n) {
  var answer = 0;
  let data = n.toString(3);
  data = data.split("").reverse().join("");
  answer = parseInt(data, 3);
  return answer;
}
