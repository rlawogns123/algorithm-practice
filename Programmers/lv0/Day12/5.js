// 배열 조각하기

function solution(arr, query) {
  var answer = [...arr];
  for (let i = 0; i < query.length; i++) {
    const n = query[i];
    if (i % 2 === 0) {
      answer.splice(n + 1, answer.length - 1);
    } else {
      answer.splice(0, n);
    }
  }
  return answer;
}
