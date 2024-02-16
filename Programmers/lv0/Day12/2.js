// 첫 번째로 나오는 음수

function solution(num_list) {
  var answer = [];
  for (let i of num_list) {
    if (i < 0) {
      answer.push(num_list.indexOf(i));
    }
  }
  return answer.length > 0 ? answer[0] : -1;
}
