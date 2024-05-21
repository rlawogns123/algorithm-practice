// 예산

function solution(d, budget) {
  var answer = 0;
  let data = d.sort((a, b) => a - b);
  let sum = 0;
  for (let cost of d) {
    sum += cost;
    if (sum > budget) {
      sum -= cost;
      break;
    }
    answer++;
  }
  return answer;
}
