// 배열 만들기 3

function solution(arr, intervals) {
  var answer = [];
  let data = [];
  for (let i of intervals) {
    data.push(arr.slice(i[0], i[1] + 1));
  }
  answer = data.reduce((prev, next) => {
    return prev.concat(next);
  });
  return answer;
}
