// 배열의 길이에 따라 다른 연산하기

function solution(arr, n) {
  var answer = [];
  for (let i = 0; i < arr.length; i += 2) {
    if (arr.length % 2 === 1) {
      arr[i] += n;
    } else {
      arr[i + 1] += n;
    }
  }
  answer = [...arr];
  return answer;
}
