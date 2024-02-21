// 공백으로 구분하기 2

function solution(my_string) {
  var answer = [];
  let str = my_string.split(" ");
  answer = str.filter((e) => e !== "");
  return answer;
}
