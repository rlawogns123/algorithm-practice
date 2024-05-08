// 정수 내림차순으로 배치하기

function solution(n) {
  var answer = 0;
  let data = String(n).split("");
  data.sort((a, b) => b - a);
  data = data.join("");
  answer = Number(data);
  return answer;
}
