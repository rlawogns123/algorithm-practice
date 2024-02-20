// 특정한 문자를 대문자로 바꾸기

function solution(my_string, alp) {
  var answer = "";
  for (let str of my_string) {
    if (str === alp) {
      const temp = str.toUpperCase();
      my_string = my_string.replace(str, temp);
    }
  }
  answer += my_string;
  return answer;
}
