// 배열의 원소 삭제하기

function solution(arr, delete_list) {
  var answer = [];
  answer = arr.filter((e) => !delete_list.includes(e));
  return answer;
}
