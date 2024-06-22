// 크기가 작은 부분문자열

function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length - p.length + 1; i++) {
    const data = t.substring(i, p.length + i);
    if (Number(data) <= p) {
      answer++;
    }
  }
  return answer;
}
