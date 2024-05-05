// 이상한 문자 만들기

function solution(s) {
  var answer = "";
  let data = [];
  data = s.split(" ");
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data[i].length; j++) {
      if (j % 2 === 0) {
        answer += data[i][j].toUpperCase();
      } else {
        answer += data[i][j].toLowerCase();
      }
    }
    if (i < data.length - 1) {
      answer += " ";
    }
  }
  return answer;
}
