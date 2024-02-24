// 배열의 길이를 2의 거듭제곱으로 만들기

function solution(arr) {
  var answer = [];
  let cnt = 0;
  while (Math.pow(2, cnt) < arr.length) {
    cnt++;
  }
  const n = Math.pow(2, cnt) - arr.length;
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }
  answer = [...arr];
  return answer;
}
