// 최소직사각형

function solution(sizes) {
  var answer = 0;
  const data = [];
  for (let i = 0; i < sizes.length; i++) {
    data.push(sizes[i].sort((a, b) => a - b));
  }
  const widthArr = data.map((e) => e[0]);
  const heightArr = data.map((e) => e[1]);

  answer = Math.max(...widthArr) * Math.max(...heightArr);
  return answer;
}
