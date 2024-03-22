// 조건에 맞게 수열 변환하기 3

function solution(arr, k) {
  var answer = [];
  for (let num of arr) {
    if (k % 2 === 0) {
      answer.push(num + k);
    } else {
      answer.push(num * k);
    }
  }
  return answer;
}
