// 문자열 여러 번 뒤집기

function solution(my_string, queries) {
  var answer = "";
  for (let [a, b] of queries) {
    let data = [...my_string];
    let temp = data
      .slice(a, b + 1)
      .reverse()
      .join("");
    data.splice(a, b - a + 1, temp);
    my_string = data.join("");
    answer = my_string;
  }
  return answer;
}
