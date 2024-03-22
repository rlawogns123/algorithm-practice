// 그림 확대

function solution(picture, k) {
  var answer = [];
  for (let str of picture) {
    let temp = "";
    for (let data of str) {
      temp += data.repeat(k);
    }
    for (let i = 0; i < k; i++) {
      answer.push(temp);
    }
  }
  console.log(answer);
  return answer;
}
