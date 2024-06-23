// 둘만의 암호

function solution(s, skip, index) {
  var answer = "";
  for (let str of s) {
    let ASCII = str.charCodeAt();
    for (let i = 0; i < index; i++) {
      ASCII++;
      if (ASCII > 122) {
        ASCII -= 26;
      }
      while (skip.includes(String.fromCharCode(ASCII))) {
        ASCII++;
        if (ASCII > 122) {
          ASCII -= 26;
        }
      }
    }
    answer += String.fromCharCode(ASCII);
  }
  return answer;
}
