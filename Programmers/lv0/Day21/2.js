// 전국 대회 선발 고사

function solution(rank, attendance) {
  var answer = 0;
  const deleted = rank.filter((_, index) => attendance[index]);
  deleted.sort((a, b) => a - b);
  const realPart = deleted.map((item) => rank.findIndex((r) => r === item));
  answer = realPart[0] * 10000 + realPart[1] * 100 + realPart[2];
  return answer;
}
