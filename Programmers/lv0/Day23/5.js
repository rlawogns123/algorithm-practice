// 날짜 비교하기

function solution(date1, date2) {
  var answer = 0;
  const a = date1.join("");
  const b = date2.join("");
  answer = a - b < 0 ? 1 : 0;
  return answer;
}
