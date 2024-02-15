// 가까운 1 찾기

function solution(arr, idx) {
  var answer = 0;
  const n = arr.indexOf(1, idx);
  return n >= idx ? n : -1;
}
