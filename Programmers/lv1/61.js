// 명예의 전당 (1)

function solution(k, score) {
  var answer = [];
  let data = [];
  for (let i = 0; i < score.length; i++) {
    data.push(score[i]);
    data = data.sort((a, b) => b - a);
    if (data.length > k) {
      data.pop();
    }
    answer.push(Math.min(...data));
  }

  return answer;
}
