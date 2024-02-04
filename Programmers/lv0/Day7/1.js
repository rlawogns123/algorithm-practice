// 수열과 구간 쿼리 4

function solution(arr, queries) {
  var answer = [];

  for (let [s, e, k] of queries) {
    for (let i = s; i <= e; i++) {
      if (i % k === 0) {
        arr[i] += 1;
      }
    }
  }
  answer = [...arr];
  return answer;
}
