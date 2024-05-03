// 시저 암호

function solution(s, n) {
  var answer = "";
  for (let str of s) {
    let ASCII = str.charCodeAt();
    if (ASCII > 64 && ASCII < 91) {
      ASCII += n;
      if (ASCII > 90) {
        ASCII -= 26;
      }
    }
    if (ASCII > 96 && ASCII < 123) {
      ASCII += n;
      if (ASCII > 122) {
        ASCII -= 26;
      }
    }
    answer += String.fromCharCode(ASCII);
  }
  return answer;
}
