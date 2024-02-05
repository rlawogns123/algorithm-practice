// 배열 만들기 5

function solution(intStrs, k, s, l) {
  var answer = [];
  for (let data of intStrs) {
    let num = Number(data.substr(s, l));
    if (num > k) {
      answer.push(num);
    }
  }
  return answer;
}
