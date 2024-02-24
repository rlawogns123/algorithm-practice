// 문자열 묶기

function solution(strArr) {
  var answer = 0;
  let data = [];
  const max = Math.max(...strArr.map((e) => e.length));
  for (let i = 1; i <= max; i++) {
    const n = strArr.filter((e) => e.length === i);
    data.push(n.length);
  }
  answer = Math.max(...data);
  return answer;
}
