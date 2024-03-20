// 전국 대회 선발 고사

function solution(rank, attendance) {
  var answer = 0;
  const data = rank.filter((e, i) => attendance[i]).sort((a, b) => a - b);
  const [a, b, c] = [rank.indexOf(data[0]), rank.indexOf(data[1]), rank.indexOf(data[2])]
  answer = 10000 * a + 100 * b + c;
  return answer;
}
