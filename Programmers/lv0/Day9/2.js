// 부분 문자열 이어 붙여 문자열 만들기

function solution(my_strings, parts) {
  var answer = "";
  let i = 0;
  for (let data of my_strings) {
    const [s, e] = parts[i];
    const str = data.slice(s, e + 1);
    answer += str;
    i++;
  }
  return answer;
}
