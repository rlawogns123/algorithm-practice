// 문자 개수 세기

function solution(my_string) {
  var answer = [];
  for (let i = 65; i < 123; i++) {
    if (i === 91) {
      i += 6;
    }
    let str = String.fromCharCode(i);
    let cnt = 0;
    for (let j of my_string) {
      if (j === str) {
        cnt++;
      }
    }
    answer.push(cnt);
  }
  return answer;
}
