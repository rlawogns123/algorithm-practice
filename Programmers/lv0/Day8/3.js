// 글자 이어 붙여 문자열 만들기

function solution(my_string, index_list) {
  var answer = "";
  for (let i = 0; i < index_list.length; i++) {
    answer += my_string[index_list[i]];
  }
  return answer;
}
