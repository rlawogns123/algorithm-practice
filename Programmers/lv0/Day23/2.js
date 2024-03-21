// 꼬리 문자열

function solution(str_list, ex) {
  var answer = "";
  for (let str of str_list) {
    if (!str.includes(ex)) {
      answer += str;
    }
  }
  return answer;
}
