// 실패율

function solution(N, stages) {
  var answer = [];
  let data = [];
  for (let i = 1; i <= N; i++) {
    let reachUsers = stages.filter((e) => e >= i).length;
    let failUsers = stages.filter((e) => e === i).length;
    data.push([i, failUsers / reachUsers]);
  }
  data.sort((a, b) => b[1] - a[1]);
  answer = data.map((e) => e[0]);
  return answer;
}
