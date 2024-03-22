// 커피 심부름

function solution(order) {
  var answer = 0;
  let cafelatte = "cafelatte";
  for (let str of order) {
    if (str.includes(cafelatte)) {
      answer += 5000;
    } else {
      answer += 4500;
    }
  }
  return answer;
}
