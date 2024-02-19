// 길이에 따른 연산

function solution(num_list) {
  var answer = 0;
  const n = num_list.length;
  if (n >= 11) {
    for (let i of num_list) {
      answer += i;
    }
  } else {
    answer = 1;
    for (let i of num_list) {
      answer *= i;
    }
  }
  return answer;
}
