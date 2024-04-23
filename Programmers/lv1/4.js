// 같은 숫자는 싫어

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];
    if (arr[i + 1] === str) {
      continue;
    } else {
      answer.push(str);
    }
  }
  return answer;
}
