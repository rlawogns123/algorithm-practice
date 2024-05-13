// 콜라츠 추측

function solution(num) {
  var answer = 0;
  let cnt = 0;
  while (num !== 1) {
    if (num % 2 === 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    cnt++;
  }
  answer = cnt > 500 ? -1 : cnt;
  return answer;
}
