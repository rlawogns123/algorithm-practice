// 카드 뭉치

function solution(cards1, cards2, goal) {
  var answer = "Yes";
  let cnt = 0;
  for (let str of goal) {
    if (cards1[0] === str) {
      cards1.shift();
      cnt++;
    } else if (cards2[0] === str) {
      cards2.shift();
      cnt++;
    } else {
      answer = "No";
    }
  }
  answer = cnt === goal.length ? "Yes" : "No";
  return answer;
}
