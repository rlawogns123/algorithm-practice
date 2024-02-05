// 문자열의 뒤의 n글자

function solution(my_string, n) {
  var answer = "";
  answer += my_string.slice(-n);
  return answer;
}
