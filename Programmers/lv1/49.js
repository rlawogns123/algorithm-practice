// 부족한 금액 계산하기

function solution(price, money, count) {
  var answer = 0;
  let cost = 0;
  for (let i = 1; i <= count; i++) {
    cost += price * i;
  }
  answer = money > cost ? 0 : cost - money;
  return answer;
}
