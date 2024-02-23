// 무작위로 K개의 수 뽑기

function solution(arr, k) {
  var answer = [];
  answer = [...new Set(arr)];
  const n = answer.length;
  if (n > k) {
    return (answer = answer.slice(0, k));
  }
  if (n < k) {
    for (let i = 0; i < k - n; i++) {
      answer.push(-1);
    }
  }
  return answer;
}
