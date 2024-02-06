// 문자열 뒤집기

function solution(my_string, s, e) {
  var answer = "";
  let arr = [...my_string];
  const str = arr
    .slice(s, e + 1)
    .reverse()
    .join("");
  arr.splice(s, e - s + 1, str);
  answer += arr.join("");

  return answer;
}
