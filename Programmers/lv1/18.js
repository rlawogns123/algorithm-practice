// 자릿수 더하기

function solution(n) {
  var answer = 0;
  const data = String(n);
  for (let str of data) {
    answer += Number(str);
  }
  return answer;
}
