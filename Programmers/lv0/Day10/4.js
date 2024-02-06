// 세로 읽기

function solution(my_string, m, c) {
  var answer = "";
  let j = 0;
  for (let i = 0; i < my_string.length / m; i++) {
    const str = my_string.slice(j, j + m);
    j += m;
    answer += str[c - 1];
  }
  return answer;
}
