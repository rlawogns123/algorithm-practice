// 수열과 구간 쿼리 1

function solution(arr, queries) {
  var answer = [];
  for (let data of queries) {
    const s = data[0];
    const e = data[1];
    for (let i = s; i <= e; i++) {
      arr[i] += 1;
    }
  }
  answer = [...arr];
  return answer;
}
