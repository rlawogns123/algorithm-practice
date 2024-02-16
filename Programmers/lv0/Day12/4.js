// 2의 영역

function solution(arr) {
  var answer = [];
  let data = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 2) {
      data.push(arr.indexOf(arr[i], i));
    }
  }

  if (data.length === 0) {
    answer.push(-1);
  } else {
    answer = arr.slice(data[0], data[data.length - 1] + 1);
  }
  return answer;
}
