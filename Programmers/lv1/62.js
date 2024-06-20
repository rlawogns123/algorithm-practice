// 문자열 나누기

function solution(s) {
  var answer = [];
  let data = s;
  let a = 0;
  let b = 0;
  let j = 0;
  let str = s[0];
  for (let i = 0; i < s.length; i++) {
    if (str === data[j]) {
      a++;
    } else {
      b++;
    }
    if (a === b) {
      const temp = data.substring(0, j + 1);
      data = data.substring(j + 1);
      answer.push(temp);
      j = 0;
      str = data[0];
    } else {
      j++;
    }
  }
  if (data.length > 0) {
    answer.push(data);
  }
  return answer.length;
}
