// 배열 비교하기

function solution(arr1, arr2) {
  var answer = 0;
  let a1 = 0;
  let a2 = 0;
  if (arr1.length > arr2.length) {
    return (answer = 1);
  }
  if (arr1.length < arr2.length) {
    return (answer = -1);
  }
  arr1.forEach((nums) => (a1 += nums));
  arr2.forEach((nums) => (a2 += nums));

  return a1 > a2 ? (answer = 1) : a1 < a2 ? (answer = -1) : 0;
}
