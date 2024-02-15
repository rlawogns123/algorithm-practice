// 글자 지우기

function solution(my_string, indices) {
  var answer = "";
  let arr = [...my_string];
  for (let i of indices) {
    delete arr[i];
  }
  answer = arr.join("");
  return answer;
}
