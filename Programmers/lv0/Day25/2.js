// 특별한 이차원 배열 2

function solution(arr) {
  var answer = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === arr[j][i]) {
        continue;
      } else {
        answer = 0;
        break;
      }
    }
  }
  return answer;
}
