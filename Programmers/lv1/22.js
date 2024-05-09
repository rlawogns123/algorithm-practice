// 제일 작은 수 제거하기

function solution(arr) {
  var answer = [];
  const min = arr.indexOf(Math.min(...arr));
  arr.splice(min, 1);
  answer = arr.length === 0 ? [-1] : arr;
  return answer;
}
