// 9로 나눈 나머지

function solution(number) {
  var answer = 0;
  let num = 0;
  for (let i = 0; i < number.length; i++) {
    num += Number(number[i]);
  }
  answer = num % 9;
  return answer;
}
