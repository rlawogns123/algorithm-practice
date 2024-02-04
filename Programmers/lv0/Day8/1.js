// 간단한 논리 연산

function solution(x1, x2, x3, x4) {
  var answer = true;
  const y1 = x1 === true || x2 === true ? true : false;
  const y2 = x3 === true || x4 === true ? true : false;
  answer = y1 === true && y2 === true ? true : false;
  return answer;
}
