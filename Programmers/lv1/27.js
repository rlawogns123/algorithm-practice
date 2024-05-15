// 하샤드 수

function solution(x) {
  var answer = true;
  const n = String(x);
  let sum = 0;
  for (let str of n) {
    sum += Number(str);
  }
  answer = x % sum === 0 ? true : false;
  return answer;
}
