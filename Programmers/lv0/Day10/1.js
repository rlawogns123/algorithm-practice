// 문자열의 앞의 n글자

function solution(my_string, n) {
  var answer = "";
  answer += my_string.slice(0, n);
  return answer;
}
