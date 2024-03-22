// 특별한 이차원 배열 1

function solution(n) {
  let answer = new Array(n).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) {
        answer[i][j] = 1;
      }
    }
  }
  return answer;
}
