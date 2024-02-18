// n보다 커질 때까지 더하기

function solution(numbers, n) {
  var answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (answer > n) {
      break;
    }
    answer += numbers[i];
  }
  return answer;
}
