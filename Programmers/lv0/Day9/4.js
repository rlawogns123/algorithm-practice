// 접미사 배열

function solution(my_string) {
  var answer = [];
  for (let i = -my_string.length; i <= -1; i++) {
    const str = my_string.slice(i);
    answer.push(str);
  }
  return answer.sort();
}
