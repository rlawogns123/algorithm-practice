// 왼쪽 오른쪽

function solution(str_list) {
  var answer = [];
  let n = 0;
  for (let i of str_list) {
    n = str_list.indexOf(i);
    if (i === "l") {
      answer = str_list.slice(0, n);
      break;
    } else if (i === "r") {
      answer = str_list.slice(n + 1);
      break;
    }
  }
  return answer;
}
