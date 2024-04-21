// 2016년

function solution(a, b) {
  const data = [30, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  let result = 0;
  if (a === 1) {
    result += b - 1;
  } else {
    let n = data.slice(0, a - 1);
    n.forEach((num) => {
      result += num;
    });
    result += b;
  }
  result %= 7;
  var answer = day[result];

  return answer;
}
