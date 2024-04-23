// 나누어 떨어지는 숫자 배열

function solution(arr, divisor) {
  var answer = [];
  for (let num of arr) {
    if (num % divisor === 0) {
      answer.push(num);
    }
  }
  if (answer.length === 0) {
    answer.push(-1);
  } else {
    answer.sort((a, b) => a - b);
  }
  console.log(answer);
  return answer;
}
