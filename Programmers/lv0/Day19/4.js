// 배열 만들기 6

function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (answer.length === 0) {
      answer.push(arr[i]);
      continue;
    }

    if (answer[answer.length - 1] === arr[i]) {
      answer.pop();
    } else {
      answer.push(arr[i]);
    }
  }
  return answer.length === 0 ? [-1] : answer;
}
