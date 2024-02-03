// 배열 만들기 2

function solution(l, r) {
  var answer = [];
  const findNum = ["1", "2", "3", "4", "6", "7", "8", "9"];
  for (let i = l; i <= r; i++) {
    let data = [...String(i)];
    if (data.every((num) => num === "5" || num === "0")) {
      answer.push(i);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}
