// 자연수 뒤집어 배열로 만들기

function solution(n) {
  var answer = [];
  let data = String(n).split("");
  data.reverse();
  data.forEach((str, idx) => (data[idx] = Number(str)));
  answer = data;
  return answer;
}
